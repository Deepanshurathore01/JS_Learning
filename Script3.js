// array 
// let arr =[10,20,30,40,50];
// for(let a in arr)
// {
//   console.log(a);
// }
// for(let b of arr)
// {
//   console.log(b);
// }

// >> Multidimensional array 
// let arr = [
//   ["john",30],
//   ["thomas",22],
//   ["Robert",12]
// ]
// //  console.log(arr[0][1]);
// for(let i=0;i<arr.length;i++)
// {
//   for(let j=0;j<arr.length;j++)
//   {
//     console.log(arr[i][j]);
//   }
// }

// for each loop 
// arr.forEach(data =>{
//   data.forEach(val =>{
//     console.log(val);
//   })
// });
// // for of
// for(let ar of arr)
// {
//   for(let i of ar)
//   {
//     console.log(i);
//   }
// }

//  copy and spread 
// let arr1 =["john",202,true];
// // let arr2 =[...arr1];
// // let arr2 =arr1;
// let arr2 =arr1.slice(0).concat("items");
// // arr1.push("Berg");
// // arr2.push("Berg");
// arr2.push("pizzas");

// console.log(arr1);
// console.log(arr2); 

// Arraydestructing 
// let arr1 =["Thomas","chad","amain","main"];
// // let itme1 =arr1[0];
// // let itme2 =arr1[1];
// let [itme1,itme2,...itme3] =arr1;
// console.log(itme1);
// console.log(itme2);
// console.log(itme3);

//objects
// let obj ={
//   name:"Deepanshu",
//   age:21,
//   degree:"MCA",
//   fun : function()
//   {
//     console.log("Hello this is my function")
//   }
// }

// // console.log(obj.fun());
// obj.key="item";
// // console.log(obj);
// let a="Key2";
// obj[a] ="jitem2";

// for(let a in obj)
// console.log(obj[a])

// for(let i of Object.values(obj))
// console.log(i);
// objects inside the array 

// let b = [
//   {user:1,name:"tata"},
//   {user:2,name:"bata"},
//   {user:3,name:"zata"}
// ]

// let [...c] =b;
// let [c,d,e] =b;
// console.log(c);
// console.log(d);
// console.log(e);

// let [{name},{name:name1}] =b;
// console.log(name);
// console.log(name1);

// // console.log(b)
// for(let i of b)
// console.log(i);

// functions inside function & lexical scope 
// var a=90;
// function fun()
// {
//   // var a=1;
//   console.log("this is function 1 "+a);
//   function fun2()
//   {
//     var a=3;
//     console.log("This is func2 "+a);
//   }
//   fun2();
// }
// fun();

// debuger 
// function fun()
// {
//   debugger;
//   for(let i=1;i<=5;i++)
//   {
//     console.log(i);
//   }
// }
// fun();

// sets 
// const r=[10,20,30,40,50,10];
// console.log(r);

// const s =new Set([10,20,30,40,50,10]);
// // s.add("Hello")
// // s.add(60);

// console.log(s);
// let len=0;
// for(let em of s)
// len++;

// console.log(len);

// Map
// var map1 =new Map([[1,"one"],
// ["fname","Deepanshu"],
// ["whole no",[0,1,2,3,4,5]]]);
// // console.log(map1.get("fname"));

// var map2 =new Map([[]]);
// map2.set("fname","deepanshu");
// console.log(map2);

// var k =map1.keys();
// for(var key of k)
// console.log(key);

// this 
// var obj ={
//   fname:"Deepanshu",
//   age:8,
//   fun:function()
//   {
//     console.log("This is my func");
//   }
// }
// console.log(obj);
// window.fun();


// new Keyword 
// function fun()
// {
//   let Fname ="Deepanshu";
//   return this.fname;
// }
// let a =new fun();
// console.log(new fun);
// this.Fname =Fname;
// var obj =new fun();
// console.log(this.Fname);

// function User(name){
//   this.name =name;
// }
// console.log(new User("Deepanshu"));
// console.log(new User("Deepika"));
// console.log(new User("Neelam"));
// console.log(new User ("Madhuri"));

// let person = new User("Jack");
// console.log(person.name);

// function User(name){
//   if(!new.target){
//     return new User(name);
//   }
//   this.name =name;
// }
// console.log(User("Deepika"));
// symbol is represent the unique character 

// let sym =Symbol("id");
// // console.log(sym.toString());
// console.log(sym.description);

// let sym1 =Symbol("id");
// console.log(sym === sym1);

// let id =Symbol("id");
// let obj ={
//   name :"Jack",
//   [id]:34,
//   age:21
// }
// obj[id]=4
// console.log(obj[id]);
// console.log(obj);
// for(let key in obj)
// {
//   console.log(key);
// }

// recursion : when a function calls itself 
// for(let i=0;i<10;i++)
// console.log(i);

// function printNum(n)
// {
//   if(n<10)
//   {
//     return 1;
//   }
//   printNum(n+1);
// }

// printNum(1);

// function fact(n)
// {
//   if(n==0)
//   return 1;

//   return n*fact(n-1);
// }

// console.log(fact(5));

// Asyncronus js 

// console.log("this");
// setTimeout(()=>{
//   console.log("is");
// console.log("Syncronus");
//   console.log("js is the language of web");
// },4000);

// function fun(val){
//   console.log(val);
// }

// function add(a,b,callback){
//   let sum =a+b;
//   callback(sum);
// }

// add(5,10,fun);

function lodingData()
{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("1) The data is Loading...");
   resolve();
      },1000);
  })
 
}

function collectingData()
{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("2) The data collecting...");
      resolve();
    },1000);
  })
 
}
function approvingData()
{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("3) The data is approving...");
    reject("Not been succesf");
    },1000);
  })
  
}

function approved()
{
  

    console.log("4) The data is approved");
 
}
// // promise 
// // lodingData().then(collectingData).then(approvingData).then(approved).catch((err)=>{
// //   console.log(err);
// // })

// // async await 

// async function Ex()
// {
//   await lodingData();
//   await collectingData();
//   await approvingData();
//   await approved();
// }

// Ex().catch((err)=>{
//   console.log(err);
// });

//set interval 
// let num =0;
// var i = setInterval(fun,1000);
// function fun()
// {
// //  current time
// let date =new Date().toLocaleTimeString();
// console.log(date);
// }

// setTimeout(()=>{
//   clearInterval(i);
// },10000);

// call bind apply 
//  function fun(age,gender){
//   console.log(this.Fname,age,gender);
// }
// var obj1 ={
//   Fname: "Deepanshu",
 
// }

// var obj2 ={
//   Fname:"Aman"
// }
// fun.call(obj1,[21,"Rathore"]);
// fun.apply(obj2,[21,"male"]);
// var a =fun.bind(obj2,[21,"male"]);
// console.log(a);
// console.log(typeof a);




