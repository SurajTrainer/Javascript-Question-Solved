// write a javascript program to create a word meaning dictonary of 5 words

let word_meaning = {
        english: 'england',
        chini: 'china',
        hindi: 'india',
        sanskrit: 'vrindawan',
        prime_minister: 'narendra modi',
}

// console.log(word_meaning.english);
// console.log(word_meaning.chini);
// console.log(word_meaning.hindi);
// console.log(word_meaning.sanskrit);
// console.log(word_meaning.prime_minister);

console.log(word_meaning);
console.log('word_meaning : ');

for(let word in word_meaning){
    console.log(`${word} : ${word_meaning[word]}`);
}

// example  with chatgpt
// Define a dictionary object with word meanings
const wordDictionary = {
    "apple": "A round fruit with red or green skin and a whitish interior",
    "computer": "An electronic device for storing and processing data",
    "ocean": "A large body of saltwater that covers most of the Earth's surface",
    "mountain": "A large landform that rises prominently above its surroundings",
    "book": "A set or collection of written or printed sheets bound together"
  };
  
  // Display the word meanings
//   console.log("Word Dictionary:");
  
  for (const word in wordDictionary) {
    // console.log(`${word}: ${wordDictionary[word]}`);
  }
  