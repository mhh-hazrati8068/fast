 class VisibilityToggle extends React.Component{
     constructor(props){
         super(props);
         this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
         this.state = {
            visibility:false
         };
     }
     handleToggleVisibility(){
         this.state((preState) =>{
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
                     {this.state.visibility ?  'show detailes' : 'hide detailes'}
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































// let visibility = true;

// const toggelVisibility =() =>{
//     visibility = !visibility;
//     render();
// };


//  const render = () =>{
//      const app =(
//         <div>
//              <h1>visibility toggle</h1>
//              <button onClick={toggelVisibility}>
//                 {visibility ?  'show detailes' : 'hide detailes'}
//              </button>
//             {!visibility && (
//                 <div>
//                     <p>hey yoo! there is some detailes u need bitch.</p>
//                 </div>
//             )}
//          </div>
//     );
//      ReactDOM.render(app, document.getElementById('app'));
// };

// render();












