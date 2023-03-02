let btn = document.getElementById("togglebtn")
let bulb = document.getElementById("bulb")
btn.addEventListener("click", toggleBulb)
function toggleBulb (e){
    if(btn.textContent.includes("On")){
        bulb.src = "Asset/light-bulb-on.jpg"
        btn.textContent = "Turn Off"
    }
    else{
        bulb.src = "Asset/light-bulb-off.jpg"
        btn.textContent = "Turn On"
    }
    if(btn.textContent=="Turn Off"){
        btn.classList.toggle("btn-danger")
    }
    else if (btn.textContent=="Turn On"){
        btn.classList.toggle("btn-danger")
    }
}