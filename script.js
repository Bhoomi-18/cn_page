let detailBtn1 = document.querySelectorAll(".btn1");
let popUp1 = document.querySelector(".pop-up1");
let close = document.querySelector(".cross-btn");
let detailBtn2 = document.querySelectorAll(".btn2");
let popUp2 = document.querySelector(".pop-up2");

window.onscroll = function(){
    scroll();
};

function scroll() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.querySelector(".index").style.top= "0";
    }else{
        document.querySelector(".index").style.top= "-10vh";
    }
}

for (let element of detailBtn1) {
    element.addEventListener('click', () => {
        popUp1.style.display = "flex";
    })
}

close.addEventListener('click', () => {
    popUp1.style.display = "none";
})

for (let element of detailBtn2) {
    element.addEventListener('click', () => {
        popUp2.style.display = "flex";
    })
}

close.addEventListener('click', () => {
    popUp2.style.display = "none";
})
