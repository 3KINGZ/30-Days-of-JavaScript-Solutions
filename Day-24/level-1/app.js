const space = {
    mercury:{
        gravity:0.38,
        image:"mercury.png"
    },
    venus:{
        gravity:0.91,
        image:"venus.png"
    },
    earth:{
        gravity:1.0,
        image:"earth.png"
    },
    mars:{
        gravity:0.38,
        image:"mars.png"
    },
    jupiter:{
        gravity:2.34,
        image:"jupiter.png"
    },
    saturn:{
        gravity:0.93,
        image:"saturn.png"
    },
    uranus:{
        gravity:0.92,
        image:"uranus.png"
    },
    neptune:{
        gravity:1.12,
        image:"neptune.png"
    }
}

const input = document.querySelector("input");
const select = document.querySelector("select");
const button = document.querySelector("button")
const container = document.querySelector(".container");
let weight;

const containerUI = (img,text) => {
    let image = document.createElement("img");
    image.src = `images/${img}`;
    let p = document.createElement("p");
    p.textContent = text;
    p.className = "big"
    container    
    container.appendChild(image);
    container.appendChild(p);
    // container.className = "container-border"
}

button.addEventListener("click",function(){
    let imgSrc;
    container.innerHTML = "";
    imgSrc = space[select.value].image;
    weight = Number(input.value) * space[select.value].gravity;
    containerUI(imgSrc,weight);
    console.log(weight)
})