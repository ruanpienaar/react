# react

## dependancies

best to install specific versions of packages needed for project in the package.json file,
instead of using global installs, which forces users to use that across other projects, or
hides what really needs to be installed.

steps to creating a new app.

have node(nodejs.org), npm(node package manager), yarn  installed.

install node & npm from website content

```Bash
node -v
npm -v
```

proper way
```
cd into project folder
yarn add live-server babel-cli@6.24.1
```

add following to package.json:
```
  "scripts": {
    "serve": "live-server public/"
  }
```

quick and dirty way
install yarn from npm ( can also be installed from website content )

```Bash
npm install -g yarn
yarn -v
```

create project

```Bash
mkdir web-app
cd web-app
mkdir scripts
touch scripts/app.js
mkdir public/
mkdir public/scripts/
touch public/index.html
cat > public/index.html<<EOF
<!DOCTYPE html>
<html>

    <head>
        <meta charset="UTF8" />
        <title>web-app</title>
    </head>

    <body>
        <div id="app"></div>
        <script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js"></script>
        <script src="/scripts/app.js"></script>
    </body>

</html>
EOF
cat > src/app.js<<EOF
const template = (
    <div>
        <h1>title</h1>
    </div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
EOF
```

Setup dev environment ( global is NOT the prefered way )

```Bash
yarn install -g live-server

```
Running live-server

```Bash
cd web-app
live-server public
```

Install babel

```Bash
cd web-app
yarn global add babel-cli@6.24.1
OR
npm install -g babel-cli@6.24.1
```

Installing babel presets ( react & env Preset ) ( plugins get out of-date too soon )
( env ES6/ES7 features as ES5 for robust compatibility )
( installed locally in the web-app project )
( yarn init, creates default boiler plate, creates package.json )

```Bash
cd web-app
yarn init
yarn add babel-preset-react@6.24.1
yarn add babel-preset-env@1.5.2
```

Running babel (babeljs.io)

```Bash
cd web-app
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

removing globally installed stuff

```
yarn global remove babel-cli live-server
npm uninstall -g babel-cli live-server
```

when cloning repo:
need to install dependencies with :

```Bash
yarn install
```

webpack:
( bundles your app assets into a single budled asset )
https://webpack.js.org/
webpack uses webpack.config.js as it's configuration.
webpack sets up ES6 import/export for you by default.
! can only have 1 default export.
webpack can also import files without the .js extension.

steps for using external libs:
```
// install -> import -> use
```

importing by using a name only.
as in:
```
import validator from 'validator';
```
causes webpack to find it in the node_modules/ folder

useful yarn adds ( as part of course )
yarn add webpack@3.1.0
yarn add validator@8.0.0
yarn add react@60.0.0 react-dom@16.0.0
yarn add babel-core@6.25.0 babel-loader@7.1.1



source maps in webpack: ( devtool

`devtool: 'cheap-module-eval-source-map')`

allows us to jump to the actual code, and not the bundled.js file.
useful for development phase.
source maps are used in webpack to instruct the devtools-inspector where to navigate to the source.




babel:
.babelrc file is used when running babel commands from ex: webpack.

useful class transform:

// yarn add babel-plugin-transform-class-properties@6.24.1

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//     }
// }

// const osyn = new OldSyntax();
// console.log(osyn.name);


// class NewSyntax {
//     name = 'Jen';     // don't have to var/let/const !! NB :)
// }

// const ns = new NewSyntax();
// console.log(ns);


Javascript

test for value
!!VAR

!!"test" == true.
!!undefined == false.

arrow functions have a THIS binding of the parent.

explicit return ( arrow functions )

```
const OptionModel = () => {
    return (
        <div>test</div>
    );
}
```

implicit returns ( arrow functions )

```
const OptionModel = () => (
    <div>test</div>
);
```


react components


<Component some="prop" /> ( props.some | this.props.some )
<Component><p>children props</p></Component> ( props.children | this.props.children )



CSS /SCSS

styles.scss - entrypoint
_file.scss partial file ( part of our styles )

css resets - allows diff browsers to start/show items in the same way
https://necolas.github.io/normalize.css/

