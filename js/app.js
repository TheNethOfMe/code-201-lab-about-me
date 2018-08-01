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

// variables to save the user's score and name
let score = 0;
const userName = prompt('Hey, can I get your name?');
alert(`Nice to meet you ${userName}. Let's see how much you know about Neth.`);
// where all the magic happens
for (let i = 0; i < 7; i++) {
  if (i === 5) {
    console.log('QUESTION 6');
    // if i = 5, start the sixth quesiton
    let chances = 0;
    let isCorrect = false;
    while (chances < 4) {
      // send user the question and let them know how many guesses they have left
      const questionSix = prompt(
        `How many addresses do you think Neth has had in his life? You have ${4 - chances} ${chances === 3 ? 'guess' : 'guesses'}.`
      );
      // check if user's guess was correct, too high, or too low
      console.log(`The user has guessed ${questionSix}`);
      if (questionSix === '8') {
        // on correct guess, chances is set to 4 to escape while loop
        alert('Wow, you got it');
        console.log(`The user guessed correctly after guessing ${chances + 1} ${chances === 0 ? 'time' : 'times'}.`);
        chances = 4;
        isCorrect = true;
        score++;
        // incorrect guesses increment the chances by one and alert user with feedback
      } else if (questionSix < 8) {
        chances < 3 && alert('Nope. It\'s more than that.');
        chances++;
      } else if (questionSix > 8) {
        chances < 3 && alert('No, not that many.');
        chances++;
      } else {
        chances < 3 && alert('My dude, you have to enter a number.');
        chances++;
      }
    }
    // this alert displays if user failed to guess correctly
    !isCorrect && alert('Sorry. The correct answer was 8.');
    !isCorrect && console.log('The user failed to guess correctly.');
  } else if (i === 6) {
    console.log('FINAL QUESTION');
    // if i === 6, start the final question
    let chances = 0;
    let isCorrect = false;
    while (chances < 4) {
      // send user the question and let them know how many guesses they have left
      const questionSeven = prompt(
        `What other state do you think Neth has lived in? You have ${4 - chances} ${chances === 3 ? 'guess' : 'guesses'}.`
      );
      // check if users's guess was correct
      if (finalQuestionResponse.indexOf(questionSeven.toLowerCase()) >= 0) {
        // correct response escapes while loop and alerts user that they are correct
        alert('You got one! Way to go. The answers were Idaho and Missouri');
        console.log(`The user guessed correctly after guessing ${chances + 1} ${chances === 0 ? 'time' : 'times'}.`);
        chances = 4;
        isCorrect = true;
        score++;
      } else {
        // incorrecct response alerts the user and increments chances by one
        chances < 3 && alert('Nope. Not one of them.');
        chances++;
      }
    }
    // this alert displays if user failed to guess correctly
    !isCorrect && alert('Sorry. The correct answers were Idaho and Missouri.');
    !isCorrect && console.log('The user failed to guess correctly.');
  } else {
    // gets a question from the list and saves the user's response
    const userResponse = prompt(questionList[i]);
    console.log(`QUESTION ${i + 1}`);
    console.log(`Question: ${questionList[i]}`);
    console.log(`Response: ${userResponse}`);
    let result;
    let response;
    // find out if the user gave the correct answer
    if (answerKey[i]) {
      // the correct answer was yes
      result = posResponse.indexOf(userResponse.toLowerCase()) >= 0 ? true : false;
    } else {
      // the correct answer was no
      result = negResponse.indexOf(userResponse.toLowerCase()) >= 0 ? true : false;
    }
    // create the response to the user based on their answer
    if (result) {
      response = 'Correct! ' + responseList[i];
      console.log('The user was correct.');
      score++;
    } else {
      response = 'Wrong! ' + responseList[i];
      console.log('The user was incorrect.');
    }
    console.log(`Answer: ${responseList[i]}`);
    alert(response);
  }
}

console.log(`The user's final score is ${score}/7`);
alert(`Thanks for playing, ${userName}. Here is your final score: ${score}/7`);