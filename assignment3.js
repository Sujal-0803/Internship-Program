// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

let states = [
  "Andhra Pradesh",
  "Bihar",
  "Odisha",
  "Uttar Pradesh",
  "Maharashtra",
  "Assam",
  "Karnataka",
  "Tamil Nadu"
];

let filteredStates = states.filter(state => {
  let firstLetter = state[0].toLowerCase();
  return !"aeiou".includes(firstLetter);
});

console.log("Q1 Output:", filteredStates);



// Q2) let str = 'I love my India'
// output expected = 'India my love I'

let str = "I love my India";

let reversedSentence = str.split(" ").reverse().join(" ");

console.log("Q2 Output:", reversedSentence);



// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = "INDIA";

let arr = string.split("");

arr.splice(3, 2, "O", "N", "E", "S", "I", "A");

let result = arr.join("");

console.log("Q3 Output:", result);



// Q4) Take any string with minimum 20 characters.
// Count number of consonant and vowel in the string.

let text = "JavaScript is very powerful";

let vowels = 0;
let consonants = 0;

for (let char of text.toLowerCase()) {
  if (char >= 'a' && char <= 'z') {
    if ("aeiou".includes(char)) {
      vowels++;
    } else {
      consonants++;
    }
  }
}

console.log("Q4 Output:");
console.log("Vowels:", vowels);
console.log("Consonants:", consonants);



// Q5) Write a function to replace wrong word with correct word in any sentence.

function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

let sentence = "I am learning Jav";
let correctedSentence = correctfn(sentence, "Jav", "Java");

console.log("Q5 Output:", correctedSentence);



// Q6) Filter numbers greater than 5 using array.filter

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

let answer = inputArr.filter(num => num > 5);

console.log("Q6 Output:", answer);



// Q7) Use array.map and array.reduce to calculate average marks

const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

let averages = students.map(student => {
  let total = student.scores.reduce((sum, score) => sum + score, 0);

  let average = total / student.scores.length;

  return {
    name: student.name,
    average: average
  };
});

console.log("Q7 Output:", averages);



// Q8) Repeated sum of digits until single digit

function repeatedSum(num) {

  while (num >= 10) {

    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return num;
}

console.log("Q8 Output:", repeatedSum(456));



// Q9) Function to count number of words in a paragraph

function countWords(paragraph) {

  return paragraph.trim().split(/\s+/).length;
}

let paragraph = "JavaScript is a powerful programming language";

console.log("Q9 Output:", countWords(paragraph));



// Q10) Function to reverse a string

function reverseString(str) {

  return str.split("").reverse().join("");
}

console.log("Q10 Output:", reverseString("Hello"));



// Q11) Find average marks of students using object and array methods

const studentsData = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },

  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },

  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  }
};

let output = {};

for (let student in studentsData) {

  let marks = Object.values(studentsData[student]);

  let total = marks.reduce((sum, mark) => sum + mark, 0);

  let average = total / marks.length;

  output[student] = {
    average: average
  };
}

console.log("Q11 Output:", output);