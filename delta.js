// 1. Difference between let, const and var

function checkScope() {
  var a = "I am var";
  let b = "I am let";
  const c = "I am const";

  console.log(a);
  console.log(b);
  console.log(c);
}
checkScope();


// Difference in Scope:
// var   -> Function scoped
// let   -> Block scoped
// const -> Block scoped and value cannot be reassigned



// 2. Return second fruit from array

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
function getSecondFruit(arr) {
  return arr[1];
}
console.log("Second Fruit:", getSecondFruit(fruits));


// 3. Add element using push() and remove using pop()

function modifyArray(arr) {
  arr.push("New Element");
  arr.pop();
  return arr;
}
console.log("Modified Array:", modifyArray([1, 2, 3]));


// 4. Square each number using map()

const numbers = [1, 2, 3, 4, 5];
function squareNumbers(arr) {
  return arr.map(num => num * num);
}
console.log("Squared Numbers:", squareNumbers(numbers));


// 5. Filter odd numbers using filter()

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log("Odd Numbers:", getOddNumbers(nums));


// 6. Object person with greeting message

const person = {
  name: "Sujal",
  age: 21,
  occupation: "Developer"
};
function greetPerson(obj) {
  console.log(
    `Hello, my name is ${obj.name}. I am ${obj.age} years old and I work as a ${obj.occupation}.`
  );
}
greetPerson(person);


// 7. Calculate area of rectangle

function calculateArea(rectangle) {
  return rectangle.width * rectangle.height;
}
const rectangle = {
  width: 10,
  height: 5
};
console.log("Area of Rectangle:", calculateArea(rectangle));


// 8. Return object keys using Object.keys()

const student = {
  name: "Ram",
  age: 20,
  course: "BCA"
};
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log("Object Keys:", getObjectKeys(student));


// 9. Merge two objects using Object.assign()

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
const obj1 = { name: "Sujal" };
const obj2 = { city: "Pune" };
console.log("Merged Object:", mergeObjects(obj1, obj2));


// 10. Calculate sum using reduce()

const values = [10, 20, 30, 40];
function calculateSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of Numbers:", calculateSum(values));