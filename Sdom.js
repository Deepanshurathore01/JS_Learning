// siblings 
// var a =document.querySelector('.hero');
// if(a.previousElementSibling == null)
// {
//   console.log("No previous sibling is presnt");
// }
// else{
//   console.log(a.previousElementSibling.previousElementSibling);

// }

// // Append child to add one more child using js 
// const ul =document.querySelector('ul');
// const newE =document.createElement('li');
// newE.textContent ="Button";
// ul.appendChild(newE);

// remove child 
// const ul =document.querySelector('ul');
// ul.remove();

// replace child
// const list =document.querySelector('ul');
// const ChildtoChange =list.children[1];
// const newli =document.createElement('li');
// newli.textContent ='giga chad ';
// list.replaceChild(newli,ChildtoChange);

// parent node 
// var parent  = document.querySelector('html');
// var p =parent.parentElement;
// console.log(p);
// console.log("-      -- --- --- --  - -")
// var parent  = document.querySelector('html');
// var q =parent.parentNode;
// console.log(q);


// previous sibling
// var a =document.querySelector('.hero');
// console.log(a.previousElementSibling);
// var b =document.querySelector('.hero');
// console.log(b.previousSibling);

// next sibling

// var a =document.querySelector('.hero');
// console.log(a.nextElementSibling);
// var b =document.querySelector('.hero');
// console.log(b.nextSibling);

// first and last child 

// var a =document.querySelector('ul');
// console.log(a.firstChild);
// var b =document.querySelector('ul');
// console.log(b.firstElementChild);


// var a =document.querySelector('ul');
// console.log(a.lastChild);
// var b =document.querySelector('ul');
// console.log(b.lastElementChild);

// Inner text or text content 
// var a =document.querySelector('h1').textContent;
// console.log(a);
// var a =document.querySelector('h1').outerHTML;
// console.log(a);

// inster adjcent element 
// var a =document.querySelector('.hero');
// a.style.backgroundColor="yellow";
// a.style.border="2px solid black";

// var newE ='<b>Drop X Out</b>';
// // a.insertAdjacentHTML("beforebegin",newE);
// // a.insertAdjacentHTML("beforeend",newE);
// // a.insertAdjacentHTML("afterend",newE);
// a.insertAdjacentHTML("afterbegin",newE);

// innerhtml 
// let a =document.querySelector('.hero');
// a.innerHTML ='<b>GiGa </b>';
// console.log(a);

// // outerhtml 
// let b =document.querySelector('.hero');
// b.outerHTML +='<li><b>Radhe Radhe</b></li>'
// console.log(b);

// styling using js 
// document.body.style.backgroundColor="pink";
// var a =document.querySelector('h1');
// a.style.color="orange";
// a.style.backgroundColor="blue";
// a.style.border="4px solid grey";

// get or set attributes 
// let hero =document.querySelector('#hero');
// // console.log(hero.getAttribute('about'));

// hero.setAttribute("example",123);
// // console.log(hero.outerHTML)

// for(let att of hero.attributes)
//   {
//     console.log(`${att.name} = ${att.value}`);
  // }

// Onclick
// function changeColor()
// {
//   var a=document.getElementById('main');
//   a.style.backgroundColor="red";
// }

// function onMouseOver(div)
// {
//   // var b =document.getElementById('main');
//   div.style.backgroundColor="blue";
// }
// function onMouseOut(div)
// {
//   // var b =document.getElementById('main');
//   div.style.backgroundColor="yellow";
// }

// alert("Hello");
// prompt("Hello how are u ?","Fine");
// confirm("Are u 18+");

let a =document.querySelector('div');
console.log(a.getBoundingClientRect());



