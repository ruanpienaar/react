console.log('utils.js is running');

const square = (x) => x * x;
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

// 2 types of export
// default exports
// named exports


//named exports ( NOT AN OBJECT definition {} )
// export { square, add, subtract as default };
export default subtract;

// can also just export functions as you define them
// then you don't need to manually export them below.
// export const square = (x) => x * x;