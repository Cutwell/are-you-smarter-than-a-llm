# Script for creating multiple choice quiz questions using LLM
# Requires question/answer dataset, generates list of JSON objects with multiple answers

import json
import vertexai
import os
from vertexai.generative_models import GenerativeModel
import vertexai.preview.generative_models as generative_models


DATASET_CSV = "preprocessing/dataset.csv"
OUTPUT_JSON = "preprocessing/quiz.json"
SYSTEM_INSTRUCTIONS = """\
Given a question and answer, create 4 multiple choice questions for a quiz.
The actual answer must be one of the options. Only the original answer should be considered correct, all others must have something wrong with them.

Follow this output format:

```json
{
    "question": "...",
    "choices": ["...", "...", "...", "..."],
    "correct_answer": "..."
}
```"""

class GeminiFlash:
    def __init__(self) -> None:
        vertexai.init(project=os.getenv("PROJECT_ID"), location=os.getenv("REGION"))

        self.model = GenerativeModel(
            "gemini-1.5-flash-preview-0514",
            system_instruction=[
                SYSTEM_INSTRUCTIONS
            ],
        )

        self.generation_config = {
            "max_output_tokens": 1024,
            "temperature": 1,
            "top_p": 0.95,
        }

        self.safety_settings = {
            generative_models.HarmCategory.HARM_CATEGORY_HATE_SPEECH: generative_models.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            generative_models.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT: generative_models.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            generative_models.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT: generative_models.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            generative_models.HarmCategory.HARM_CATEGORY_HARASSMENT: generative_models.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        }

    def generate(self, text):
        response = self.model.generate_content(
            [text],
            generation_config=self.generation_config,
            safety_settings=self.safety_settings,
            stream=False,
        )

        return response.text


def main():
    llm_client = GeminiFlash()
    output_json_list = []
    with open(DATASET_CSV, "r") as file:
        lines = file.read().splitlines()
        rows = [line.split(",") for line in lines]
        for index, row in enumerate(rows):
            print(f"{index} / {len(rows)}")
            try:
                prompt = f"Question: {row[0]}\nAnswer: {row[1]}"
                json_string = llm_client.generate(prompt)
                json_string = json_string.replace("```json", "").replace("```", "")
                json_obj = json.loads(json_string)
                output_json_list.append(json_obj)
            except:
                pass
    
    with open(OUTPUT_JSON, "w") as file:
        file.write(json.dumps(output_json_list, indent=4))


if __name__ == "__main__":
    main()
