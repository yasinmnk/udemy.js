// console.log("first message");

// window.setTimeout(function () {
//     console.log("second message");

// }, 4000);




var count=25;
var timeInterval= window.setInterval(function(){

    console.log(count)
    count++;


    if (count <15){
        window.clearInterval(timeInterval);
    }
},500)