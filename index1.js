
var buttonColours1=["red","blue","green","yellow"];
var gamePattern1=[];
var userClickedPattern1=[];
var started1=false;
var level1=0;

$(document).on("keypress",function(){
  if(!started1){
    $("#level-title").text("Level "+level1);
    nextSequence1();
    started1=true;

  }
});

$(".btn").on("click",function(){
  var userChosenColour1=$(this).attr("id");
  userClickedPattern1.push(userChosenColour1);
  playSound1(userChosenColour1);
  animatePress1(userChosenColour1);
  checkAnswer1(userClickedPattern1.length-1);
});

function nextSequence1(){
  userClickedPattern1=[];

   level1++;
$("#level-title").text("level "+level1);
  var randomNumber1=Math.floor(Math.random()*4);
  var randomChosenColour1=buttonColours1[randomNumber1];
  gamePattern1.push(randomChosenColour1);

$("#"+randomChosenColour1).fadeIn(100).fadeOut(100).fadeIn(100);
playSound1(randomChosenColour1);
}

function playSound1(colourType){
  var audio= new Audio("sounds/"+colourType+".mp3");
  audio.play();
}

function animatePress1(currentColour){
  $("."+currentColour).addClass("pressed");
  setTimeout(function () {
      $("."+currentColour).removeClass("pressed");
  }, 100);
}


function checkAnswer1(currentLevel){
  if(userClickedPattern1[currentLevel]===gamePattern1[currentLevel]){
    console.log("success");
    if(userClickedPattern1.length===gamePattern1.length){
      setTimeout(function () {
        nextSequence1();
      }, 1000);
    }
  }
  else{
  playSound1("wrong");
  $(document).addClass("game-over");
  setTimeout(function () {
    $(document).removeClass("game-over");
  },200);
  $("#level-title").text("Game Over, Press Any Key to Restart");
 startOver1();
  }
}
function startOver1(){
  level1=0;
  gamePattern1=[];
  started1=false;
}
