// My solution to building an agency:
// Come up with with a parent class
// Extend that parent class into two children (FE and BE engineer)
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Contractor {
    constructor(experience,level,name,role){
    this.experience = experience
    this.level = level
    this._name = name
    this._role = role
    }
    get name(){
        return this._name;
    }
    get role(){
        return this._role;
    }
    codeReview(){
        console.log('Looks good to me');
    }
    sayHello(){
        console.log(`Hello, my name is ${this._name} and I'm on the ${this._role} team!`);
    }
    sayBye(){
        console.log('Have a good night!');
    }
};

class FrontEndEngineer extends Contractor{
    constructor(experience,level,techstack,name,role){
        super(experience,level,name,role)
        this._techstack = techstack;
    }
    get techstack(){
        return this._techstack;
    }
    sayHello(){
        console.log(`Hello, I am ${this._name} and I love JavaScript!`)
    }
    codeReview(){
        super.codeReview();
        console.log('Buttt, your UI could use a little work.. maybe take a look at some tailwind?');
    }
}

class BackEndEngineer extends Contractor{
    constructor(experience,level,techstack,name,role){
        super(experience,level,name,role);
        this._techstack = techstack;
    }
    get techstack(){
        return this._techstack;
    }
    sayHello(){
        console.log(`Hello, I am ${this._name} and I love SQL and RDBMS! ^_^`)
    }
    codeReview(){
        super.codeReview();
        console.log('However, I think your Database management could use some work. Try normalizing your data.');
    }
};

let machi = new FrontEndEngineer('3 years','Junior','html,css,js','Machi','Front-End');
let solomon = new BackEndEngineer('10 years','Principal','SQL, Node.js, Python, RDBMS, Java, Rust','Solomon','Back-End');
let bert = new FrontEndEngineer('7 years','Senior','HTML, CSS, Tailwind, JS, PHP','Bert','Front-End');

let agencyList = [machi, solomon, bert];

for(person of agencyList){
    person.sayHello();
};

// Leon's solution:
// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }

