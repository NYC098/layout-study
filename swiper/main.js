window.onload = function(){

    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');
    var distance = -676;
    var index = 1;
    var round = document.querySelectorAll('.button span');

    container.onmouseout = function(){

        timber = setInterval(next.onclick,1000);

    }
    container.onmouseover = function(){
        clearInterval(timber);
    }
    round.forEach(function(value,key){
        value.onclick = function() {

            if (index !== key + 1) {
                console.log(index-1);
                round[index - 1].className = '';
                value.className = 'on';
                animate(-676 * (key + 1 - index));
                index=key+1;
            }
        }
    });

    function animate(offset) {
        if(index===7){
            list.style.transform = "translateX(-676px)";
            distance=-676;
            index=1;

            return;
        }
        if(index===0){
            list.style.transform = "translateX("+(-676*6)+"px)";
            index = 6;
            distance=-676*6;
            return;
        }
        var newStyle = distance + offset ;
        list.style.transform = "translateX("+newStyle+"px)";
        distance=newStyle;


    }

    next.onclick = function(){
        round[index-1].className='';
        index++;
        animate(-676);
        round[index-1].className='on';
    }
    prev.onclick = function(){
        round[index-1].className='';
        index--;
        animate(+676);
        round[index-1].className='on';
    }

}