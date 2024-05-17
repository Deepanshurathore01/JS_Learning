// property flag or description 
// let emp ={};
// emp.name="john";
// console.log(Object.getOwnPropertyDescriptor(emp,"name"));

// Object.defineProperty(emp,"age", {
//   writable :true,
//   configurable :true,
//   enumerable:true,
//   value :21
// })
// // emp.age=23;
// // delete emp.age;
// for(let k in emp)
// console.log(k);

// Object.defineProperty(emp,"Degree", {
//   writable :true,
//   configurable :true,
//   enumerable:true,
//   value :"MCA"
// })
// console.log(emp)

// proto & prototype 

// let obj ={
//   fname :"Deepanshu"
// }
// let obj2 ={
//   lname :"Rathore"
// }

// // obj2.__proto__ =obj;
// // console.log(obj2.fname);

// obj2 =Object.create(obj)
// obj2.lname="smith";
// // console.log(obj2.lname);
// console.log(obj2);

// prototype 

// var obj ={
//   greet(){
//     console.log(`hello ${this.name}`);
//   }
// }
// function Person(name ,age){
//   let person =Object.create(Person.prototype);
//   person.name=name;
//   person.age=age;
//   return person;
// }

// let user =Person("john",4);
// // user.greet();
// console.log(user);

// using new keyword 

// function Person(name,age)
// {
//   this.name=name;
//   this.age=age;
// }

// Person.prototype.greet =function()
// {
//   console.log(`Hello ${this.name}`);
// }

// let user =new Person("Deepanshu",34);
// user.greet();
// console.log(user);

// class 
// class Person{
//   constructor(name,age){
//     this.name =name;
//     this.age=age;
//   }
//   greet(){
//     console.log(`Hello ${this.name}`);
//   }
// }
// let user = new Person("naya",5);
// user.greet();
// console.log(user);

// class User{
//   constructor(name){
//   this.name=name;
//   }

//   Hi(){
//     console.log(`Hello `+this.name);
//   }
// }

// let user2 =new User("Deepanshu");
// console.log(user2.name);
// user2.Hi();
// console.log(User.prototype.Hi);

// Inheritnce 

// super points the parent class

// class Animal{
//   constructor(name){
//     this.name =name;
//   }

//   speak()
//   {
//     console.log(`${this.name} sings mew mew `)
//   }

//   sing()
//   {
//     console.log(`${this.name} make a noice `)
//   }

// }

// class cat extends Animal{
  
//     constructor(name){
//       super(name)
//     }
  
// }
// let d =new cat("ruski");
// d.sing();
// d.speak();

// class Game {
//   static score =0;
//   constructor()
//   {
//     this.isPlaying =false;
//   }

//   start(){
//     this.isPlaying=true;
//     console.log("Game has started ");
//   }
//   end()
//   {
//     this.isPlaying=false;
//     console.log("Game has ended  "); 
//     Game.updateScore();
//   }
//   static updateScore(){
//     Game.score++;
//     console.log(`score : ${Game.score}`);
//   }
// }

// const game =new Game();
// game.start();
// game.end();
// game.end();

// public and private :- methods or variable
// unable to access outside the class 
// # is used to declare prrivate members 

// class Bankaccount{
//   #balance =0;

//   deposite(amount){
//     this.#balance +=amount;
//     console.log(`Deposite ${amount} , new balance is ${this.#balance}`);
//   }

//   withdraw(amount)
//   {
//     if(amount > this.#balance){
//       console.log(`insuffient funds`);
//     }
//     else{
//       this.#balance -=amount;
//       console.log(`withdraw ${this.#balance},new balance is ${this.#balance}`);
//     }
//   }

//   balance(){
//     console.log(this.#balance);
//   }
// }

// const account =new Bankaccount();
// account.balance();
// account.deposite(400);
// account.withdraw(500);

// try catch throw
// function main(a,b){
//   try{
//     if(b==0){
//       throw new Error("Can't divide by 0");
//     }
//     else{
//       return a+b;
//     }
//   }
//   catch(err){
//     console.log(err.message);
//   }
// }

// console.log(main(2,6));

// fetch API

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response =>{
//   if(!response.ok){
//     throw new Error('Network is not reponding')
//   }

//   return response.json();
// })
// .then(data=> data.forEach(element => {
//   console.log(element.title)
// })

// )
// .catch(error=>
// console.log(error));

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));




