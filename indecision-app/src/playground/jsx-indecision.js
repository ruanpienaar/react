console.log("App.js is running!");

const app = {
    title : 'Indecision app',
    subtitle : 'put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value ;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = (e) => {
    // floor, since the DOM index is 0 based
    const randomNum = Math.floor( Math.random() * app.options.length );
    //console.log(randomNum);
    const option = app.options[randomNum];
    alert(option);
}

const render = () => {

    let size = app.options.length;

    const template = (
        <div>
            <h1>{app.title}</h1>
            { app.subtitle && <p>{app.subtitle}</p> }
            <p>{ app.options.length > 0 ? 'Here are your options' : 'No Options' }</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should i do?</button>
            <button onClick={onRemoveAll}>Remove all</button>
            <ol>
                {
                    app.options.map((o) => {
                        size--;
                        return <li key={size}>Option: {o}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit} >
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);

}

render();