let count = 30

setCount = setInterval(counter, 1 * 1000);

function counter(){
    if(count >= 0){
        console.log(count--);
    }else{
        clearInterval(setCount);
    }
}



