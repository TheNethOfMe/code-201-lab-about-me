'use strict';

// list of positive and negative responses that will be accepted and the answer key
const posResponse = ['yes', 'y', 'true', 't', 'yup', 'yuppers'];
const negResponse = ['no', 'n', 'false', 'f', 'nope', 'no way, jose'];
const answerKey = [true, false, false, true, false];
const finalQuestionResponse = ['mo', 'id', 'missouri', 'idaho'];

// list of the questions to be asked
const questionList =
  [
    'If you brought a dog to class, do you think Neth would want to pet it?',
    'Do you think Neth likes kids?',
    'Is Neth too good to eat at McDonalds?',
    'Does Neth have a favorite sport?',
    'Is Neth\'s opinion of billionairs a positive one?',
    'How many addresses do you think Neth has had in his life?',
    'Name a state, besides Washington, you think Neth has lived in. There are two possible answers.'
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

// variables to save the user's score and name
let score = 0;
const userName = prompt('Hey, can I get your name?');
alert(`Nice to meet you ${userName}. Let's see how much you know about Neth.`);

// where all the magic happens
for (let i = 0; i < 7; i++) {
  console.log(`QUESTION ${i + 1}`);
  console.log(questionList[i]);
  if (i === 5) {
    sixthQ(i);
  } else if (i === 6) {
    seventhQ(i);
  } else {
    firstFiveQ(i);
  }
}

// function for the first five questions
function firstFiveQ(questionNum){
  // for questions one through five
  // gets a question from the list and saves the user's response
  const userResponse = prompt(questionList[questionNum]);
  console.log(`Response: ${userResponse}`);
  let result;
  let response;
  // find out if the user gave the correct answer
  if (answerKey[questionNum]) {
    // the correct answer was yes
    result = posResponse.includes(userResponse.toLowerCase());
  } else {
    // the correct answer was no
    result = negResponse.includes(userResponse.toLowerCase());
  }
  // create the response to the user based on their answer
  if (result) {
    response = 'Correct! ' + responseList[questionNum];
    console.log('The user was correct.');
    score++;
  } else {
    response = 'Wrong! ' + responseList[questionNum];
    console.log('The user was incorrect.');
  }
  console.log(`Answer: ${responseList[questionNum]}`);
  alert(response);
}

// function for the sixth question
function sixthQ(questionNum){
  // if i = 5, start the sixth quesiton
  let chances = 4;
  let isCorrect = false;
  while (chances > 0 && !isCorrect) {
    // send user the question and let them know how many guesses they have left
    const questionSix = parseInt(prompt(questionList[questionNum]));
    // check if user's guess was correct, too high, or too low
    if (questionSix === 8) {
      // on correct guess, we escape the loop
      alert('Wow, you got it');
      console.log(`The user guessed correctly with ${chances} ${chances === 1 ? 'guess' : 'guesses'} remaining.`);
      isCorrect = true;
      score++;
      // incorrect guesses increment the chances by one and alert user with feedback
    } else if (questionSix < 8) {
      chances--;
      chances > 0 && alert(`Nope. It's more than that. You have ${chances} ${chances === 1 ? 'guess' : 'guesses'} left.`);
    } else if (questionSix > 8) {
      chances--;
      chances > 0 && alert(`No, not that many. You have ${chances} ${chances === 1 ? 'guess' : 'guesses'} left.`);
    } else {
      chances--;
      chances > 0 && alert(`My dude, you have to enter a number. You have ${chances} ${chances === 1 ? 'guess' : 'guesses'} left.`);
    }
  }
  // this alert displays if user failed to guess correctly
  !isCorrect && alert('Sorry. The correct answer was 8.');
  !isCorrect && console.log('The user failed to guess correctly.');
}

// function for the seventh question
function seventhQ(questionNum){
  let chances = 7;
  let isCorrect = false;
  while (chances > 0 && !isCorrect) {
    // send user the question and let them know how many guesses they have left
    const questionSeven = prompt(questionList[questionNum]);
    // check if users's guess was correct
    if (finalQuestionResponse.includes(questionSeven.toLowerCase())) {
      // correct response escapes while loop and alerts user that they are correct
      alert('You got one! Way to go. The answers were Idaho and Missouri');
      console.log(`The user guessed correctly with ${chances} ${chances === 1 ? 'guess' : 'guesses'} remaining.`);
      isCorrect = true;
      score++;
      // break;
    } else {
      // incorrecct response alerts the user and increments chances by one
      chances--;
      chances > 0 && alert(`Nope. Not one of them. You have ${chances} ${chances === 1 ? 'guess' : 'guesses'} left.`);
    }
  }
  // this alert displays if user failed to guess correctly
  !isCorrect && alert('Sorry. The correct answers were Idaho and Missouri.');
  !isCorrect && console.log('The user failed to guess correctly.');
}

console.log(`The user's final score is ${score}/7`);
alert(`Thanks for playing, ${userName}. Here is your final score: ${score}/7`);