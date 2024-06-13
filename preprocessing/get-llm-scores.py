import json
from tqdm import tqdm

from langchain_anthropic import ChatAnthropic
from langchain_google_vertexai import VertexAI
from langchain_openai import ChatOpenAI

GEMINI_1_PRO = VertexAI(
    model_name="gemini-1.0-pro-002", temperature=0.2, max_tokens=1024
)
CLAUDE_2 = ChatAnthropic(model="claude-2", temperature=0.2, max_tokens=1024)
CHATGPT_3_5 = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.2, max_tokens=1024)

SYSTEM_PROMPT = """\
Given a question and 4 multiple choice questions, return the correct answer.
Your answer should be a complete copy of the select multiple choice option. Answers that do not match any choices are marked as incorrect.

{question}
"""

# Load quiz questions from JSON file
with open("quiz.json", "r") as file:
    quiz_questions = json.load(file)

# List of LLMs
llms = {
    "ChatGPT 3.5": CHATGPT_3_5,
    "Gemini 1.0 Pro": GEMINI_1_PRO,
}

# Iterate through each question
with tqdm(total=len(quiz_questions)) as pbar:
    for question in quiz_questions:
        # Ask question to each LLM
        answered_correctly = {}
        for llm_name, llm in llms.items():
            # Generate the prompt by concatenating the question and choices
            prompt = SYSTEM_PROMPT.format(
                question=json.dumps(
                    {"question": question["question"], "choices": question["choices"]},
                    indent=4,
                )
            )
            # Ask question to LLM
            answer = llm.invoke(prompt)

            if not isinstance(answer, str):
                answer = answer.content

            # Check if answer matches correct answer
            answered_correctly[llm_name] = answer.strip() == question["correct_answer"]

        # Update quiz question JSON with answered_correctly attribute
        question["answered_correctly"] = answered_correctly

        pbar.update(1)

# Save updated quiz questions to JSON file
with open("quiz answers.json", "w") as file:
    json.dump(quiz_questions, file, indent=4)
