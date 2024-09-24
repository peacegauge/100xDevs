//calculate the it takes between setTimeOut call and the inner function actually running

const start = Date.now()
setTimeout(calculateTheTime, 5000, start)
function calculateTheTime(start){
    const end = Date.now();
    console.log("Timer finished....")
    const millis = end - start;
    return console.log(Math.floor(millis/1000));
}