import ReactDOM from 'react-dom';

const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

// words
const words = [
  {
    correct: 2,
    option: ['expression', 'argument', 'syntax'],
    quiz: ['A value provided to a function when the function is called. This value is assigned to the corresponding parameter in the function.'],
  },
  {
    correct: 3,
    option: ['generalization', 'void function', 'assignment'],
    quiz:['A statement that assigns a value to a variable.'],
  },
  {
    correct: 1,
    option: ['base case', 'token', 'script'],
    quiz:['A conditional branch in a recursive function that does not make a recursive call.'],
  },
  {
    correct: 3,
    option: ['frame', 'parameter', 'body'],
    quiz:['The sequence of statements inside a function definition.'],
  },
  {
    correct: 1,
    option: ['boolean expression', 'debugging', 'type'],
    quiz:['An expression whose value is either True or False.'],
  },
  {
    correct: 2,
    option: ['parameter', 'branch', 'method'],
    quiz:['One of the alternative sequences of statements in a conditional statement.'],
  },
  {
    correct: 1,
    option: ['bug', 'variable', 'argument'],
    quiz:['An error in a program.'],
  },
  {
    correct: 3,
    option: ['semantics', 'return value', 'chained conditional'],
    quiz:['A conditional statement with a series of alternative branches.'],
  },
  {
    correct: 1,
    option: ['comment', 'script', 'frame'],
    quiz:['Information in a program that is meant for other programmers (or anyone reading the source code) and has no effect on the execution of the program.'],
  },
  {
    correct: 3,
    option: ['assignment', 'refactoring', 'composition'],
    quiz:['Using an expression as part of a larger expression, or a statement as part of a larger statement.'],
  },
  {
    correct: 2,
    option: ['variable', 'compound statement', 'operand'],
    quiz:['A statement that consists of a header and a body. The header ends with a colon (:). The body is indented relative to the header.']
  },
  {
    correct: 2,
    option: ['condition', 'concatenate', 'program'],
    quiz:['To join two operands end-to-end.']
  },
  {
    correct: 3,
    option: ['void function', 'execute', 'condition'],
    quiz:['The boolean expression in a conditional statement that determines which branch runs.']
  },
  {
    correct: 1,
    option: ['conditional statement', 'fruitful function', 'debugging'],
    quiz:['A statement that controls the flow of execution depending on some condition.']
  },
  {
    correct: 1,
    option: ['debugging', 'type', 'return value'],
    quiz:['The process of finding and correcting bugs.']
  },
  {
    correct: 3,
    option: ['parameter', 'argument', 'development plan'],
    quiz:['A process for writing programs.']
  },
  {
    correct: 2,
    option: ['variable', 'docstring', 'state diagram'],
    quiz:['A string that appears at the top of a function definition to document the function’s interface. ']
  },
  {
    correct: 2,
    option: ['token', 'dot notation', 'development plan'],
    quiz:['The syntax for calling a function in another module by specifying the module name followed by a dot (period) and the function name.']
  },
  {
    correct: 1,
    option: ['encapsulation', 'fruitful function', 'semantics'],
    quiz:['The process of transforming a sequence of statements into a function definition.']
  },
  {
    correct: 3,
    option: ['value', 'state diagram', 'evaluate'],
    quiz:['To simplify an expression by performing the operations in order to yield a single value.']
  },
  {
    correct: 1,
    option: ['exception', 'argument', 'refactoring'],
    quiz:['An error that is detected while the program is running.']
  },
  {
    correct: 2,
    option: ['syntax', 'execute', 'variable'],
    quiz:['To run a statement and do what it says.']
  },
  {
    correct: 1,
    option: ['expression', 'None', 'void function'],
    quiz:['A combination of variables, operators, and values that represents a single result.']
  },
  {
    correct: 3,
    option: ['docstring', 'return value', 'floating-point'],
    quiz:['A type that represents numbers with fractional parts.']
  },
  {
    correct: 1,
    option: ['floor division', 'relational operator', 'traceback'],
    quiz:['An operator, denoted //, that divides two numbers and rounds down (toward negative infinity) to an integer.']
  },
  {
    correct: 3,
    option: ['expression', 'chained conditional', 'flow of execution'],
    quiz:['The order statements run in.']
  },
  {
    correct: 3,
    option: ['assignment', 'development plan', 'formal language'],
    quiz:['Any one of the languages that people have designed for specific purposes, such as representing mathematical ideas or computer programs; all programming languages are formal languages.']
  },
  {
    correct: 1,
    option: ['frame', 'string', 'script'],
    quiz:['A box in a stack diagram that represents a function call. It contains the local variables and parameters of the function.']
  },
  {
    correct: 2,
    option: ['recursion', 'fruitful function', 'method'],
    quiz:['A function that returns a value.']
  },
  {
    correct: 1,
    option: ['function', 'bug', 'void function'],
    quiz:['A named sequence of statements that performs some useful operation. Functions may or may not take arguments and may or may not produce a result.']
  },
  {
    correct: 3,
    option: ['refactoring', 'string', 'function call'],
    quiz:['A statement that runs a function. It consists of the function name followed by an argument list in parentheses.']
  },
  {
    correct: 2,
    option: ['relational operator', 'function definition', 'argument'],
    quiz:['A statement that creates a new function, specifying its name, parameters, and the statements it contains.']
  },
  {
    correct: 1,
    option: ['function object', 'recursion', 'program'],
    quiz:['A value created by a function definition. The name of the function is a variable that refers to a function object.']
  },
  {
    correct: 3,
    option: ['assignment', 'return statement', 'generalization'],
    quiz:['The process of replacing something unnecessarily specific (like a number) with something appropriately general (like a variable or parameter).']
  },
  {
    correct: 1,
    option: ['header', 'comment', 'relational operator'],
    quiz:['The first part of a compound statement, begins with a keyword and ends with a colon ( : )']
  },
  {
    correct: 2,
    option: ['refactoring', 'import statement', 'body'],
    quiz:['A statement that reads a module file and creates a module object.']
  },
  {
    correct: 2,
    option: ['script', 'infinite recursion', 'bug'],
    quiz:['A recursion that doesn’t have a base case, or never reaches it. Eventually, an infinite recursion causes a runtime error.']
  },
  {
    correct: 1,
    option: ['integer', 'debugging', 'argument'],
    quiz:['A type that represents whole numbers.']
  },
  {
    correct: 3,
    option: ['type', 'fruitful function', 'interactive mode'],
    quiz:['A way of using the Python interpreter by typing code at the prompt. ']
  },
  {
    correct: 1,
    option: ['interface', 'assignment', 'program'],
    quiz:['A description of how to use a function, including the name and descriptions of the arguments and return value.']
  },
  {
    correct: 3,
    option: ['chained conditional', 'variable', 'keyword'],
    quiz:['A reserved word that is used to parse a program; you cannot use keywords like if, def, and while as variable names. ']
  },
  {
    correct: 2,
    option: ['string', 'keyword argument', 'argument'],
    quiz:['An argument that includes the name of the parameter as a “keyword”. ']
  },
  {
    correct: 1,
    option: ['local variable', 'recursion', 'base case'],
    quiz:['A variable defined inside a function. A local variable can only be used inside its function.']
  },
  {
    correct: 3,
    option: ['traceback', 'development plan', 'logical operator'],
    quiz:['One of the operators that combines boolean expressions: and, or, and not.']
  },
  {
    correct: 2,
    option: ['expression', 'loop', 'recursion'],
    quiz:['A part of a program that can run repeatedly.']
  },
  {
    correct: 1,
    option: ['method', 'condition', 'bug'],
    quiz:['A function that is associated with an object and called using dot notation. ']
  },
  {
    correct: 1,
    option: ['module', 'value', 'operand'],
    quiz:['A file that contains a collection of related functions and other definitions.']
  },
  {
    correct: 3,
    option: ['argument', 'program', 'module object'],
    quiz:['A value created by an import statement that provides access to the values defined in a module.']
  },
  {
    correct: 1,
    option: ['modulus operator', 'string', 'body'],
    quiz:['An operator, denoted with a percent sign (%), that works on integers and returns the remainder when one number is divided by another.']
  },
  {
    correct: 2,
    option: ['furuitful function', 'natural language', 'generalization'],
    quiz:['Any one of the languages that people speak that evolved naturally. ']
  },
  {
    correct: 1,
    option: ['nested conditional', 'docstring', 'chained conditional'],
    quiz:['A conditional statement that appears in one of the branches of another conditional statement.']
  },
  {
    correct: 3,
    option: ['generalization', 'concatenate', 'None'],
    quiz:['A special value returned by void functions.']
  },
  {
    correct: 1,
    option: ['operand', 'expression', 'comment'],
    quiz:['One of the values on which an operator operates. ']
  },
  {
    correct: 3,
    option: ['void function', 'boolean expression', 'operator'],
    quiz:['A special symbol that represents a simple computation like addition, multiplication, or string concatenation.']
  },
  {
    correct: 2,
    option: ['concatenate', 'order of operations', 'refactoring'],
    quiz:['Rules governing the order in which expressions involving multiple operators and operands are evaluated. ']
  },
  {
    correct: 1,
    option: ['parameter', 'exception', 'semantics'],
    quiz:['A name used inside a function to refer to the value passed as an argument.']
  },
  {
    correct: 3,
    option: ['body', 'debugging', 'parse'],
    quiz:['To examine a program and analyze the syntactic structure.']
  },
  {
    correct: 1,
    option: ['postcondition', 'variable', 'expression'],
    quiz:['A requirement that should be satisfied by the function before it ends']
  },
  {
    correct: 2,
    option: ['bug', 'precondition', 'execute'],
    quiz:['A requirement that should be satisfied by the caller before a function starts. ']
  },
  {
    correct: 1,
    option: ['print statement', 'fruitful function', 'string'],
    quiz:['An instruction that causes the Python interpreter to display a value on the screen. ']
  },
  {
    correct: 3,
    option: ['base case', 'concatenate', 'program'],
    quiz:['is a sequence of instructions that specifies how to perform a computation']
  },
  {
    correct: 3,
    option: ['syntax', 'execute', 'recursion'],
    quiz:['The process of calling the function that is currently executing. ']
  },
  {
    correct: 2,
    option: ['floating-point', 'refactoring', 'expression'],
    quiz:['The process of modifying a working program to improve function interfaces and other qualities of the code. ']
  },
  {
    correct: 1,
    option: ['relational operator', 'concatenate', 'variable'],
    quiz:['One of the operators that compares its operands: ==, !=, >, <, >=, and <=. ']
  },
  {
    correct: 2,
    option: ['return value', 'return statement', 'value'],
    quiz:['A statement that causes a function to end immediately and return to the caller.']
  },
  {
    correct: 1,
    option: ['return value', 'method', 'argument'],
    quiz:['The result of a function. If a function call is used as an expression, the return value is the value of the expression.']
  },
  {
    correct: 3,
    option: ['method', 'comment', 'script'],
    quiz:['A program stored in a file.']
  },
  {
    correct: 3,
    option: ['condition', 'assignment', 'script mode'],
    quiz:['A way of using the Python interpreter to read code from a script and run it. ']
  },
  {
    correct: 2,
    option: ['operand', 'semantic error', 'recursion'],
    quiz:['An error in a program that makes it do something other than what the programmer intended.']
  },
  {
    correct: 1,
    option: ['semantics', 'None', 'comment'],
    quiz:['The meaning of a program.']
  },
  {
    correct: 3,
    option: ['expression', 'body', 'stack diagram'],
    quiz:['A graphical representation of a stack of functions, their variables, and the values they refer to.']
  },
  {
    correct: 1,
    option: ['state diagram', 'refactoring', 'expression'],
    quiz:['A graphical representation of a set of variables and the values they refer to.']
  },
  {
    correct: 2,
    option: ['value', 'statement', 'boolean expression'],
    quiz:['A section of code that represents a command or action. So far, the statements we have seen are assignments and print statements.']
  },
  {
    correct: 1,
    option: ['string', 'exception', 'operand'],
    quiz:['A type that represents sequences of characters.']
  },
  {
    correct: 2,
    option: ['docstring', 'syntax', 'floating-point'],
    quiz:['The rules that govern the structure of a program.']
  },
  {
    correct: 3,
    option: ['void function', 'chained conditional', 'syntax error'],
    quiz:['An error in a program that makes it impossible to parse (and therefore impossible to interpret).']
  },
  {
    correct: 1,
    option: ['token', 'method', 'frame'],
    quiz:['One of the basic elements of the syntactic structure of a program, analogous to a word in a natural language.']
  },
  {
    correct: 3,
    option: ['bug', 'argument', 'traceback'],
    quiz:['A list of the functions that are executing, printed when an exception occurs.']
  },
  {
    correct: 2,
    option: ['parameter', 'type', 'base case'],
    quiz:['A category of values. The types we have seen so far are integers (type int), floatingpoint numbers (type float), and strings (type str).']
},
  {
    correct: 1,
    option: ['value', 'concatenate', 'body'],
    quiz:['One of the basic units of data, like a number or string, that a program ']
  },
  {
    correct: 3,
    option: ['assignment', 'expression', 'variable'],
    quiz:['A name that refers to a value.']
  },
  {
    correct: 2,
    option: ['argument', 'void function', 'generalization'],
    quiz:['A function that always returns None.']
  },
//   {
//     correct: 1,
//     option: ['', '', ''],
//     quiz:[''],
//   },
]

// questions
function shuffle(words) {
    for (let i = words.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = words[i];
      words[i] = words[j];
      words[j] = temp;
    }
    return words;
  }
const questions = (shuffle(words));

let clicked = []
let score = 0

scoreDisplay.textContent = score


function populateQuestions() {
  questions.forEach((question) => {
    const questionBox = document.createElement('div')
    questionBox.classList.add('question-box')

    const logoDisplay = document.createElement('h1')
    logoDisplay.textContent = 'ß'
    questionBox.append(logoDisplay)

    question.quiz.forEach((tip) => {
      const tipText = document.createElement('p')
      tipText.textContent = tip
      questionBox.append(tipText)
    })

    const questionButtons = document.createElement('div')
    questionButtons.classList.add('question-buttons')
    questionBox.append(questionButtons)

    question.option.forEach((option, optionIndex) => {
      const questionButton = document.createElement('button')
      questionButton.classList.add('question-button')
      questionButton.textContent = option
      questionButton.addEventListener('click', () =>
        checkAnswer(
          questionBox,
          questionButton,
          option,
          optionIndex + 1,
          question.correct
        )
      )
      questionButtons.append(questionButton)
    })
    const answerDisplay = document.createElement('div')
    answerDisplay.classList.add('answer-display')

    questionBox.append(answerDisplay)
    questionDisplay.append(questionBox)
  })
}

populateQuestions()

function checkAnswer(
  questionBox,
  questionButton,
  option,
  optionIndex,
  correctAnswer
) {
  if (optionIndex === correctAnswer) {
    score++
    scoreDisplay.textContent = score
    addResult(questionBox, 'Correct!', 'correct')
  } else {
    score--
    scoreDisplay.textContent = score
    addResult(questionBox, 'Wrong!', 'wrong')
  }
  clicked.push(option)
  questionButton.disabled = clicked.includes(option)
  if (clicked.includes(option) === true){
    questionBox.disabled = true
  } else {}
}

function addResult(questionBox, answer, className) {
  const answerDisplay = questionBox.querySelector('.answer-display')
  answerDisplay.classList.remove('wrong')
  answerDisplay.classList.remove('correct')
  answerDisplay.classList.add(className)
  answerDisplay.textContent = answer
}


ReactDOM.render(
 
    document.getElementById('app'),
  );
