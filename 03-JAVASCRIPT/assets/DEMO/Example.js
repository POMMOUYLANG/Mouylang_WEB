console.log("Hello Word!");
// alert('Who are you comre from');
const canvas = document.querySelector("#my-canvas");

// if(canvas.getContext){

//     let ctx = canvas.getContext("2d");

//     ctx.fillStyle = "#F0DB4F";
//     ctx.strokeStyle = "red";

//     ctx.fillRect(50, 50, 150, 100);       
//     ctx.strokeRect(50, 50, 150, 100);

//     ctx.fillRect(250, 50, 150, 100);       
//     ctx.strokeRect(250, 50, 150, 100);

//     ctx.fillRect(450, 50, 150, 100);       
//     ctx.strokeRect(450, 50, 150, 100);
// }

function drawRectangular(ctx, x, y){
    ctx.fillRect(x, y, 150, 100);       
    ctx.strokeRect(x, y, 150, 100);
}
if(canvas.getContext){

    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "#F0DB4F";
    ctx.strokeStyle = "red";
                    //(x, y, w, h);
    let x = 50;
    let y = 50;
    for(let i = 0 ; i<3; i++){
        console.log(i);
        drawRectangular(ctx, x, y)
        x = x + 200;  
    }
}
console.log(canvas);