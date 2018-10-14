// Rover Object Goes Here

// ======================
var OurRover = {
  direction: "N",
  positionX: 0,
  positionY: 0,
  travelLog: []
};
  
// ======================





//Funtion Left
 function turnLeft(rover){
 switch(rover.direction){

   case 'N': 
    rover.direction='W';
    break;

   case 'W': 
    rover.direction='S';
    break;

   case 'S': 
    rover.direction='E';
    break;

   case 'E': 
    rover.direction='N';
    break;
 }
     console.log("turnLeft was called!");
}


//Function Right
 function turnRight(rover){
 switch(rover.direction){

   case 'N': 
    rover.direction='E';
    break;

   case 'E': 
    rover.direction='S';
    break;

   case 'S': 
    rover.direction='W';
    break;
   case 'W':
    rover.direction='N'; 
    break;
 }
   console.log("turnRight was called!");
}


//Moving Forward
 function moveForward(rover){
  switch(rover.direction){
   case 'N': 
       if(rover.positionY <= 0 || rover.positionY > 10){
         console.log("Rover reached limit grid");
       }else{
         rover.positionY-=1;
       }
      break;
   
  
   
   case 'S':
      if(rover.positionY < 0 || rover.positionY > 10){
         console.log("Rover reached limit grid");
      }else {
         rover.positionY+=1;
      }
     break;

   case 'E':
     if(rover.positionX < 0 || rover.positionX > 10){
        console.log("Rover reached limit grid");
      }else{   
        rover.positionX+=1;
      }
      break;  
     
   case 'W':
      if(rover.positionX < 0 || rover.positionX > 10){
         console.log("Rover reached limit grid");
      }else {
           rover.positionX-=1;
      }
     break;
  }
  
  console.log("moveForward was called");
  console.log("Rover’s coordinates are: " + [rover.positionX, rover.positionY]);
 }
//Moving backward
function moveBackward(rover){
  switch(rover.direction){
   case 'N': 
       if(rover.positionY > 10 || rover.positionY <= 0){
         console.log("Rover reached limit grid");
       }else{
         rover.positionY+=1;
       }
      break;
   
  
   
   case 'S':
      if(rover.positionY > 10 || rover.positionY <0){
         console.log("Rover reached limit grid");
      }else {
         rover.positionY-=1;
      }
     break;

   case 'E':
     if(rover.positionX >10 || rover.positionX < 0){
        console.log("Rover reached limit grid");
      }else{   
        rover.positionX-=1;
      }
      break;  
     
   case 'W':
      if(rover.positionX >10 || rover.positionX < 0){
         console.log("Rover reached limit grid");
      }else {
           rover.positionX+=1;
      }
     break;
  }
  
  console.log("moveBackward was called");
  console.log("Rover’s coordinates are: " + [rover.positionX, rover.positionY]);
 }


//Iteration 4 | Commands

 function commandsRover(rover){
  var route = prompt("Insert: f: forward, r: right, l: left, b: back");

    if(route.indexOf('f') >= 0 || route.indexOf('r') >= 0 || route.indexOf('l') >= 0 ||route.indexOf('b') >= 0 ){
  var newRoute = route.split("");
  console.log("Rover's route: " + route);
  for(var i = 0;  i < newRoute.length; i++){
    
     switch(route[i]){
     case 'l': 
      turnLeft(rover); 
      break;
     case 'r':
      turnRight(rover); 
      break;
     case 'f': 
      moveForward(rover);
      break;
      case 'b': 
      moveBackward(rover);
      break;
    }
    
     var position = [OurRover.positionX, OurRover.positionY];
     OurRover.travelLog.push(position);
     console.log("Rover right now at: " + position);
 
   }
  
  }else {
    alert("Enter a valid command!!");
    commandsRover(OurRover);
  }
}
commandsRover(OurRover);
 