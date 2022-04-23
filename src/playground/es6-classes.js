
class Person {
    constructor(name = 'Anonymous', age='0'){
        this.name=name;
        this.age=age;
    }
    getGretting(){
    return `Hi. I am ${this.name} !`;
    }
    getDescrition(){
        return this.name +' is '+ this.age + ' year(s) old.';
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major=major;
    }
    hasMajor (){
        return !!this.major;
    }
    getDescrition(){
        let Description = super.getDescrition();

        if (this.hasMajor()){
            Description += `their major is ${this.major}.`;
        }
        return Description
    
    }
}

class Traveler extends Person {
    constructor(name, age, major,homeLocation){
        super(name, age, major);
        this.homeLocation= homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGretting(){
        let gretting = super.getGretting();

        if (this.hasHomeLocation()){
            gretting +=`their home location is ${this.homeLocation}.`;
        }
        return gretting


    }
}

const me = new Traveler('mmd' , 20, 'computer science', 'tehran');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());







