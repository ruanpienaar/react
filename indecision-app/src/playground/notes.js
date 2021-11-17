// JSX converts a simple html syntax, into React create element calls.

// JSX does not SUPPORT Objects! you'll have to printout each key' value yourself!

// JSX - nested JSX : Each child in an array or iterator should have a unique "key" prop.
//       you will need to set `key="xxx"` on the nested jsx

console.log("App.js is running!");

//ternary operator
// Expr ? <RETURN_IF_TRUE> : <RETURN_IF_FALSE>
// Ex: true ? 'ABC' : 'DEF'
//   will return 'ABC'

// undefined, null, true, false ARE ignored by JSX

const app = {
    title : 'Indecision app',
    subtitle : 'put your life in the hands of a computer',
    options: ['One', 'Two']
}


// JSX always needs 1 Root element/DOM-element!!!!

// JSX -  javascript XML ( syntax extention )
const template = (
    <div>
        <h1>{app.title}</h1>
        { app.subtitle && <p>{app.subtitle}</p> }
        <p>{ app.options.length > 0 ? 'Here are your options' : 'No Options' }</p>
    </div>
);

// first app code
// // const user = {};
// const user = {
//     name: 'Ruan Pienaar',
//     age: 34,
//     location: 'London'
// }

// function getLocation(location) {
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         { (user.age && user.age >= 18) && <p>Age: {user.age}</p> }
//         {getLocation(user.location)}
//     </div>
// );

// second app:

// JSX attributes, some work like html, some DO NOT, like 'class="button"', for instance:
//          class = should be called, className
//              class is a reserved work in JSX
//                  https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes

const appRoot = document.getElementById('app');
