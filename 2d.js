
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(50, 40);
ctx.lineTo(70, 40);
ctx.lineTo(100, 70);
ctx.lineTo(100, 10);
ctx.lineTo(130, 100);
ctx.lineTo(130,70);
ctx.moveTo(130,70);
ctx.lineTo(170,70);
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.stroke();

const d = document.getElementById("myCanvas");
const ctd = d.getContext("2d");
ctd.beginPath();
ctd.moveTo(50, 160);
ctd.lineTo(100, 160);
ctd.lineTo(120, 190);
ctd.lineTo(150, 130);
ctd.lineTo(170, 220);
ctd.lineTo(190, 190);
ctd.moveTo(210, 190);
ctd.lineTo(230, 190);
ctd.strokeStyle = "red";
ctd.stroke();

const e = document.getElementById("myCanvas");
const cte = e.getContext("2d");
cte.beginPath();
cte.moveTo(50, 260);
cte.lineTo(120, 260);
cte.lineTo(150, 290);
cte.lineTo(170, 270);
cte.lineTo(190, 320);
cte.lineTo(210, 290);
cte.moveTo(230, 290);
cte.lineTo(250, 290);
cte.strokeStyle = "violet";
cte.stroke();



const numLines = 5;
const intervalo = c.height / (numLines + 1);

let cont = 0;

for (let i = 1; i <= numLines; i++) {
    let y = i * intervalo;
    ctx.beginPath();
    ctx.moveTo(120, y);
    ctx.lineTo(700, y);
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;

    ctx.stroke();

    // Etiquetas
    cont+=100;
    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.fillText("Porcentaje " + cont, 10, y + 5);
}