// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
  
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(prompt) {
    let userInput = input.question("Let's play some scrabble! Enter a word:");    
    return userInput;
};

function simpleScore(word) {
  return word.length;
};

function vowelBonusScore(word) {
  word = word.toLowerCase();
  let tracker = 0;
  let vowels = 'aeiou';
  for (let letter of word) {
    if (vowels.includes(letter)) {
      tracker += 3;
    } else {
      tracker ++;
    }
  }
  //console.log(`${tracker} is the score using vowelBonusScore with word ${word}`);
  return tracker;
};



function scrabbleScore(word) {

  word = word.toLowerCase();
    let letterPoints = '';
    let scoreTotal = 0;
  
    for (let letter of word) {
  
      for (const key in newPointStructure) {
        //console.log(`${key} is key; ${letter} is letter`);
  
      if (key === (letter)) {
        letterPoints += `Points for '${letter}': ${newPointStructure[key]}\n`;
        scoreTotal += Number(newPointStructure[key]);
        }
  
      }
    }
    console.log(letterPoints);
    return scoreTotal;

};

const scoringAlgorithms = [{name: 'Simple Score', description: 'Each letter is worth 1 point.', scorerFunction: simpleScore}, {name: 'Bonus Vowels', description: 'Vowels are 3 pts, consonants are 1 pt.', scorerFunction: vowelBonusScore}, {name: 'Scrabble', description: 'The traditional scoring algorithm.', scorerFunction: scrabbleScore}];

function scorerPrompt(word) {
  userInput = input.question('Which scoring algorithm do you want to use? ');
  const score = scoringAlgorithms[userInput].scorerFunction(word);
  return score;
}

function transform(object) {
  let newObject = {};
  for (let key in object) {
    // console.log(key);
    // console.log(object[key])
    for (let letter of object[key]) {
      
     newObject[letter.toLowerCase()] = key;
    }
  }
  return newObject;
};

const newPointStructure = transform(oldPointStructure);

//console.log(newPointStructure);

function runProgram() {
  
   let word = initialPrompt();
   let score = scorerPrompt(word);
   console.log(`${score}`)
   return score;
 
   
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

