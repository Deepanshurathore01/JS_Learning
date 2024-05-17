document.getElementById('demo').innerHTML ="Hello world";
var a =document.getElementsByTagName('h2');
document.write(a);
const element = document.getElementsByTagName("p");

document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;