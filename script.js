let detailBtn = document.querySelectorAll(".details-btn");
let popUp = document.querySelector(".pop-up-box");
let close = document.querySelector(".cross-btn");

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

for (let element of detailBtn) {
    element.addEventListener('click', () => {
        popUp.style.display = "flex";
    })
}

close.addEventListener('click', () => {
    popUp.style.display = "none";
})
