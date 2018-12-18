// ID randomNumBox holds the random number 19-120 generated at start of game.
log = console.log
let randomNumBox = Math.floor(Math.random() * 120) + 19;
log(randomNumBox); //working
$("randomdisplay").html(randomNumBox);
document.getElementById('randomdisplay').innerHTML = randomNumBox;

// ID totalScoreBox holds the amount added everytime a player presses a crytsal.
var totalScoreBox = 0;
var wins = 0;
var lose = 0;

//Each crystal should have a random hidden value between 1 - 12.
// Create a function that is called everytime a crystal image is pressed. After the image is click a the 3 value of the crystal will be displayed above their respective crystal.
$(document).ready(function(){
    $(".images").on("click", function(){
        var crystalvalue = $(this).attr("value");
        crystalvalue = parseInt(crystalvalue);
        totalScoreBox += crystalvalue;
        document.getElementById('totalscoredisplay').innerHTML = totalScoreBox;
        if (totalScoreBox === randomNumBox) {
            alert('You Win!');
            wins++;
            $("#winID").html(wins);
        }
        else if (totalScoreBox >= randomNumBox) {
            alert('You Lost...');
            lose++;
            $("#loseID").html(lose);
        }
        log(totalScoreBox);
    });
});

$("#totalscoredisplay").html(totalScoreBox);

