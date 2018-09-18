var count = 60;


var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

$(document).ready(function() {

    $("#actualGameContainer").hide();
    $("#finishGameContainer").hide();

    window.scrollTo(0,500);

    $("#startButton").on("click", function() {
      
        $("#initializingGameContainer").hide();

        $("#actualGameContainer").show();

        startCountdown()
        return;
    });

    function countdown() {
        count--;

    $("#TimeClockNumber").html(count + "Seconds");
    
    $("#submissionButton").on("click", function() {
        count = 0;
        return;
    });

    if(count==-1) {
        timeUp();

        $("#actualGameContainer").hide();
    }
}

    function startCountdown() {

         setInterval(countdown, 1000);
    }

    function timeUp() {

        var Q1 = $('input:radio[name="question1"]:checked').val();
        var Q2 = $('input:radio[name="question2"]:checked').val();
        var Q3 = $('input:radio[name="question3"]:checked').val();
        var Q4 = $('input:radio[name="question4"]:checked').val();
        var Q5 = $('input:radio[name="question5"]:checked').val();


        if(Q1==undefined) {
            unansweredCount++;
        }
        else if(Q1== "q1a") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if(Q2==undefined) {
            unansweredCount++;
        }
        else if(Q2== "q2b") {
            correctCount++;
        }
        else {
            wrongCount++;
        }        

        if(Q3==undefined) {
            unansweredCount++;
        }
        else if(Q3== "q3d") {
            correctCount++;
        }
        else {
            wrongCount++;
        }
        
        if(Q4==undefined) {
            unansweredCount++;
        }
        else if(Q4== "q4d") {
            correctCount++;
        }
        else {
            wrongCount++;
        }
        
        if(Q5==undefined) {
            unansweredCount++;
        }
        else if(Q5== "q5b") {
            correctCount++;
        }
        else {
            wrongCount++;
        }
        
        $('#correctAnswers').html(correctCount);
        $('#wrongAnswers').html(wrongCount);
        $('#unanswered').html(unansweredCount);

        $("#finishGameContainer").show();

        window.scrollTo(0,550);

    }

});