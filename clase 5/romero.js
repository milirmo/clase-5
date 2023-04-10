let max;
let min;
let num;
num=parseInt(prompt("ingrese un numero"));
max=num;
min=num;
for (i=0; i<=8; i++) {
    num=parseInt(prompt("ingrese un numero"));
    if (num<min) {
        min=num;
    }
    else {
        if (num>max) {
            max=num;
        }
    }
}
document.write("el menor numero es: "+min+"<br>");
document.write("el mayor numero es: "+max); 