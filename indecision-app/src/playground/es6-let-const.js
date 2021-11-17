// var allows re-assignment & re-define

// var nameVar = 'Andrew';
// nameVar = 'anotherstring';
// varr nameVar = 'anotherstring';
// console.log('nameVar', nameVar);

// let allows re-asignment. BUT NOT RE-DEFINE
// let is assign-only-once

let nameLet = 'Jen';
nameLet = 'Defo';
//console.log('nametLet', nameLet);

// const - disallows re-asignment and re-define!!
// const is read only

const nameConst = 'Ruan';
//nameConst = 'new'; // no no!
console.log('nameConst', nameConst);


// block scoping ( if..else, for...end etc )

// var is function scoped only ( not block scoped )
// let and const is both function & block scoped ( so not accesible outside of the block !!! )

var fullName = 'Ruan Pienaar';

if(fullName){
    //var varFirstName = fullName.split(' ')[0];

    // const varFirstName = fullName.split(' ')[0];
    // let varFirstName = fullName.split(' ')[0];

    console.log(' varFirstName ', varFirstName);
}

// prints the value
//console.log('outside block varFisrtName', varFirstName);

// for const, this will NOT show, and will error
//console.log('outside block varFisrtName', varFirstName);


// Const first, Let if you NEED to, and never var :)