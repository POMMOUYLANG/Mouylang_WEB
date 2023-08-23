let myNumber = 32;
document.getElementById("demo1").innerHTML =
"Decimal 32 :  " + "<br><br>" + 

"Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
"Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
"Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
"Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
"Decimal (base 10): " + myNumber.toString(10) + "<br>" +
"Octal (base 8): " + myNumber.toString(8) + "<br>" +
"Binary (base 2): " + myNumber.toString(2);

let x = 123;
let y = new Number(123);
document.getElementById("demo2").innerHTML = typeof x + "<br>" + typeof y;

let a = 123456789012345678901234567890n;
let b = BigInt("123456789012345678901234567890");
document.getElementById("demo3").innerHTML = a + "<br>" + b;
document.getElementById("demo4").innerHTML = typeof b;

let  max = Number.MAX_SAFE_INTEGER;
document.getElementById("demo5").innerHTML = max;

let  min = Number.MIN_SAFE_INTEGER;
document.getElementById("demo6").innerHTML = min;

document.getElementById("demo7").innerHTML =
Number.isInteger(10) + "<br>" + Number.isInteger(10.5);

document.getElementById("demo8").innerHTML =
Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567890);

