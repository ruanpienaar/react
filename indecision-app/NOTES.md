
# notes

- react component class definition needs to start with upper case letter
  as react uses the components in the JSX html, and lower case html elements are reserved from normal html, uppercase for React Components
- render() is always needed when extending react.component
- props in react, is data initialised in react components
- jsx html attributes become react props inside component classes
- ES6, when property name and variable name, same, then can exclude reference to var, like:
  instead of { error: error }, you can write { error }
- stateless funcional component / class/stateful component
- react component props gets passed down
- react compoment state gets stored in instance, and can be changed up/down stream


devtools:

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

$r ( selected component in React developer tool )
is the available in the console, as a global variable.


webpack: ( gulp and grunt does simmilar )

can run babel compiling for you :)
can pull in deps with yarn/npm
bundle all your assets.
module bundler.
organise your javascript.
relies on the es6 import/export syntax between code "islands" ( bundled in a file )

javascript

Conditional (ternary) operator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

```
function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}
```

webpack

exports - named/default exports/inline

exporting inline : export const func1 = () => true;
exporting named : export { bla }
exporting default : export { others, bla as default } ( named )
exporting default : export default subtract;
                    export default EXPRESSION

cannot export var(const/let/var) inline.

importing named
  - import { bla } from 'some.js'
importing default
  - import bla from 'some.js'
  - import myOwnBlaName from 'some.js'
  - import bla, { named } from 'some.js'