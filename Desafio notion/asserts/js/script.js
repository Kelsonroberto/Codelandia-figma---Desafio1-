
const icon = document.querySelectorAll(".icon");

icon.forEach(elementos => {
    elementos.addEventListener("click", () => {                
        if(elementos.src.match ('./asserts/img/heart.svg')){
            elementos.src = "./asserts/img/red_heart.png";
        }
        else{
            elementos.src = "./asserts/img/heart.svg";
        }
    });
});

