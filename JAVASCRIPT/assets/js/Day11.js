let x = 123;
document.getElementById("demo1").innerHTML =
x.toString() + "<br>"+ (123).toString() + "<br>" + (100+23).toString();

let x1 = 9.656;
document.getElementById("demo2").innerHTML =
  x1.toExponential() + "<br>" + 
  x1.toExponential(2) + "<br>" + 
  x1.toExponential(4) + "<br>" + 
  x1.toExponential(6);

  let x2 = 9.656;
  document.getElementById("demo3").innerHTML =
    x2.toFixed(0) + "<br>" +
    x2.toFixed(2) + "<br>" +
    x2.toFixed(4) + "<br>" +
    x2.toFixed(6);

    let x3 = 9.656;
    document.getElementById("demo4").innerHTML = 
      x3.toPrecision() + "<br>" +
      x3.toPrecision(2) + "<br>" +
      x3.toPrecision(4) + "<br>" +
      x3.toPrecision(6);  

    document.getElementById("demo5").innerHTML = 
    x.valueOf() + "<br>" +
    (123).valueOf() + "<br>" +
    (100 + 23).valueOf();

    document.getElementById("demo6").innerHTML = 
    Number(true) + "<br>" +
    Number(false) + "<br>" +
    Number("10") + "<br>" + 
    Number("  10") + "<br>" +
    Number("10  ") + "<br>" +
    Number(" 10  ") + "<br>" +
    Number("10.33") + "<br>" + 
    Number("10,33") + "<br>" +
    Number("10 33") + "<br>" +
    Number("John");

    let date = new Date("1970-01-02");
    document.getElementById("demo7").innerHTML = Number(date); 

    document.getElementById("demo8").innerHTML = 
    parseInt("-10") + "<br>" +
    parseInt("-10.33") + "<br>" +
    parseInt("10") + "<br>" +
    parseInt("10.33") + "<br>" +
    parseInt("10 6") + "<br>" +  
    parseInt("10 years") + "<br>" +  
    parseInt("years 10");  

    document.getElementById("demo9").innerHTML = 
    parseFloat("10") + "<br>" +
    parseFloat("10.33") + "<br>" +
    parseFloat("10 6") + "<br>" +  
    parseFloat("10 years") + "<br>" +
    parseFloat("years 10");    

    document.getElementById("demo10").innerHTML =
    Number.isInteger(10) + "<br>" + Number.isInteger(10.5);

    document.getElementById("demo11").innerHTML =
    Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567890);

    document.getElementById("demo12").innerHTML = 
    Number.parseFloat("10") + "<br>" +
    Number.parseFloat("10.33") + "<br>" +
    Number.parseFloat("10 20 30") + "<br>" +
    Number.parseFloat("10 years") + "<br>" +
    Number.parseFloat("years 10");

    document.getElementById("demo13").innerHTML = 
    Number.parseInt("-10") + "<br>" +
    Number.parseInt("-10.33") + "<br>" +
    Number.parseInt("10") + "<br>" +
    Number.parseInt("10.33") + "<br>" +
    Number.parseInt("10 6") + "<br>" +  
    Number.parseInt("10 years") + "<br>" +  
    Number.parseInt("years 10");  