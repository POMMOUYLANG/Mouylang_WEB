const cars1 = ["Saab", "Volvo", "BMW"];
document.getElementById("demo1").innerHTML = cars1;

const cars2 = [];
cars2[0]= "Saab";
cars2[1]= "Volvo";
cars2[2]= "BMW";
document.getElementById("demo2").innerHTML = cars2;

const cars3 = new Array("Saab", "Volvo", "BMW");
document.getElementById("demo3").innerHTML = cars3;

document.getElementById("demo4").innerHTML = cars1[0];

const cars4 = ["Saab", "Volvo", "BMW"];
cars4[0] = "Open" ;
document.getElementById("demo5").innerHTML = cars4;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo6").innerHTML = fruits.toString();

const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo7").innerHTML = cars;

const person = ["John", "Doe", 46];
document.getElementById("demo8").innerHTML = person[0];

const person1 = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("demo9").innerHTML = person1.firstName;

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits1.length;
document.getElementById("demo10").innerHTML = size;

document.getElementById("demo11").innerHTML = fruits[0];

document.getElementById("demo12").innerHTML = fruits[fruits.length-1];

let fLen = fruits.length;
let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo13").innerHTML = text;

let text1 = "<ul>";
fruits.forEach(myFunction);
text1 += "</ul>";

document.getElementById("demo14").innerHTML = text1;

function myFunction(value) {
  text1 += "<li>" + value + "</li>";
} 

const f1 = ["Banana", "Orange", "Apple"];
document.getElementById("demo15").innerHTML = f1;

function myFunction1() {
  f1.push("Lemon");
  document.getElementById("demo15").innerHTML = f1;
}

const f2 = ["Banana", "Orange", "Apple"];
document.getElementById("demo16").innerHTML = f2;

function myFunction2() {
  f2[f2.length] = "Lemon";
  document.getElementById("demo16").innerHTML = f2;
}