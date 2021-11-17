// ES5 function
//
// const square = function (x) {
//     return x * x;
// };

//ES6 arrow function ( always anonymous )

//   VERBOSE version
// const squareArrow = (x) => {
//     return x * x;
// }

// arrow function expression syntax: ( single expression - ON THE SAME LINE )
const squareArrow = (x) => x * x;

console.log(squareArrow(8));


// challenge
// const getFirstName = (fullname) => {
//     return fullName.split(' ')[0];
// }

// const getFirstNameExpr = (fullName) => fullName.split(' ')[0];