
let cuadro1 = document.getElementById("key")
let cuadro2 = document.getElementById("key2")

document.addEventListener('keydown', function (event){
   if  (event.key === 'a'){
    cuadro1.style.backgroundColor = "pink"
   }
   else if (event.key === 's') {
    cuadro1.style.backgroundColor = "orange"
   }
   else if (event.key === 'd') {
    cuadro1.style.backgroundColor = "lightblue"
   }
   
}
)

document.addEventListener('keydown', function (event){
    if  (event.key === 'q'){
     cuadro2.style.backgroundColor = "purple"
    }
    else if (event.key === 'w') {
     cuadro2.style.backgroundColor = "gray"
    }
    else if (event.key === 'e') {
     cuadro2.style.backgroundColor = "brown"
    }
    
 }
 )