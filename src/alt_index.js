// vocab
// var vocabulary = {
//         correct: [a],
//         option: [a, b, c, d],
//         quiz: [z]
//       }

// vocabulary.correct.push();
// alert(vocabulary.correct);

// vocabulary.option[0].push();
// alert(vocabulary.option[0]);
// vocabulary.option[1].push();
// alert(vocabulary.option[1]);
// vocabulary.option[2].push();
// alert(vocabulary.option[2]);
// vocabulary.option[3].push();
// alert(vocabulary.option[3]);

// vocabulary.quiz.push();
// alert(vocabulary.quiz);


// function populateVocabulary() {
// vocabulary.forEach((word) => {
//     const wordBox = document.createElement('div')
//     wordBox.classList.add('word-box')

//     const logoDisplay = document.createElement('h1')
//     logoDisplay.textContent = '✒'
//     wordBox.append(logoDisplay)

//     word.quiz.forEach((tip) => {
//     const tipText = document.createElement('p')
//     tipText.textContent = tip
//     wordBox.append(tipText)
//     })

//     const wordButtons = document.createElement('div')
//     wordButtons.classList.add('word-buttons')
//     wordBox.append(wordButtons)

//     word.option.forEach((option, optionIndex) => {
//     const wordButton = document.createElement('button')
//     wordButton.classList.add('word-button')
//     wordButton.textContent = option
//     wordButton.addEventListener('click', () =>
//         checkAnswer(
//         wordBox,
//         wordButton,
//         option,
//         optionIndex + 1,
//         // question.correct
//         word.correct
//         )
//     )
//     wordButtons.append(wordButton)
//     })
//     const answerDisplay = document.createElement('div')
//     answerDisplay.classList.add('answer-display')

//     wordBox.append(answerDisplay)
//     wordDisplay.append(wordBox)
// })
// }

// populateVocabulary()