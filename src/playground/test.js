class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
           visibility:false
        };
    }
    handleToggleVisibility(){
        this.setState((preState) =>{
           return{
               visibility: !preState.visibility
           };
        });
    }
    render(){
        return(
           <div>
               <h1>visibility toggle</h1>
               <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ?  'hide detailes' : 'show detailes'}
                </button>
               {this.state.visibility && (
                   <div>
                       <p>hey yoo! there is some detailes u need bitch.</p>
                   </div>
               )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

