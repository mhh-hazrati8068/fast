class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd= this.handleAdd.bind(this);
        this.handleMinus= this.handleMinus.bind(this);
        this.handleReset= this.handleReset.bind(this);
        this.state= {
            count:0
        };
    }
    handleAdd(){
        this.setState((prevState) =>{
            return{
                count:prevState.count +1 
            };
        });
    }
    handleMinus(){
        this.setState((prevState) =>{
            return{
                count:prevState.count -1
            };
        });
    }

    handleReset(){
        this.setState((prevState) =>{
            return{
                count:0
            };
        });
    }
    render() {
        return(
            <div>
             <h1>Count: {this.state.count}</h1>
             <button onClick={this.handleAdd}>+1</button>
             <button onClick={this.handleMinus}>-1</button>
             <button onClick={this.handleReset}>reset</button>
             </div>
        );
    }
}



ReactDOM.render(<Counter />, document.getElementById('app'));
// let count = 0;
// const addOne = () =>{
//     count++;
//     renderCounterApp();
// };
// const minusOne= () => {
//     count--;
//     renderCounterApp();
// };
// const reset= () => {
//     count=0
//     renderCounterApp();
// };

// var appRoot = document.getElementById('app');

// const renderCounterApp = () =>{
//     const templateTwo =(
//         <div>
//             <h1> count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
    
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };
// renderCounterApp();
