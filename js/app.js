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
    // if i = 5, start the sixth quesiton
    let chances = 0;
    let isCorrect = false;
    while (chances < 4 && !isCorrect) {
      // send user the question and let them know how many guesses they have left
      const questionSix = parseInt(prompt(questionList[i]));
      // check if user's guess was correct, too high, or too low
      if (questionSix === 8) {
        // on correct guess, we escape the loop
        alert('Wow, you got it');
        console.log(`The user guessed correctly after guessing ${chances + 1} ${chances === 0 ? 'time' : 'times'}.`);
        isCorrect = true;
        score++;
        // break;
        // incorrect guesses increment the chances by one and alert user with feedback
      } else if (questionSix < 8) {
        chances++;
        chances < 4 && alert(`Nope. It's more than that. You have ${4 - chances} ${chances === 3 ? 'guess' : 'guesses'} left.`);
      } else if (questionSix > 8) {
        chances++;
        chances < 4 && alert(`No, not that many. You have ${4 - chances} ${chances === 3 ? 'guess' : 'guesses'} left.`);
      } else {
        chances++;
        chances < 4 && alert(`My dude, you have to enter a number. You have ${4 - chances} ${chances === 3 ? 'guess' : 'guesses'} left.`);
      }
    }
    // this alert displays if user failed to guess correctly
    !isCorrect && alert('Sorry. The correct answer was 8.');
    !isCorrect && console.log('The user failed to guess correctly.');
  } else if (i === 6) {
    // if i === 6, start the final question
    let chances = 0;
    let isCorrect = false;
    while (chances < 4 && !isCorrect) {
      // send user the question and let them know how many guesses they have left
      const questionSeven = prompt(questionList[i]);
      // check if users's guess was correct
      if (finalQuestionResponse.includes(questionSeven.toLowerCase())) {
        // correct response escapes while loop and alerts user that they are correct
        alert('You got one! Way to go. The answers were Idaho and Missouri');
        console.log(`The user guessed correctly after guessing ${chances + 1} ${chances === 0 ? 'time' : 'times'}.`);
        isCorrect = true;
        score++;
        // break;
      } else {
        // incorrecct response alerts the user and increments chances by one
        chances++;
        chances < 4 && alert(`Nope. Not one of them. You have ${4 - chances} ${chances === 3 ? 'guess' : 'guesses'} left.`);
      }
    }
    // this alert displays if user failed to guess correctly
    !isCorrect && alert('Sorry. The correct answers were Idaho and Missouri.');
    !isCorrect && console.log('The user failed to guess correctly.');
  } else {
    firstFiveQ(i);
  //   // for questions one through five
  //   // gets a question from the list and saves the user's response
  //   const userResponse = prompt(questionList[i]);
  //   console.log(`Response: ${userResponse}`);
  //   let result;
  //   let response;
  //   // find out if the user gave the correct answer
  //   if (answerKey[i]) {
  //     // the correct answer was yes
  //     result = posResponse.includes(userResponse.toLowerCase());
  //   } else {
  //     // the correct answer was no
  //     result = negResponse.includes(userResponse.toLowerCase());
  //   }
  //   // create the response to the user based on their answer
  //   if (result) {
  //     response = 'Correct! ' + responseList[i];
  //     console.log('The user was correct.');
  //     score++;
  //   } else {
  //     response = 'Wrong! ' + responseList[i];
  //     console.log('The user was incorrect.');
  //   }
  //   console.log(`Answer: ${responseList[i]}`);
  //   alert(response);
  }
}

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


console.log(`The user's final score is ${score}/7`);
alert(`Thanks for playing, ${userName}. Here is your final score: ${score}/7`);