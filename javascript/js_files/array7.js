var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
function hasEnoughPlayers(team){
   if(team.length<7){
       return false;
   }
   else {
       return true;
   }
}