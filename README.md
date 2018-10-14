# Mars-Rover
Mars-Rover_IronHack
Our Mars Rover is kind of dumb. By that, we mean it can’t move and turn at the same time. This means that if the rover wants to move to the left, it’s first move must be a turn. Its next move will then be a step forward.

We will discuss this concept in more detail as we progress through the exercise.

In addition, our rover is on a test mission. NASA has placed the rover on a 10x10 grid to make sure all is well before we ship it off to mars.

At a high level, what we will do in the exercise is the following:

Create a function to turn the rover.
Create a function to move the rover forwards or backwards based on its direction.
Create a function to receive a list of commands and move based off of those commands.
Iteration 1 | The Rover Object
Create an object to represent the rover. This object will have only one property for now: the direction.

The direction property can contain one of four values: "N", "S", "E", or "W". The rover’s default direction will be "N" (north).

*******************************
Iteration 2 | Turning the Rover
*******************************

The rover has a direction attribute. We’ve already provided functions called turnLeft and turnRight that receive a rover object as an argument. Your job is to turn the rover in the appropriate direction based off of its current direction.

Examples

Rover is facing North and turns left => Rover is now facing West

Rover is facing West and turns left => Rover is now facing South

Rover is facing North and turns right => Rover is now facing East.

******************************
Iteration 3 | Moving the Rover
******************************
The Rover Object’s position

In order to move the rover around, we have to keep track of the rover’s position.

****************
Moving Forward
****************
Once the rover has a position, it’s time to move it.

Positions can be represented as a pair of coordinates, x and y. Add two properties to your rover called x and y. Their default values will both be 0.
 
 How to Move

Moving forward is a function of the rover’s current direction, and the movement forward.

For instance, if the Rover is facing west and moves forward, we would decrease the Rover’s x by 1.

If the rover is facing north and moves forward, we would decrease the rover’s y by 1.

If the rover is facing south and moves forward, we would increase the y by 1.

Fill in this logic in the moveForward function. After each movement, console.log the rover’s coordinates so you can see where it is positioned.

***********************
Iteration 4 | Commands
***********************

Create a function that receives a list of commands. These commands will be the first letter of either (f)orward, (r)ight, or (l)eft.

To test it, use the string: ‘rffrfflfrff’.

***********************
Iteration 5 | Tracking
***********************

We want to know where our rover has been. Create a property on the rover object that contains the coordinates of the places it has been. Call this property travelLog.

After each move, push the coordinates of the previous space to the travelLog array. After the rover has finished its moves, print out all of the spaces the rover has traveled over.

