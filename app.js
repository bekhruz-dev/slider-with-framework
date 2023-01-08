const slider  =document.querySelector(".slider"),
    container = document.querySelector(".container"),
    line1 = document.querySelector("#line1"),
    line2 = document.querySelector("#line2"),
    line3 = document.querySelector("#line3"),
    line4 = document.querySelector("#line4"),
    active = document.querySelector("#active");


line1.addEventListener("click", () => {
    slider.style.transform = "translateX(0)"
    active.style.top = "0"
    console.log("line1")
    container.style.background = "#fdcb6e"
})

line2.addEventListener("click", () => {
    slider.style.transform = "translateX(-25%)"
    active.style.top = "80px"
    console.log("line2")
    container.style.background = "#0984e3"
})

line3.addEventListener("click", () => {
    slider.style.transform = "translateX(-50%)"
    active.style.top = "160px"
    console.log("line3")
    container.style.background = "#00b894"
})
line4.addEventListener("click", () => {
    slider.style.transform = "translateX(-75%)"
    active.style.top = "240px"
    console.log("line4")
    container.style.background = "#d63031"
})