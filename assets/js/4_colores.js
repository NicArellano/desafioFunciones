
let azul = document.getElementById("blue");
let rojo = document.getElementById("red");
let verde = document.getElementById("green");
let amarillo = document.getElementById("yellow");

const cambiarColor1 = () => {
    azul.style.backgroundColor = "black"
    
}
azul.addEventListener("click", cambiarColor1)


const cambiarColor2 = () => {
    rojo.style.backgroundColor =  "black"
}
rojo.addEventListener("click", cambiarColor2)


const cambiarColor3 = () => {
    verde.style.backgroundColor =  "black"
}
verde.addEventListener("click", cambiarColor3)


const cambiarColor4 = () => {
    amarillo.style.backgroundColor =  "black"
}
amarillo.addEventListener("click", cambiarColor4)