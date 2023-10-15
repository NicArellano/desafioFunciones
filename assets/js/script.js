
const ele = document.getElementById ("ele1")

const pintar = (color = "green") => {
ele.style.backgroundColor = color
}

ele.addEventListener("click", function() {
    pintar("yellow")

}
)


