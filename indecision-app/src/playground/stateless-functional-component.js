
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

ReactDOM.render(<User name="Name" age="123" />, document.getElementById('app'));