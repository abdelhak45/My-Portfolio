let ele1 = document.getElementById("ele1")
let proImg1 = document.getElementById("proImg1")


ele1.onmouseover= ()=>{
    proImg1.style.cssText= "padding: 74px;margin-top: -150px;margin-bottom: -42px;transition: .5s;"
}

ele1.onmouseleave= ()=>{
    proImg1.style.cssText= "padding: 20px;margin-top: none;margin-bottom: none;transition: .5s;"
}

// ==================================================================

let ele2 = document.getElementById("ele2")
let proImg2 = document.getElementById("proImg2")


ele2.onmouseover= ()=>{
    proImg2.style.cssText= "padding: 74px;margin-top: -150px;margin-bottom: -42px;transition: .5s;"
}

ele2.onmouseleave= ()=>{
    proImg2.style.cssText= "padding: 20px;margin-top: none;margin-bottom: none;transition: .5s;"
}

// ==================================================================


let ele3 = document.getElementById("ele3")
let proImg3 = document.getElementById("proImg3")


ele3.onmouseover= ()=>{
    proImg3.style.cssText= "padding: 74px;margin-top: -150px;margin-bottom: -42px;transition: .5s;"
}

ele3.onmouseleave= ()=>{
    proImg3.style.cssText= "padding: 20px;margin-top: none;margin-bottom: none;transition: .5s;"
}

// ==================================================================

let ele4 = document.getElementById("ele4")
let proImg4 = document.getElementById("proImg4")


ele4.onmouseover= ()=>{
    proImg4.style.cssText= "padding: 74px;margin-top: -150px;margin-bottom: -42px;transition: .5s;"
}

ele4.onmouseleave= ()=>{
    proImg4.style.cssText= "padding: 20px;margin-top: none;margin-bottom: none;transition: .5s;"
}

// ==================================================================

let ele5 = document.getElementById("ele5")
let proImg5 = document.getElementById("proImg5")


ele5.onmouseover= ()=>{
    proImg5.style.cssText= "padding: 74px;margin-top: -150px;margin-bottom: -42px;transition: .5s;"
}

ele5.onmouseleave= ()=>{
    proImg5.style.cssText= "padding: 20px;margin-top: none;margin-bottom: none;transition: .5s;"
}







// ====================================btn up

let up = document.getElementById('up')

window.onscroll = ()=>{

    if (window.scrollY >= 500) {
        up.style.display = "block"
    }else{
        up.style.display = "none"

    }
}

up.onclick = ()=>{
    window.scrollTo({
        top: 0,
        behavior :"smooth"
    })
}