var sec = 00;
var hunds = 00;
var interval;

$("#startBtn").on("click", function(){
    interval = setInterval(timer,10);
});

$("#stopBtn").on("click", function(){
    clearInterval(interval);
});

$("#resetBtn").on("click", function(){
    clearInterval(interval);
    $("#hunds").text("00");
    $("#sec").text("00");
    sec = 00;
    hunds = 00;
});

//increment hundredths and seconds
function timer() {
    hunds++;
    if(hunds===99){
        hunds = 00;
        sec++;
        if(sec === 60){
            sec = 00;
        }
        if(sec<10){
            $("#sec").text("0"+sec);
        }else{
            $("#sec").text(sec);
        }
    }

    if(hunds<10){
        $("#hunds").text("0"+hunds);
    }else{
        $("#hunds").text(hunds);
    }
}