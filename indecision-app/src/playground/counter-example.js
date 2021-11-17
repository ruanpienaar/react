
class Counter extends React.Component {
    constructor(props) {
        //console.log('constructor');
        super(props);
        this.AddOne = this.AddOne.bind(this);
        this.MinusOne = this.MinusOne.bind(this);
        this.Reset = this.Reset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        //console.log('componentDidMount');
        const stringCount = localStorage.getItem('count');
        if(!isNaN(stringCount)){ // is not - not a number = a number ; hahaha
            const count = parseInt(stringCount, 10);
            // ({ count })  is the same as  ({ count: count  })
            this.setState(() => ({ count }));
        }
    }

    // when state changes!!!
    componentDidUpdate(prevProps, prevState) {
        // Only if the current state ( this.state.count ) has changed.
        if (prevState.count !== this.state.count) {
            console.log('update persisted count');
            localStorage.setItem('count', this.state.count);
        }
    }

    AddOne() {
        this.setState((prevState) => ({ count: prevState.count + 1 }) );
    }

    MinusOne() {
        this.setState((prevState) => ({ count: prevState.count - 1 }) );
    }

    Reset() {
        this.setState(() => ({ count: 0 }) );
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.AddOne}>+1</button>
                <button onClick={this.MinusOne}>-1</button>
                <button onClick={this.Reset}>reset</button>
            </div>
        );
    }
}

// this is how you could setup default props
// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));






// leave for reference, see how things are done behind the scenes.
// and how cumbersome manual re-rendering can be.

// let count = 0 ;

// const addOne = () => {
//     count++;
//     //console.log('addOne', count);
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     //console.log('minus one');
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     //console.log('reset');
//     renderCounterApp();
// }

// // console.log(templateTwo);

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     // uses the virtual-DOM algorithm to calculate the minimal changes
//     // needed to make to html-DOM when re-rendering
//     // freeing up developer time by not having to selectively re-render sub-items....
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();