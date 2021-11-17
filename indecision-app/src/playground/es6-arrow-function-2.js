// arguments object - no longer bound with arrow functions
// this keyword - no longer bound with arrow functions

// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// }

const add = (a, b) => {
    // console.log(arguments); // Uncaught ReferenceError: arguments is not defined
    return a + b;
}

console.log(add(55, 1, 1001));

// this keyword

const user = {
    name: 'firstname',
    cities: ['bla', 'bloo'],

    // ES5 def
    // printPlacesLived: function() {

    // ES6 method declaration
    printPlacesLived(){

        // doesn't work
        // this.cities.forEach(function(city){

        // arrow function
        // this.cities.forEach((city) => {

        //     // this - not bound in anon functions
        //     // console.log(this.name + ' lived in '+city);

        //     console.log(this.name + ' lived in '+city);
        // })

        // longer
        // return const cityMessages = this.cities.map((city) => {
        //     return this.name + ' lived in '+city;
        // });

        return this.cities.map((city) => this.name + ' lived in '+city);

    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
