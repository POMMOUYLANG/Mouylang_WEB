let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.getElementById("demo1").innerHTML = text.length;

var text1 = "apple, Banana, Kiwi";

var past = text1.slice(0, 5);

document.getElementById("demo2").innerHTML = past;

document.getElementById("demo3").innerHTML = text1.substring(7, 13);

document.getElementById("demo4").innerHTML = text1.substr(7, 3);

function myFunction() {
  let text = document.getElementById("demo5").innerHTML;
  document.getElementById("demo5").innerHTML = text.replace(
    "Microsoft",
    "W3Schools"
  );
}

let vartext = "I love cats. Cats are very easy to love. Cats are very popular.";
vartext = vartext.replaceAll("Cats", "Dogs");
vartext = vartext.replaceAll("cats", "dogs");

document.getElementById("demoall").innerHTML = vartext;

function myUpperCase() {
  let text = document.getElementById("demo6").innerHTML;
  document.getElementById("demo6").innerHTML = text.toUpperCase();
}

function myLowerCase() {
  let text = document.getElementById("demo6").innerHTML;
  document.getElementById("demo7").innerHTML = text.toLowerCase();
}

let t1 = "Hello";
let t2 = "World";
let t3 = t1.concat(" ", t2);
document.getElementById("demo8").innerHTML = t3;

var x1 = "        Hello World!           ";
var x2 = x1.trim();
document.getElementById("demo9").innerHTML =
  "Length t1 : " + x1.length + "<br> Length t2 : " + x2.length;

var x1 = "     Hello World!     ";
var x2 = x1.trimEnd();
document.getElementById("demo10").innerHTML =
  "Length t1 : " + x1.length + "<br> Length t2 : " + x2.length;

let num = 5;
document.getElementById("demostart").innerHTML =
  "Value : " + num.padStart(4, "0");



