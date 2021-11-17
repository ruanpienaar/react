// here we would lose the `this` binding, 
// as functions have `this` as undefined by default.

// const obj = {
//     name: 'Ghost',
//     getName() {
//         return this.name;
//     }
// }

// const getName = obj.getName

// console.log(getName())

// crashes with cannot get 'name' from undefined ( IOW: undefined:'name' )

/// 2ndly 

// const func = function () {
//     console.log(this);
// }
// func(); 

// the above prints out undefined for `this`


// To solve this use binding ( bind(Context) )

// const obj = {
//     name: 'Ghost',
//     getName() {
//         return this.name;
//     }
// }

// const getName = obj.getName.bind(obj);

// console.log(getName())