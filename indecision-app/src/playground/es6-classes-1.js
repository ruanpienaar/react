class Person {
    constructor(name = "Annonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {

        // icky old way of doing...
        //return 'Hi i am ' + this.name +'!';

        // es6 template string
        return `Hi. I am ${this.name}!`;

    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }

}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {

        // double NOT falsie values

        // !!true
        // true
        // !!false
        // false
        // !!""
        // false
        // !!undefined
        // false
        // Has major method
        return !!this.major;
    }

    // method overwride
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major} `;
        }

        return description;
    }

}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

// const p = new Person("Ruby", 21) ;
// console.log(p.getGreeting());
// console.log(p.getDescription());

// const p2 = new Person() ;
// console.log(p2.getGreeting());
// console.log(p2.getDescription());

const p = new Student("Ruby", 21, 'Physics') ;
console.log(p.getGreeting());
console.log(p.getDescription());
console.log(p.hasMajor());

const p2 = new Student() ;
console.log(p2.getGreeting());
console.log(p2.getDescription());
console.log(p2.hasMajor());

const t = new Traveller("Ruan", 34, "Pretoria");
console.log(t.getGreeting());

const t2 = new Traveller("Ruan", 34);
console.log(t2.getGreeting());