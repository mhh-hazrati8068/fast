console.log('app.js is runing')

// jsx - javascript xml
const app ={
    tittle:"indicision-app",
    subtittle:"put ur life in the hands of god: ",
    Options:[]
};

const onFormSubmit =(e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option){
        app.Options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};
const onRemoveAll = () => {
    app.Options = [];
    render();
};

const onMakeDecision = () =>{
    const randonNum = Math.floor(Math.random() * app.Options.length);
    const option = app.Options[randonNum];
    alert(option);
};

var appRoot = document.getElementById('app');

const render = () =>{
    const template =(
        <div>
            <h1>{app.tittle}</h1>
            {app.subtittle && <p>{app.subtittle}</p>}
            <p>{app.Options.length >0 ? ' here is your options':'no options allowed'}</p>
            <button disabled={app.Options.length === 0} onClick={onMakeDecision}>what should i do?</button>
            <button onClick={onRemoveAll}>remove all</button>
            <ol>
                {
                    app.Options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>add Option</button>
            </form>
        </div>);

        ReactDOM.render(template,appRoot);
};

render();
