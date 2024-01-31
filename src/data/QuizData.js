const quizData = [
  {
    "no": 1,
    "question": "What does the 'cout' object in C++ do?",
    "answers": [
      "Accepts input from the user",
      "Displays output to the console",
      "Performs mathematical calculations",
      "Defines a class"
    ],
    "correct_answer": 2
  },
  {
    "no": 2,
    "question": "Which of the following is NOT a valid variable name in C++?",
    "answers": [
      "myVariable",
      "_myVariable",
      "3myVariable",
      "my_Variable"
    ],
    "correct_answer": 3
  },
  {
    "no": 3,
    "question": "What is the correct way to declare a pointer in C++?",
    "answers": [
      "int *ptr;",
      "int ptr;",
      "ptr int;",
      "*int ptr;"
    ],
    "correct_answer": 1
  },
  {
    "no": 4,
    "question": "Which of the following operators is used to access the value pointed to by a pointer?",
    "answers": [
      "&",
      "*",
      "->",
      "=>"
    ],
    "correct_answer": 2
  },
  {
    "no": 5,
    "question": "What is the result of the expression: 5 + 3 * 2?",
    "answers": [
      "16",
      "11",
      "13",
      "10"
    ],
    "correct_answer": 3
  },
  {
    "no": 6,
    "question": "Which keyword is used to define a function in C++?",
    "answers": [
      "function",
      "method",
      "def",
      "void"
    ],
    "correct_answer": 4
  },
  {
    "no": 7,
    "question": "What does the 'break' statement do in a loop?",
    "answers": [
      "Ends the program",
      "Exits the loop",
      "Continues to the next iteration of the loop",
      "Skips the current iteration of the loop"
    ],
    "correct_answer": 2
  },
  {
    "no": 8,
    "question": "Which of the following is NOT a valid C++ data type?",
    "answers": [
      "int",
      "bool",
      "character",
      "double"
    ],
    "correct_answer": 3
  },
  {
    "no": 9,
    "question": "What is the output of the following code snippet?\nint x = 5;\nint y = ++x;\nstd::cout << y;",
    "answers": [
      "4",
      "5",
      "6",
      "Error"
    ],
    "correct_answer": 3
  },
  {
    "no": 10,
    "question": "What is the correct syntax to define a class named 'Rectangle' in C++?",
    "answers": [
      "class Rectangle { };",
      "class Rectangle = { };",
      "Rectangle class { };",
      "Rectangle = { };"
    ],
    "correct_answer": 1
  },
  {
    "no": 11,
    "question": "In C++, what does the 'cin' object do?",
    "answers": [
      "Displays output to the console",
      "Accepts input from the user",
      "Performs mathematical calculations",
      "Defines a class"
    ],
    "correct_answer": 2
  },
  {
    "no": 12,
    "question": "What is the result of the expression: 10 % 3?",
    "answers": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correct_answer": 2
  },
  {
    "no": 13,
    "question": "Which loop in C++ is used to execute a block of code as long as a condition is true?",
    "answers": [
      "while loop",
      "for loop",
      "do-while loop",
      "if-else loop"
    ],
    "correct_answer": 1
  },
  {
    "no": 14,
    "question": "What is the correct way to include the header file 'iostream' in a C++ program?",
    "answers": [
      "#include <iostream>",
      "#include 'iostream'",
      "<iostream>",
      "'iostream'"
    ],
    "correct_answer": 1
  },
  {
    "no": 15,
    "question": "What is the output of the following code snippet?\nint num = 10;\nif (num > 5) {\n  std::cout << 'Hello';\n}",
    "answers": [
      "10",
      "Hello",
      "Nothing",
      "Error"
    ],
    "correct_answer": 2
  },
  {
    "no": 16,
    "question": "Which of the following is a valid way to initialize an array in C++?",
    "answers": [
      "int arr[5] = {1, 2, 3, 4, 5};",
      "int arr[5] = {1, 2, 3};",
      "int arr[] = {1, 2, 3, 4, 5};",
      "All of the above"
    ],
    "correct_answer": 4
  },
  {
    "no": 17,
    "question": "What does the 'const' keyword indicate in a C++ function declaration?",
    "answers": [
      "The function returns a constant value",
      "The function cannot be modified",
      "The function is a constructor",
      "The function is declared in a constant class"
    ],
    "correct_answer": 2
  },
  {
    "no": 18,
    "question": "What is the output of the following code snippet?\nint i = 0;\nwhile (i < 3) {\n  std::cout << i;\n  i++;\n}",
    "answers": [
      "012",
      "0123",
      "123",
      "01234"
    ],
    "correct_answer": 3
  },
  {
    "no": 19,
    "question": "What is the purpose of the 'continue' statement in a loop?",
    "answers": [
      "Ends the loop",
      "Skips the rest of the loop code and jumps to the next iteration",
      "Prints a message to the console",
      "Exits the program"
    ],
    "correct_answer": 2
  },
  {
    "no": 20,
    "question": "Which of the following is NOT a comparison operator in C++?",
    "answers": [
      "==",
      "!=",
      "<>",
      ">="
    ],
    "correct_answer": 3
  }
];

export default quizData;