
// OLD app structure all in 1 file

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    // when rendered onto the DOM
    componentDidMount() {
        //console.log('componentDidMount');
        // fetch data
        const json_options = localStorage.getItem('options');
        try {
            const options = JSON.parse(json_options);
            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch (e) {
            // Do nothing, use default in constructor
        }
    }
    // after prop / state changes - this triggers
    // args: (prevProps, prevState) - previous props & previous state
    // conditional check below, as componentDidUpdate get's called even if state doesn't change.
    componentDidUpdate(prevProps, prevState) {
        // we have access to this.state ( new state ), this.props ( new props )
        // console.log('component did update', prevState);
        // save data
        if(prevState.options.length  !== this.state.options.length){
            console.log('state did change');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    // fires when component goes away
    componentWillUnmount() {
        console.log('component did unMount');
    }
    handleDeleteOptions() {
        this.setState(() => ({options: []}));
        // same as above, just longer
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
    }
    handleDeleteOption(option) {
        //console.log('delete option...', option);
        this.setState((prevState) => (
            {options: prevState.options.filter((o) => o != option )}
        ));
    }
    handlePick(){
        const randomNum = Math.floor( Math.random() * this.state.options.length );
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption( option ){ // data being sent upstream from child class
        if(!option){
            return 'Enter valid value to add item';
        } else if ( this.state.options.indexOf(option) > -1 ) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
        // same as above, just longer
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     };
        // });
    }
    render(){
        const subTitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

// this is how you could setup default props
// IndecisionApp.defaultProps = {
//     options: []
// };

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            { props.subTitle && <h2>{props.subTitle}</h2> }
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

// class based component
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                 What should i do?
//                 </button>
//             </div>
//         );
//     }
// }

// stateless functional component
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
            What should i do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={
                (e) => {
                    props.handleDeleteOption(props.optionText);
                }
            }>Remove</button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }
    onFormSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value ;
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        // this.setState(() => {
        //     return { error };
        // });
        if(!error) {
            e.target.elements.option.value = '';
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit} >
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));