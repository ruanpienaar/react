export const isAdult = (age) => age >= 18;
export const canDrink = (age) => age >= 21;

const isSenior = (age) => age >= 65;

// manual way
// export { isAdult, canDrink, isSenior as default }

// exporting default
export default isSenior;

