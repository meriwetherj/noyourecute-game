var click=0; 
var outOfTime = false;
function hi(){
if(!outOfTime){
click+=1; 
document.getElementById("score1").innerHTML = click;
}
}
var time = 60; //time in seconds
var timer = setInterval(function(){
 time--;
 document.getElementById("timer").innerHTML = time + "s";
 if(time==0){
   clearInterval(timer);
   document.getElementById("timer").innerHTML = "Time's up!";
   outOfTime = true;
 }
}, 1000);
