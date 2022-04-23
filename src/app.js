// import validator from "validator";
// console.log(validator.isEmail('m.hazrati8068.mh@gmaiil.com'));

import React from "react";
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indicisionApp';  
import 'normalize.css/normalize.css';
import './styles/styles.css';

// class OldSyntax {
//     constructor(){
//         this.name="mike";
//         this.getGreeting= this.getGreeting.bind(this);
//     }
//     getGreeting(){
//         return `hi im ${this.name} .`;
//     }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// // -----------------------------------------

// class NewSyntax{
//     name="Jen";
//     getGreeting= () =>{
//         return `hi im ${this.name} .`;
//     }
// }
// const newSyntax= new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting();
// console.log(newGetGreeting);

    
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
  