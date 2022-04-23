var nameVar="mmd";
nameVar="hossain";
console.log('nameVar',nameVar);

let nameLet ="mmad";
nameLet="hossain";
console.log('nameLet',nameLet);

const nameConst = "reza";
console.log('nameConst',nameConst);

// block scoping 
var fullName='mmd hossain hazrati';

if (fullName){
    const firstName = fullName.split(' ')[1];
    console.log(firstName);
}
//console.log(firstName); // with let and const we will get errors as undifined but with var it is totally okay
