/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
num=60;
while(num>=0){
    
  if (num === 50) {
      
    console.log("Orbiter transfers from ground to internal power \n");
  }
  
  else if (num === 31) {
      
    console.log("Ground launch sequencer is go for auto sequence start \n");
  }
  
  else if (num === 16) {
      
    console.log("Activate launch pad sound suppression system \n");
  }
  
  else if (num === 10) {
      
    console.log("Activate main engine hydrogen burnoff system \n");
  }
  
  else if (num === 6) {
      
    console.log ("Main engine start \n"); 
  }
  
  else if (num === 0) {
      
    console.log("Solid rocket booster ignition and liftoff! \n");
  }
  
  else {
      
    console.log("T-"+ num +" seconds \n");
  }  
  
  num--;
  

}
