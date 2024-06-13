"""
Gets the leaderboard scores for all LLM players.
Calculates total performance across entire quiz question bank.
"""

import json

# Initialize counters
total_questions = 0
player_correct_answers = {}

# Read JSON file
with open('quiz-with-llm-answers.json', 'r') as file:
    data = json.load(file)

    # Process each question in the JSON data
    for question_data in data:
        total_questions += 1

        # Get answered_correctly dictionary
        answered_correctly = question_data.get('answered_correctly', {})

        # Update player_correct_answers dictionary based on answered_correctly
        for player, correct in answered_correctly.items():
            if player not in player_correct_answers:
                player_correct_answers[player] = 0
            if correct:
                player_correct_answers[player] += 1

# Output results
print(f"Total number of questions: {total_questions}")
print("Number of correct answers for each player:")
for player, correct_count in player_correct_answers.items():
    print(f"{player}: {correct_count}")
