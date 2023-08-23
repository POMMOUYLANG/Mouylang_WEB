let text = "Please locate where 'locate' occurs! where";
let index = text.indexOf("locate");
document.getElementById("demo1").innerHTML ="The position of the first occurrence of  is: " +index; 

let index1 = text.lastIndexOf("locate");
document.getElementById("demo2").innerHTML = "The position of the last occurrence of is: "+ index1;

let index2 = text.search("locate");
document.getElementById("demo3").innerHTML = "The position of the last occurrence of is: "+ index2;

let index3 = text.match("curs!");
document.getElementById("demo4").innerHTML = index3.length + " "+ index3;

let index4 = text.matchAll("where");
document.getElementById("demo5").innerHTML = Array.from(index4);

let index5 = text.includes("where");
document.getElementById("demo6").innerHTML = index5;

let index6 = text.startsWith("Please");
document.getElementById("demo7").innerHTML = index6;

let index7 = text.endsWith("where");
document.getElementById("demo8").innerHTML = index7;