

var buttonColours=["red","blue","green","yellow"];

var userClickedPattern=[];


var gamePattern=[];

var started=false;
var level=0;

$(document).on("keypress",function(){
  if(!started){
    $("#level-title").text("level "+level);
    nextSequence();
    started=true;
  }


});


$(".btn").click(function(){
    var userChosenColour=$(this).attr("id"); // it is a getter meethod of click press
userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function nextSequence(){
  //  var audio;
  userClickedPattern=[];
  level++;
  $("#level-title").text("level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // if(randomChosenColour==="red"){
    //     $("#red").fadeIn(500).fadeOut(500).fadeIn(500);
    //     audio=new Audio("sounds/red.mp3");
    //     audio.play();
    //     level++;
    // }
    //
    // else if(randomChosenColour==="blue"){
    //     $("#blue").fadeIn(500).fadeOut(500).fadeIn(500);
    //     audio=new Audio("sounds/blue.mp3");
    //     audio.play();
    //     level++;
    // }
    // else if(randomChosenColour==="green"){
    //     $("#green").fadeIn(500).fadeOut(500).fadeIn(500);
    //     audio=new Audio("sounds/yellow.mp3");
    //     audio.play();
    //     level++;
    // }
    // else if(randomChosenColour==="yellow"){
    //     $("#yellow").fadeIn(500).fadeOut(500).fadeIn(500);
    //     audio=new Audio("sounds/yellow.mp3");
    //     audio.play();
    //     level++;
    // }
$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  //    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  // audio.play();
}

function playSound(name){
    var sound="sounds/"+name+".mp3";
  var  audio=new Audio(sound);
        audio.play();
}


function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function () {
    $("#"+currentColour).removeClass("pressed");
  }, 10);
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success");

    if(gamePattern.length===userClickedPattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
else{
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  },200);
  $("#level-title").text("Game Over, Press Any Key to Restart");
  playSound("wrong");
  startOver();
}
}

function startOver(){
  level=0;
 gamePattern=[];
 started=false;

}
