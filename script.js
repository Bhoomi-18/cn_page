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