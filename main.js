// function findStudentByAge(studentobj, age) {
//   for (let name in studentobj) {
//     if (studentobj[name] === age) {
//       return name;
//     }
//   }
//   return -1;
// }

// const studentobj = { yash: 26, vaibhav: 24, rajesh: 25 };
// let age = 25;
// console.log(findStudentByAge(studentobj, age)); // Output: rajesh

// age = 29;
// console.log(findStudentByAge(studentobj, age)); // Output: -1
// function findAverageAge(studentObj) {
//   let sum = 0;
//   let count = 0;
//   for (const student in studentObj) {
//     sum += studentObj[student];
//     count++;
//   }
//   const averageAge = sum / count;
//   return averageAge;
// }

// const studentObj = {
//   yash: 26,
//   vaibhav: 24,
//   rajesh: 25,
// };

// const averageAge = findAverageAge(studentObj);
// console.log("Average age = " + averageAge);

// let a = 50;

// function fun() {
//   var a = 30;

//   let b = 20;

//   let c = 30;
// }

// fun();

// console.log(a);

// let name = (arr) => {
//   let count = 0;
//   return () => {
//     console.log(`hello ` + arr[count]);
//     count++;
//   };
// };
// let fun = name(["ram", "shyam"]);
// fun();
// fun();

// let name = (arr) => {
//   let count = 0;
//   return () => {
//     console.log("hello " + arr[count]);
//     count++;
//   };
// };
// let fun = name(["ram", "shyam"]);
// fun();
// fun();

function studentByAge(studentobj, age) {
  for (let name in studentobj) {
    if (studentobj[name] === age) {
      return name;
    }
  }
  return -1;
}
let studentobj = {
  yash: 26,

  vaibhav: 24,

  rajesh: 25,
};
let age = 25;
console.log(studentByAge(studentobj, age));
age = 29;
console.log(studentByAge(studentobj, age));
