const randomColor = function(){

    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let colid;

const startchange = function(){
   
    const changeCOLOR =function(){document.body.style.backgroundColor =randomColor()}
    colid = setInterval(changeCOLOR,500)

}
const stopchange = function(){
    clearInterval(colid)

}

console.log(randomColor())
document.querySelector("#Start").addEventListener("click",startchange)
document.querySelector("#Stop").addEventListener("click", stopchange)