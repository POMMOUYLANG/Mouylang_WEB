function myfunction1(p1,p2){
    return p1 * p2 ;
}
let total = myfunction1(4,3);
document.getElementById("demo1").innerHTML = "Value : " + total;

function myfunction2(a){
    return (10/4) * (a - 10);
}
var text = "My number is : "+myfunction2(30)+".....";
document.getElementById("demo2").innerHTML = text;