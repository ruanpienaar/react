
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.ToggleState = this.ToggleState.bind(this);
        this.state = {
            isVisible: false
        }
    }

    ToggleState() {
        this.setState((prevState) => {
            return {
                isVisible: ! prevState.isVisible
            };
        });
        console.log(this.state.isVisible);
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.ToggleState}>Toggle</button>
                { this.state.isVisible && <p>Stuff is being shown</p> }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// old version- for reference

// const app = document.getElementById("app");

// let showDetails = false;

// const toggle = () => {
//     showDetails = !showDetails;
//     render();
// };

// const render = () => {
//     const template = <div>
//         <h1>Visibility Toggle</h1>
//         <button id="toggleBtn" onClick={toggle}>
//             { showDetails ? "Hide" : "Show"} Details
//         </button>
//         { showDetails && <p>Hey, there are some details you can now see!</p> }
//     </div>;
//     ReactDOM.render(template, app);
// }

// render();