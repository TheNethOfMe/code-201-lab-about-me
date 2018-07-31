'use strict';

// list of positive and negative responses that will be accepted and the answer key
const posResponse = ['yes', 'y', 'true', 't', 'yup', 'yuppers'];
const negResponse = ['no', 'n', 'false', 'f', 'nope', 'no way, jose'];
const answerKey = [true, false, false, true, false];

// list of the questions to be asked
const questionList =
  [
    'If you brought a dog to class, do you think Neth would want to pet it?',
    'Do you think Neth likes kids?',
    'Is Neth too good to eat at McDonalds?',
    'Does Neth have a favorite sport?',
    'Is Neth\'s opinion of billionairs a positive one?'
  ];

// list of responses to return to user
const responseList =
  [
    'You wouldn\'t be able to stop him',
    'He actually hates children and won\'t go near them because they are full of germs and always sticky.',
    'His favorite is the two cheeseburger combo.',
    'He really enjoys watching curling matches on YouTube.',
    'Capitalism was a mistake! Eat the rich!'
  ];

// where all the magic happens
function evalResponse(correctAnswer, questionNum) {
  // gets user response for a question from the list
  const userResponse = prompt(questionList[questionNum]);
  let result;
  let response;
  // find out if the user gave the correct answer
  if (correctAnswer) {
    // the correct answer was yes
    result = posResponse.indexOf(userResponse.toLowerCase()) >= 0 ? true : false;
  } else {
    // the correct answer was no
    result = negResponse.indexOf(userResponse.toLowerCase()) >= 0 ? true : false;
  }
  // create the response to the user based on their answer
  if (result) {
    response = 'Correct! ' + responseList[questionNum];
  } else {
    response = 'Wrong! ' + responseList[questionNum];
  }
  alert(response);
}

for (let i = 0; i < 5; i++) {
  evalResponse(answerKey[i], i);
}

// const questionOne = prompt(questionList[0]);
// console.log('FIRE ONE', posResponse.indexOf(questionOne.toLowerCase()));
// evalResponse(questionOne, true, 0);
// const questionTwo = prompt(questionList[1]);
// console.log('FIRE TWO', posResponse.indexOf(questionTwo.toLowerCase()));
// evalResponse(questionTwo, false, 1);