document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            "question": "question",
            "choices": [
                "answer",
                "incorrect answer 1",
                "incorrect answer 2",
                "incorrect answer 3"
            ],
            "correct_answer": "answer",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is Artificial Intelligence?",
            "choices": [
                "Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence.",
                "Artificial Intelligence is a type of magic that allows computers to think like humans.",
                "Artificial Intelligence is only used in robots and other machines.",
                "Artificial Intelligence is the same as computer programming."
            ],
            "correct_answer": "Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What are the two main categories of Artificial Intelligence?",
            "choices": [
                "Narrow AI and General AI",
                "Machine Learning and Deep Learning",
                "Supervised Learning and Unsupervised Learning",
                "Cognitive AI and Reactive AI"
            ],
            "correct_answer": "Narrow AI and General AI",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is Machine Learning?",
            "choices": [
                "Machine Learning is a field of computer science that focuses on the development of algorithms that can learn from and make predictions or decisions on data.",
                "Machine Learning is a branch of computer science that uses algorithms to analyze data and make predictions based on past experiences.",
                "Machine Learning is a type of artificial intelligence that enables computers to learn from data without being explicitly programmed.",
                "Machine Learning is a technology that allows computers to learn from data and make predictions or decisions based on that learning."
            ],
            "correct_answer": "Machine Learning is a subset of Artificial Intelligence that focuses on the development of algorithms that can learn from and make predictions or decisions on data.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is Deep Learning?",
            "choices": [
                "Deep Learning is a type of artificial intelligence that uses simple algorithms to analyze data.",
                "Deep Learning is a subset of Machine Learning that uses deep neural networks with many layers to learn from and make predictions on complex data.",
                "Deep Learning is a method for training computers to solve specific tasks by providing them with a set of instructions.",
                "Deep Learning is a type of computer programming that focuses on creating software that can learn and adapt."
            ],
            "correct_answer": "Deep Learning is a subset of Machine Learning that uses deep neural networks with many layers to learn from and make predictions on complex data.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is Natural Language Processing (NLP)?",
            "choices": [
                "Natural Language Processing is a subset of Artificial Intelligence that focuses on enabling computers to understand human language.",
                "Natural Language Processing is a type of software that helps people communicate more effectively.",
                "Natural Language Processing is a branch of computer science that deals with the design and development of intelligent agents.",
                "Natural Language Processing is a method for encrypting and decrypting data using complex algorithms."
            ],
            "correct_answer": "Natural Language Processing is a subset of Artificial Intelligence that focuses on enabling computers to understand human language.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is Computer Vision?",
            "choices": [
                "Computer Vision is a type of programming language designed for creating visual effects.",
                "Computer Vision is a subset of Artificial Intelligence that enables computers to interpret and understand visual data from the world around us.",
                "Computer Vision is a specialized field in robotics that focuses on designing cameras for robots.",
                "Computer Vision is a branch of mathematics that studies the geometry of images."
            ],
            "correct_answer": "Computer Vision is a subset of Artificial Intelligence that enables computers to interpret and understand visual data from the world around us.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is an Artificial Neural Network?",
            "choices": [
                "An Artificial Neural Network is a computing system inspired by the structure and function of the human brain that can learn from and make predictions on data. It consists of interconnected nodes.",
                "An Artificial Neural Network is a type of computer program that can only process numerical data.",
                "An Artificial Neural Network is a system that mimics the human brain, but only operates on pre-programmed instructions.",
                "An Artificial Neural Network is a complex mathematical formula used to predict future events with high accuracy."
            ],
            "correct_answer": "An Artificial Neural Network is a computing system inspired by the structure and function of the human brain that can learn from and make predictions on data. It consists of interconnected nodes.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is Reinforcement Learning?",
            "choices": [
                "Reinforcement Learning is a type of supervised learning where an algorithm learns from labeled data to make predictions.",
                "Reinforcement Learning is a subset of Machine Learning where an algorithm learns to take actions in an environment to maximize a reward signal. The algorithm receives feedback in the form of a reward or penalty based on the actions it takes.",
                "Reinforcement Learning is a type of unsupervised learning where an algorithm discovers patterns and structures in unlabeled data.",
                "Reinforcement Learning is a process of training a machine to perform a specific task through trial and error."
            ],
            "correct_answer": "Reinforcement Learning is a subset of Machine Learning where an algorithm learns to take actions in an environment to maximize a reward signal. The algorithm receives feedback in the form of a reward or penalty based on the actions it takes.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is an artificial neural network?",
            "choices": [
                "An artificial neural network is a type of machine learning algorithm that is designed to simulate the way the human brain works by using interconnected nodes to process and analyze data.",
                "An artificial neural network is a type of software program that is used to create realistic 3D graphics.",
                "An artificial neural network is a type of hardware device that is used to store and retrieve data.",
                "An artificial neural network is a type of programming language that is used to create websites."
            ],
            "correct_answer": "An artificial neural network is a type of machine learning algorithm that is designed to simulate the way the human brain works by using interconnected nodes to process and analyze data.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is unsupervised learning?",
            "choices": [
                "Unsupervised learning is a type of machine learning that requires labeled data to train models.",
                "Unsupervised learning is a type of machine learning where computers are given specific examples to learn from.",
                "Unsupervised learning is a type of machine learning that allows computers to learn patterns and relationships in data without being given specific examples or labeled data.",
                "Unsupervised learning is a type of machine learning that focuses on predicting future outcomes based on historical data."
            ],
            "correct_answer": "Unsupervised learning is a type of machine learning that allows computers to learn patterns and relationships in data without being given specific examples or labeled data.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is supervised learning?",
            "choices": [
                "Supervised learning is a type of machine learning where the computer learns from unlabeled data to make predictions.",
                "Supervised learning is a type of machine learning where the computer learns from labeled examples to make predictions.",
                "Supervised learning is a type of machine learning that uses algorithms to identify patterns in data without any prior knowledge.",
                "Supervised learning is a type of machine learning that focuses on understanding the underlying structure of data."
            ],
            "correct_answer": "Supervised learning is a type of machine learning where the computer learns from labeled examples to make predictions.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is artificial general intelligence (AGI)?",
            "choices": [
                "Artificial general intelligence (AGI) refers to the hypothetical ability of machines to understand or learn any intellectual task that a human being can do.",
                "Artificial general intelligence (AGI) is a type of artificial intelligence that can only perform specific tasks, such as playing chess or recognizing images.",
                "Artificial general intelligence (AGI) is a form of intelligence that is only found in humans and other biological organisms.",
                "Artificial general intelligence (AGI) is a type of artificial intelligence that is capable of learning and adapting to new situations, but is limited in its ability to understand and solve complex problems."
            ],
            "correct_answer": "Artificial general intelligence (AGI) refers to the hypothetical ability of machines to understand or learn any intellectual task that a human being can do.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is explainable AI (XAI)?",
            "choices": [
                "Explainable AI (XAI) refers to the development of AI systems that can provide transparent and understandable explanations for their decisions or actions.",
                "Explainable AI (XAI) is a type of AI that only uses data that can be easily explained by humans.",
                "Explainable AI (XAI) is a method for making AI systems more efficient and faster.",
                "Explainable AI (XAI) is a technique used to train AI models on larger datasets."
            ],
            "correct_answer": "Explainable AI (XAI) refers to the development of AI systems that can provide transparent and understandable explanations for their decisions or actions.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is a chatbot?",
            "choices": [
                "A chatbot is a type of robot that can physically interact with humans.",
                "A chatbot is a software application that uses AI to simulate human conversation and provide automated service.",
                "A chatbot is a website that provides information about technology.",
                "A chatbot is a tool used for creating interactive stories."
            ],
            "correct_answer": "A chatbot is a software application that uses AI to simulate human conversation and provide automated service.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is a recommendation system?",
            "choices": [
                "A system that recommends books based on user reviews.",
                "A user interface that helps users find specific items.",
                "An AI-based algorithm that suggests items to users.",
                "A system that provides personalized product information to customers."
            ],
            "correct_answer": "An AI-based algorithm that suggests items to users.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is the difference between AI and machine learning?",
            "choices": [
                "AI refers to the simulation of human intelligence in machines, while machine learning is a specific type of AI that focuses on training algorithms to learn from data.",
                "AI and machine learning are the same thing, both referring to the ability of machines to learn and solve problems.",
                "AI is a broader concept that encompasses machine learning, while machine learning focuses on algorithms that can learn and adapt.",
                "AI is about creating machines that can think like humans, while machine learning is about creating machines that can learn like humans."
            ],
            "correct_answer": "AI refers to the simulation of human intelligence in machines, while machine learning is a specific type of AI that focuses on training algorithms to learn from data.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the main difference between supervised and unsupervised learning?",
            "choices": [
                "Supervised learning uses labeled data, while unsupervised learning uses unlabeled data.",
                "Supervised learning is used for prediction, while unsupervised learning is used for classification.",
                "Supervised learning is faster, while unsupervised learning is more accurate.",
                "Supervised learning requires more data than unsupervised learning."
            ],
            "correct_answer": "Supervised learning uses labeled data, while unsupervised learning uses unlabeled data.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is an AI algorithm?",
            "choices": [
                "An AI algorithm is a set of rules or instructions that a computer program follows to make decisions or perform tasks in an intelligent way.",
                "An AI algorithm is a specific type of computer code that can learn and adapt on its own.",
                "An AI algorithm is a specialized piece of hardware designed for AI applications.",
                "An AI algorithm is a mathematical model that predicts future events."
            ],
            "correct_answer": "An AI algorithm is a set of rules or instructions that a computer program follows to make decisions or perform tasks in an intelligent way.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What are some applications of AI?",
            "choices": [
                "AI has a wide range of applications, including self-driving cars, medical diagnosis, and personalized recommendations.",
                "AI is only used for creating video games and special effects.",
                "AI is not used in any real-world applications.",
                "AI is used for creating complex computer programs and algorithms."
            ],
            "correct_answer": "AI has a wide range of applications, including self-driving cars, medical diagnosis, and personalized recommendations.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is reinforcement learning?",
            "choices": [
                "Reinforcement learning is a type of machine learning where an agent learns by observing and imitating human behavior.",
                "Reinforcement learning is a type of machine learning where an agent learns by analyzing and interpreting large datasets.",
                "Reinforcement learning is a type of machine learning where an agent learns by receiving rewards or punishments based on its actions.",
                "Reinforcement learning is a type of machine learning where an agent learns by solving complex mathematical equations."
            ],
            "correct_answer": "Reinforcement learning is a type of machine learning where an agent learns by receiving rewards or punishments based on its actions.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What are the three types of artificial intelligence?",
            "choices": [
                "Narrow or weak AI, general AI, and super AI",
                "Narrow or weak AI, strong AI, and deep learning AI",
                "Narrow or weak AI, machine learning AI, and natural language processing AI",
                "Narrow or weak AI, artificial neural networks AI, and cognitive AI"
            ],
            "correct_answer": "Narrow or weak AI, general AI, and super AI",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is transfer learning?",
            "choices": [
                "Transfer learning is a machine learning technique where a pre-trained model is used as a starting point for a new model.",
                "Transfer learning is a type of supervised learning where a model learns from labeled data.",
                "Transfer learning is a method for improving the accuracy of a model by training it on a larger dataset.",
                "Transfer learning is a technique for building models that can generalize to new data."
            ],
            "correct_answer": "Transfer learning is a machine learning technique where a pre-trained model is used as a starting point for a new model.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is the difference between AI and machine learning?",
            "choices": [
                "AI is a specific type of machine learning that focuses on natural language processing.",
                "AI is a broader field that encompasses many subfields, including machine learning.",
                "Machine learning is a specific type of AI that focuses on data analysis.",
                "There is no difference between AI and machine learning."
            ],
            "correct_answer": "AI is a broader field that encompasses many subfields, including machine learning.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is overfitting in machine learning?",
            "choices": [
                "Overfitting occurs when a model is trained too much on the training data, resulting in poor performance on unseen data.",
                "Overfitting happens when a model is not trained enough, resulting in low accuracy on both training and testing data.",
                "Overfitting is a technique used to improve model performance by training on a larger dataset.",
                "Overfitting occurs when a model performs equally well on both training and testing data."
            ],
            "correct_answer": "Overfitting occurs when a model is trained too much on the training data, resulting in poor performance on unseen data.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is a neural network?",
            "choices": [
                "A type of machine learning algorithm that recognizes patterns in data, modeled after the human brain with interconnected nodes.",
                "A software program used for data visualization and analysis.",
                "A type of computer hardware specifically designed for complex calculations.",
                "A method for storing and retrieving data in a database."
            ],
            "correct_answer": "A type of machine learning algorithm that recognizes patterns in data, modeled after the human brain with interconnected nodes.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is underfitting in machine learning?",
            "choices": [
                "Underfitting occurs when a model is too complex and overfits the training data.",
                "Underfitting occurs when a model is too simple and fails to capture the underlying patterns in the data.",
                "Underfitting occurs when a model has high bias and low variance.",
                "Underfitting occurs when a model has low bias and high variance."
            ],
            "correct_answer": "Underfitting occurs when a model is too simple and fails to capture the underlying patterns in the data.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the Turing Test?",
            "choices": [
                "The Turing Test is a measure of a machines ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.",
                "The Turing Test is a measure of a machine's ability to solve complex mathematical problems.",
                "The Turing Test is a measure of a machine's ability to understand and respond to human emotions.",
                "The Turing Test is a measure of a machine's ability to access and process information from the internet."
            ],
            "correct_answer": "The Turing Test is a measure of a machines ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is a convolutional neural network (CNN)?",
            "choices": [
                "A CNN is a type of neural network primarily used for processing sequential data like text and speech.",
                "A CNN is a type of neural network that uses convolutional filters to extract features and classify images.",
                "A CNN is a type of neural network that uses recurrent connections to process data.",
                "A CNN is a type of neural network that is specifically designed for natural language processing tasks."
            ],
            "correct_answer": "A CNN is a type of neural network that uses convolutional filters to extract features and classify images.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is natural language generation (NLG)?",
            "choices": [
                "NLG is a technology that analyzes text to understand its meaning.",
                "NLG is a branch of NLP that focuses on creating human-like text from data.",
                "NLG is a process that translates human language into machine code.",
                "NLG is a method for improving the accuracy of machine translation."
            ],
            "correct_answer": "NLG is a branch of NLP that focuses on creating human-like text from data.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is a chatbot?",
            "choices": [
                "A chatbot is a computer program designed to simulate conversation with human users.",
                "A chatbot is a physical robot designed to interact with humans.",
                "A chatbot is a type of software used for online shopping.",
                "A chatbot is a tool for creating social media posts."
            ],
            "correct_answer": "A chatbot is a computer program designed to simulate conversation with human users.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is sentiment analysis?",
            "choices": [
                "Sentiment analysis is a type of NLP that involves analyzing text to determine the emotional tone or attitude of the writer towards a particular topic or subject.",
                "Sentiment analysis is a type of AI that uses machine learning to predict stock prices.",
                "Sentiment analysis is a method used to analyze website traffic and user behavior.",
                "Sentiment analysis is a type of data visualization tool that displays information in an easy-to-understand format."
            ],
            "correct_answer": "Sentiment analysis is a type of NLP that involves analyzing text to determine the emotional tone or attitude of the writer towards a particular topic or subject.",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the largest animal on Earth?",
            "choices": [
                "The blue whale is the largest animal on Earth.",
                "The African elephant is the largest animal on Earth.",
                "The giant squid is the largest animal on Earth.",
                "The sperm whale is the largest animal on Earth."
            ],
            "correct_answer": "The blue whale is the largest animal on Earth.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is the largest land animal?",
            "choices": [
                "The African elephant is the largest land animal.",
                "The blue whale is the largest land animal.",
                "The giraffe is the largest land animal.",
                "The hippopotamus is the largest land animal."
            ],
            "correct_answer": "The African elephant is the largest land animal.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the fastest land animal?",
            "choices": [
                "The cheetah is the fastest land animal.",
                "The lion is the fastest land animal.",
                "The greyhound is the fastest land animal.",
                "The ostrich is the fastest land animal."
            ],
            "correct_answer": "The cheetah is the fastest land animal.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which animal is known to hold its breath for the longest amount of time?",
            "choices": [
                "The sperm whale",
                "The blue whale",
                "The elephant seal",
                "The sea turtle"
            ],
            "correct_answer": "The sperm whale",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is the tallest animal in the world?",
            "choices": [
                "The giraffe is the tallest animal in the world.",
                "The elephant is the tallest animal in the world.",
                "The whale is the tallest animal in the world.",
                "The ostrich is the tallest animal in the world."
            ],
            "correct_answer": "The giraffe is the tallest animal in the world.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which animal has the strongest bite?",
            "choices": [
                "The saltwater crocodile",
                "The great white shark",
                "The hippopotamus",
                "The lion"
            ],
            "correct_answer": "The saltwater crocodile",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is the smallest mammal in the world?",
            "choices": [
                "The bumblebee bat",
                "The pygmy shrew",
                "The Etruscan shrew",
                "The mouse lemur"
            ],
            "correct_answer": "The bumblebee bat",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal has the largest wingspan?",
            "choices": [
                "The wandering albatross",
                "The California Condor",
                "The Golden Eagle",
                "The Andean Condor"
            ],
            "correct_answer": "The wandering albatross",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the heaviest bird in the world?",
            "choices": [
                "The ostrich is the heaviest bird in the world.",
                "The emu is the heaviest bird in the world.",
                "The cassowary is the heaviest bird in the world.",
                "The penguin is the heaviest bird in the world."
            ],
            "correct_answer": "The ostrich is the heaviest bird in the world.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal is known for having the best night vision?",
            "choices": [
                "The tarsier",
                "The owl",
                "The cat",
                "The bat"
            ],
            "correct_answer": "The tarsier",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is considered the most venomous snake in the world?",
            "choices": [
                "The inland taipan",
                "The king cobra",
                "The rattlesnake",
                "The black mamba"
            ],
            "correct_answer": "The inland taipan",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the largest land animal?",
            "choices": [
                "The African elephant is the largest land animal.",
                "The blue whale is the largest land animal.",
                "The giraffe is the largest land animal.",
                "The hippopotamus is the largest land animal."
            ],
            "correct_answer": "The African elephant is the largest land animal.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the fastest land animal?",
            "choices": [
                "The cheetah is the fastest land animal.",
                "The lion is the fastest land animal.",
                "The greyhound is the fastest land animal.",
                "The ostrich is the fastest land animal."
            ],
            "correct_answer": "The cheetah is the fastest land animal.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal can hold its breath the longest?",
            "choices": [
                "The sperm whale",
                "The elephant",
                "The crocodile",
                "The dolphin"
            ],
            "correct_answer": "The sperm whale",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is the tallest animal in the world?",
            "choices": [
                "The giraffe is the tallest animal in the world.",
                "The elephant is the tallest animal in the world.",
                "The blue whale is the tallest animal in the world.",
                "The ostrich is the tallest animal in the world."
            ],
            "correct_answer": "The giraffe is the tallest animal in the world.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal has the strongest bite force?",
            "choices": [
                "The saltwater crocodile",
                "The great white shark",
                "The African lion",
                "The hippopotamus"
            ],
            "correct_answer": "The saltwater crocodile",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the smallest mammal?",
            "choices": [
                "The bumblebee bat",
                "The pygmy shrew",
                "The Etruscan shrew",
                "The hummingbird"
            ],
            "correct_answer": "The bumblebee bat",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal has the largest wingspan?",
            "choices": [
                "The wandering albatross",
                "The golden eagle",
                "The Andean condor",
                "The common crane"
            ],
            "correct_answer": "The wandering albatross",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the heaviest bird in the world?",
            "choices": [
                "The ostrich is the heaviest bird in the world.",
                "The penguin is the heaviest bird in the world.",
                "The eagle is the heaviest bird in the world.",
                "The crane is the heaviest bird in the world."
            ],
            "correct_answer": "The ostrich is the heaviest bird in the world.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which animal is known for having the best night vision?",
            "choices": [
                "The tarsier",
                "The owl",
                "The cat",
                "The dog"
            ],
            "correct_answer": "The tarsier",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal has the longest lifespan?",
            "choices": [
                "The bowhead whale",
                "The giant tortoise",
                "The African elephant",
                "The Greenland shark"
            ],
            "correct_answer": "The bowhead whale",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What animal produces the loudest sound?",
            "choices": [
                "The blue whale",
                "The African elephant",
                "The howler monkey",
                "The lion"
            ],
            "correct_answer": "The blue whale",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which animal is known for having the best sense of smell?",
            "choices": [
                "The bloodhound",
                "The German Shepherd",
                "The Golden Retriever",
                "The Labrador Retriever"
            ],
            "correct_answer": "The bloodhound",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal is often considered one of the most intelligent non-human animals?",
            "choices": [
                "Bottlenose dolphin",
                "Chimpanzee",
                "African Grey Parrot",
                "Octopus"
            ],
            "correct_answer": "Bottlenose dolphin",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal has the longest migration?",
            "choices": [
                "The Arctic tern",
                "The grey whale",
                "The monarch butterfly",
                "The bar-headed goose"
            ],
            "correct_answer": "The Arctic tern",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the largest species of shark?",
            "choices": [
                "The whale shark is the largest species of shark",
                "The great white shark is the largest species of shark",
                "The tiger shark is the largest species of shark",
                "The hammerhead shark is the largest species of shark"
            ],
            "correct_answer": "The whale shark is the largest species of shark",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal is known to have the most legs?",
            "choices": [
                "The millipede",
                "The centipede",
                "The spider",
                "The ant"
            ],
            "correct_answer": "The millipede",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which fish is considered the most venomous in the world?",
            "choices": [
                "Stonefish",
                "Pufferfish",
                "Lionfish",
                "Electric Eel"
            ],
            "correct_answer": "Stonefish",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which animal is known for having the longest neck?",
            "choices": [
                "The giraffe",
                "The elephant",
                "The ostrich",
                "The hippopotamus"
            ],
            "correct_answer": "The giraffe",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which penguin species is the largest?",
            "choices": [
                "The emperor penguin",
                "The gentoo penguin",
                "The king penguin",
                "The macaroni penguin"
            ],
            "correct_answer": "The emperor penguin",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal is renowned for its exceptional camouflage abilities?",
            "choices": [
                "The chameleon",
                "The tiger",
                "The octopus",
                "The leopard"
            ],
            "correct_answer": "The chameleon",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which bird holds the record for the fastest flying speed?",
            "choices": [
                "The peregrine falcon",
                "The golden eagle",
                "The osprey",
                "The hummingbird"
            ],
            "correct_answer": "The peregrine falcon",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which animal has the longest tusks?",
            "choices": [
                "The African elephant has the longest tusks among living animals",
                "The Asian elephant has the longest tusks among living animals",
                "The walrus has the longest tusks among living animals",
                "The narwhal has the longest tusks among living animals"
            ],
            "correct_answer": "The African elephant has the longest tusks among living animals",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the smallest species of monkey?",
            "choices": [
                "The pygmy marmoset is the smallest species of monkey.",
                "The capuchin monkey is the smallest species of monkey.",
                "The spider monkey is the smallest species of monkey.",
                "The howler monkey is the smallest species of monkey."
            ],
            "correct_answer": "The pygmy marmoset is the smallest species of monkey.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which animal has the most powerful jaws?",
            "choices": [
                "The saltwater crocodile has the most powerful jaws among living reptiles.",
                "The African lion has the most powerful jaws among living mammals.",
                "The great white shark has the most powerful jaws among all fish.",
                "The hippopotamus has the most powerful jaws among all land mammals."
            ],
            "correct_answer": "The saltwater crocodile has the most powerful jaws among living reptiles.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the largest species of bear?",
            "choices": [
                "The polar bear is the largest species of bear",
                "The brown bear is the largest species of bear",
                "The black bear is the largest species of bear",
                "The sloth bear is the largest species of bear"
            ],
            "correct_answer": "The polar bear is the largest species of bear",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal has the longest lifespan in captivity?",
            "choices": [
                "The Galapagos tortoise",
                "The African Grey Parrot",
                "The Asian Elephant",
                "The Greenland Shark"
            ],
            "correct_answer": "The Galapagos tortoise",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which of the following is considered the most endangered species of big cat?",
            "choices": [
                "The Amur leopard",
                "The Sumatran tiger",
                "The African lion",
                "The snow leopard"
            ],
            "correct_answer": "The Amur leopard",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which animal is famous for its ability to mimic human speech?",
            "choices": [
                "The African grey parrot",
                "The chimpanzee",
                "The dolphin",
                "The wolf"
            ],
            "correct_answer": "The African grey parrot",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which animal is the fastest marine animal?",
            "choices": [
                "Sailfish",
                "Blue Whale",
                "Great White Shark",
                "Marlin"
            ],
            "correct_answer": "Sailfish",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal is known for having one of the most complex communication systems?",
            "choices": [
                "The bottlenose dolphin",
                "The African Grey Parrot",
                "The chimpanzee",
                "The honeybee"
            ],
            "correct_answer": "The bottlenose dolphin",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the largest species of lizard?",
            "choices": [
                "The Komodo dragon is the largest species of lizard",
                "The Gila monster is the largest species of lizard",
                "The green iguana is the largest species of lizard",
                "The leopard gecko is the largest species of lizard"
            ],
            "correct_answer": "The Komodo dragon is the largest species of lizard",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal is known for its ability to echolocate?",
            "choices": [
                "The bat is known for its ability to echolocate",
                "The dolphin is known for its ability to echolocate",
                "The eagle is known for its ability to echolocate",
                "The snake is known for its ability to echolocate"
            ],
            "correct_answer": "The bat is known for its ability to echolocate",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the largest species of eagle?",
            "choices": [
                "The Philippine eagle is the largest species of eagle.",
                "The golden eagle is the largest species of eagle.",
                "The bald eagle is the largest species of eagle.",
                "The harpy eagle is the largest species of eagle."
            ],
            "correct_answer": "The Philippine eagle is the largest species of eagle.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal is known for its ability to regenerate limbs?",
            "choices": [
                "The axolotl",
                "The chameleon",
                "The starfish",
                "The gecko"
            ],
            "correct_answer": "The axolotl",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the smallest species of deer?",
            "choices": [
                "The pud\u00fa",
                "The white-tailed deer",
                "The elk",
                "The moose"
            ],
            "correct_answer": "The pud\u00fa",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which animal is known for its tool-using abilities?",
            "choices": [
                "The New Caledonian crow",
                "The chimpanzee",
                "The dolphin",
                "The parrot"
            ],
            "correct_answer": "The New Caledonian crow",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the largest species of turtle?",
            "choices": [
                "The leatherback sea turtle is the largest species of turtle.",
                "The green sea turtle is the largest species of turtle.",
                "The giant snapping turtle is the largest species of turtle.",
                "The alligator snapping turtle is the largest species of turtle."
            ],
            "correct_answer": "The leatherback sea turtle is the largest species of turtle.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal is known for having one of the most complex social structures among land animals?",
            "choices": [
                "The African elephant",
                "The chimpanzee",
                "The wolf",
                "The honeybee"
            ],
            "correct_answer": "The African elephant",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the largest species of octopus?",
            "choices": [
                "The giant Pacific octopus is the largest species of octopus",
                "The common octopus is the largest species of octopus",
                "The Humboldt squid is the largest species of octopus",
                "The colossal squid is the largest species of octopus"
            ],
            "correct_answer": "The giant Pacific octopus is the largest species of octopus",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal holds the record for the longest migration by a land mammal?",
            "choices": [
                "The caribou",
                "The grey whale",
                "The African elephant",
                "The wildebeest"
            ],
            "correct_answer": "The caribou",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which of the following is considered one of the most venomous marine animals?",
            "choices": [
                "The box jellyfish",
                "The great white shark",
                "The blue whale",
                "The sea turtle"
            ],
            "correct_answer": "The box jellyfish",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal is known for its ability to camouflage by changing color and pattern?",
            "choices": [
                "The cuttlefish",
                "The chameleon",
                "The octopus",
                "The seahorse"
            ],
            "correct_answer": "The cuttlefish",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the smallest species of whale?",
            "choices": [
                "The dwarf sperm whale",
                "The blue whale",
                "The humpback whale",
                "The gray whale"
            ],
            "correct_answer": "The dwarf sperm whale",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which bird holds the record for the longest migration?",
            "choices": [
                "The Arctic tern",
                "The bar-headed goose",
                "The hummingbird",
                "The bald eagle"
            ],
            "correct_answer": "The Arctic tern",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal is known for its ability to glide through the air?",
            "choices": [
                "The flying squirrel",
                "The bat",
                "The eagle",
                "The kangaroo"
            ],
            "correct_answer": "The flying squirrel",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is the largest species of crab?",
            "choices": [
                "The Japanese spider crab is the largest species of crab.",
                "The American lobster is the largest species of crab.",
                "The king crab is the largest species of crab.",
                "The blue crab is the largest species of crab."
            ],
            "correct_answer": "The Japanese spider crab is the largest species of crab.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal has the longest tongue relative to its body size?",
            "choices": [
                "The chameleon",
                "The giraffe",
                "The whale",
                "The anteater"
            ],
            "correct_answer": "The chameleon",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the smallest species of penguin?",
            "choices": [
                "The little blue penguin",
                "The emperor penguin",
                "The gentoo penguin",
                "The king penguin"
            ],
            "correct_answer": "The little blue penguin",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal is known for its ability to hibernate for long periods?",
            "choices": [
                "The groundhog",
                "The lion",
                "The dolphin",
                "The eagle"
            ],
            "correct_answer": "The groundhog",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is the largest species of fish?",
            "choices": [
                "The whale shark is the largest species of fish.",
                "The blue whale is the largest species of fish.",
                "The giant squid is the largest species of fish.",
                "The great white shark is the largest species of fish."
            ],
            "correct_answer": "The whale shark is the largest species of fish.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal has the most colorful plumage?",
            "choices": [
                "The male peacock has some of the most colorful plumage among birds",
                "The flamingo has the most colorful plumage due to its pink feathers",
                "The macaw has the most colorful plumage with its bright blue and green feathers",
                "The hummingbird has the most colorful plumage, constantly changing colors in the light"
            ],
            "correct_answer": "The male peacock has some of the most colorful plumage among birds",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "What is the largest species of rodent?",
            "choices": [
                "The capybara is the largest species of rodent.",
                "The beaver is the largest species of rodent.",
                "The giant squirrel is the largest species of rodent.",
                "The porcupine is the largest species of rodent."
            ],
            "correct_answer": "The capybara is the largest species of rodent.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal is famous for its uncanny ability to mimic sounds and voices?",
            "choices": [
                "The lyrebird",
                "The parrot",
                "The dolphin",
                "The chimpanzee"
            ],
            "correct_answer": "The lyrebird",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which marine mammal is considered the fastest?",
            "choices": [
                "The common dolphin",
                "The blue whale",
                "The orca",
                "The humpback whale"
            ],
            "correct_answer": "The common dolphin",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": false
            }
        },
        {
            "question": "Which animal has the most powerful kick?",
            "choices": [
                "The ostrich has the most powerful kick among living birds and animals.",
                "The kangaroo has the most powerful kick among living animals.",
                "The horse has the most powerful kick among living animals.",
                "The elephant has the most powerful kick among living animals."
            ],
            "correct_answer": "The ostrich has the most powerful kick among living birds and animals.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "What is the largest species of snake?",
            "choices": [
                "The reticulated python is the largest species of snake.",
                "The Burmese python is the largest species of snake.",
                "The green anaconda is the largest species of snake.",
                "The boa constrictor is the largest species of snake."
            ],
            "correct_answer": "The reticulated python is the largest species of snake.",
            "answered_correctly": {
                "ChatGPT 3.5": false,
                "Gemini 1.0 Pro": true
            }
        },
        {
            "question": "Which animal is known for its ability to regrow lost limbs?",
            "choices": [
                "The starfish",
                "The lizard",
                "The shark",
                "The octopus"
            ],
            "correct_answer": "The starfish",
            "answered_correctly": {
                "ChatGPT 3.5": true,
                "Gemini 1.0 Pro": false
            }
        }
    ];

    const leaderboardData = [
        { name: 'ChatGPT 3.5', icon: 'icons/chatgpt.png' },
        { name: 'Gemini 1.0 Pro', icon: 'icons/gemini.png' },
        { name: 'You', icon: 'icons/you.png', score: 0, time: 0 }
    ];

    const startButton = document.getElementById('start-button');
    const quizContent = document.getElementById('quiz-content');
    const questionContainer = document.getElementById('question-container');
    const submitButton = document.getElementById('submit-button');
    const retryButton = document.getElementById('retry-button');
    const resultsContainer = document.getElementById('results');
    const scoreElement = document.getElementById('score');
    const timeTakenElement = document.getElementById('time-taken');
    const leaderboardContainer = document.getElementById('leaderboard');
    const leaderboardEntries = document.getElementById('leaderboard-entries');
    const progressBarInner = document.getElementById('progress-bar-inner');
    const scoreHeader = document.getElementById('score-header');

    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let startTime;
    let selectedQuizData = [];

    startButton.addEventListener('click', startQuiz);
    submitButton.addEventListener('click', submitQuiz);

    function startQuiz() {
        startButton.style.display = 'none';
        quizContent.style.display = 'block';
        //submitButton.style.display = 'block';
        startTime = new Date();

        // Select and randomize questions
        selectedQuizData = shuffleArray(quizData).slice(0, 11);
        displayQuestion();
        updateProgressBar();
    }

    function displayQuestion() {
        const questionData = selectedQuizData[currentQuestionIndex];
        const shuffledChoices = shuffleArray([...questionData.choices]);
        questionContainer.innerHTML = `
            <div class="question">${questionData.question}</div>
            <div class="choices">
                ${shuffledChoices.map((choice) => `
                    <button class="button choice-button" data-choice="${choice}">${choice}</button>
                `).join('')}
            </div>
        `;
    
        document.querySelectorAll('.choice-button').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.getAttribute('data-choice');
                if (answer === questionData.correct_answer) {
                    correctAnswers++;
                }
                currentQuestionIndex++;
                if (currentQuestionIndex < selectedQuizData.length) {
                    displayQuestion();
                    updateProgressBar();
                } else {
                    endQuiz();
                }
            });
        });
    }
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function updateProgressBar() {
        const progress = (currentQuestionIndex / selectedQuizData.length) * 100;
        progressBarInner.style.width = `${progress}%`;
    }

    function endQuiz() {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000;
        quizContent.style.display = 'none';
        submitButton.style.display = 'none';
        resultsContainer.style.display = 'block';
        retryButton.style.display = 'block';


        scoreElement.textContent = `You answered ${correctAnswers} out of ${selectedQuizData.length} questions correctly.`;
        timeTakenElement.textContent = `Time taken: ${timeTaken.toFixed(2)} seconds.`;

        // Update player's score and time
        leaderboardData[2].score = correctAnswers;

        // Calculate scores for previous players
        leaderboardData.slice(0, 2).forEach(player => {
            player.score = selectedQuizData.reduce((score, question) => {
                return score + (question.answered_correctly[player.name] ? 1 : 0);
            }, 0);
        });

        sortLeaderboard('score');
        leaderboardContainer.style.display = 'block';
    }

    function sortLeaderboard(criteria) {
        leaderboardData.sort((a, b) => {
            return b.score - a.score;
        });

        leaderboardEntries.innerHTML = leaderboardData.map((entry, index) => `
            <tr>
                <td>${index + 1}</td>
                <td><img src="${entry.icon}" alt="${entry.name}" class="leaderboard-icon">${entry.name}</td>
                <td>${entry.score}</td>
            </tr>
        `).join('');
    }
});