window.onload = function(){
    var sidebar = document.querySelector("#sidebar");

    window.onscroll = function(){
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        console.log(scrollTop);
        if(scrollTop>225){
            sidebar.style.top="0";
        }else{
            sidebar.style.top="230px";
        }
    }


}