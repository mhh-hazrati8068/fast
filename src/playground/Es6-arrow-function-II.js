// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --preset="env,react"

//argument object- no longer bound with arrow function

const add= (a,b) => {
    return a+b ; 
};
console.log(add( 50,50));

//this keyword - no longer bound

const user = {
    name:"mmd",
    cities:['tehran', 'karaj','qom'],
    printPlacesLived() {
        const cityMassages = this.cities.map((city) =>{
            return city + '!';
        });
            return cityMassages;

        // this.cities.forEach((city) =>{
        //     console.log(this.name + ' has lived in '+ city);
        // });
    }
};

console.log(user.printPlacesLived());

// challenge

const multiplier = {
    Number : [10,20,30],
    multiplyBy: 3,
    multiply (){
      return this.Number.map((numbers) => numbers * this.multiplyBy);
    }
};

console.log(multiplier.multiply());