# Preprocessing

## Methodology

1. Obtain quiz dataset as questions and true answers.
2. Convert to a multiple-choice quiz using Gemini 1.5 Flash (prioritise making all options use similar wording, length of option, etc.)/
3. Pose these questions with multiple-choice answers to a selection of LLMs, and record if they answered the query correctly (LLMs are prompted to return the correct answer verbatim, adding additional text besides whitespace is considered an incorrect answer).
4. During the quiz, calculate LLM scores based on their performance on the subset of questions selected for the player. This results in very different leaderboards each quiz, but also prevents gaming the test.

## Create quiz questions

* Download dataset as Q/A `.csv`.
* Run `generate-multiple-choice.py` to generate quiz questions using Gemini 1.5 Flash.

## Get LLM scores

* Requires `generate-multiple-choice.py` to have been ran first.
* Use same system prompt (either set as system prompt or send as first message in chat).
* Do not refresh chat, use same chat session to answer entire quiz.
* Set temperature to `0.2` if controls are available.
* Update quiz question bank with LLM scores per-question.

### System Prompt

```text
Given a question and 4 multiple choice questions, return the correct answer.
Your answer should be a complete copy of the select multiple choice option. Answers that do not match any choices are marked as incorrect.
```
