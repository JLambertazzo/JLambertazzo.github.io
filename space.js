const white = "#FFFFFF"; //white brush color
const red = "#FF0000"; //red brush color
const shipWidth = 20; //width of the ship
const shipHeight = 10; //height of the ship
const bulletHeight = 10; //height of the bullet
const bulletSpeed = 2; //speed of the bullet
const invaderSpeed = 1; //speed of the invader
const invaderWidth = 10; //width of the invader
const invaderHeight = 10; //height of the invader
var moveInvLeft = true; //bool, move left or right
var ship; //reference to the ship
var positionControl;
var numInvaders = 0; //current number of invaders

class PositionControl {
  /*
   * object controlling properties of each sprite
   */
  constructor(){
    this.shipX = (gameArea.canvas.width/2)-shipWidth; //x pos of the ship
    this.shipY = gameArea.canvas.height-shipHeight; //y pos of the ship
    this.bulletX = []; //array of bullet x positions
    this.bulletY = []; //array of bullet y positions
    this.invaderX = [];
    this.invaderY = [];
    }
    moveShip(left){
      /*
       * move the ship one width based on "left" boolean
       */
      if(left){
        this.shipX -= shipWidth;
      }else{
        this.shipX += shipWidth;
      }
    }
    moveBullet(i){
      /*
       * move the given bullet up
       */
      this.bulletY[i] -= bulletSpeed;
    }
  }

function startGame(){
  /*
   * initiates game, run on body load
   */
  console.log("game started");
  gameArea.start();
  positionControl = new PositionControl();
  ship = new Ship(positionControl.shipX,positionControl.shipY,shipWidth,shipHeight);
  addInvaders(); //create the ship
}

var gameArea = {
  /*
   * object containing properties and methods related to the canvas
   */
  start: function(){
    /*
     * run on body load, initiates canvas' context and main game loop
     */
    this.canvas = document.getElementById("game");
    this.context = this.canvas.getContext("2d");
    this.interval = setInterval(updateGameArea, 20); //main loop, 20FPS
  },
  clear: function(){
    /*
     * clears the entire canvas
     */
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
  }
};

function Ship(x, y, width, height){
  /*
   * ship object, is drawn on creation
   */
  var brush = gameArea.context;
  brush.fillStyle = white;

  //draw bottom half:
  brush.fillRect(x, y+height/2, width, height/2);

  //draw pointer:
  var rad = 3;
  brush.fillRect(x+width/2-rad, y, 2*rad, height);
} //drawship

function Bullet(x,y){
  /*
   * set the positions of a new bullet
   */
  positionControl.bulletX.push(x);
  positionControl.bulletY.push(y);
}

document.body.addEventListener("keydown", function(event){
  /*
   * keydown listener, adds handlers for certain keys:
   *   -left arrow -> move ship left
   *   -right arrow -> move ship right
   *   -spacebar -> shoot bullet
   */
  if(event.keyCode === 37 && positionControl.shipX >= 20){
    positionControl.moveShip(true);
  }else if(event.keyCode === 39 && positionControl.shipX <= gameArea.canvas.width-40){
    positionControl.moveShip(false);
  }else if(event.keyCode === 32){
    addBullet();
  }
});

function Invader(x,y){
  /*
   * invader object, sets x and y positions
   */
  positionControl.invaderX.push(x);
  positionControl.invaderY.push(y);
}

function drawShip(){
  /*
   * draws the ship at the current coordinates
   */
  Ship(positionControl.shipX, positionControl.shipY, shipWidth, shipHeight);
}

function addBullet(){
  /*
   * creates a new bullet object
   */
  Bullet(positionControl.shipX,positionControl.shipY);
}

function drawBullets(){
  /*
   * move and draw all bullets, remove bullets that hit the top
   */
  if(positionControl.bulletY[0] < 0){
    positionControl.bulletX.shift();
    positionControl.bulletY.shift();
  }
  //move bullets
  for(var i = 0; i < positionControl.bulletY.length; i++){
    positionControl.moveBullet(i);
  }
  //draw bullets
  for(i = 0; i < positionControl.bulletY.length; i++){
    var rad = 2; //radius of the bullet
  var brush = gameArea.context;
  brush.fillStyle = red;
  brush.fillRect(positionControl.bulletX[i]+shipWidth/2-rad,positionControl.bulletY[i]-bulletHeight,2*rad,bulletHeight);
  }
}

function addInvaders(){
  /*
   * create new invader objects in a grid
   */
  for(var i = 0; i < 3; i++){
    for(var k = 0; k < 5; k++){
      Invader(gameArea.canvas.width-k*2*invaderWidth-invaderWidth, i*invaderHeight+i*2);
    }
  }
}

function drawInvaders(){
  /*
   * draw all invader objects
   */
  for(var i = 0; i < positionControl.invaderY.length; i++){
    moveInvaders();
    var brush = gameArea.context;
    brush.fillStyle = white;
    brush.fillRect(positionControl.invaderX[i],positionControl.invaderY[i],invaderWidth,invaderHeight);
  }
}

function moveInvaders(){
  //check for a jump
  if(getFurthestLeft() <= 0){
    moveInvLeft = false;
    jumpInvaders();
  }else if(getFurthestRight() >= gameArea.canvas.width){
    moveInvLeft = true;
    jumpInvaders();
  }

  for(var i = 0; i < positionControl.invaderX.length; i++){
    if(moveInvLeft){
      positionControl.invaderX[i] -= 0.1;
    }else{
      positionControl.invaderX[i] += 0.1;
    }
  }
}

function getFurthestLeft(){
  /*
   * find and return the lowest invader X value
   */
  var temp = gameArea.canvas.width;
  for(var i = 0; i < positionControl.invaderX.length; i++){
    if(positionControl.invaderX[i] < temp) temp = positionControl.invaderX[i];
  }
  return temp;
}

function getFurthestRight(){
  /*
   * find and return furthest right x
   */
  var temp = 0;
  for(var i = 0; i < positionControl.invaderX.length; i++){
    if(positionControl.invaderX[i] > temp) temp = positionControl.invaderX[i];
  }
  return temp;
}

function jumpInvaders(){
  for(var i = 0; i < positionControl.invaderY.length;i++){
    positionControl.invaderY[i] += 2*invaderHeight;
  }
}

function updateGameArea(){
  /*
   * function run from main game loop
   * updates all moving parts of the game
   */
  gameArea.clear();
  drawShip();
  drawBullets();
  drawInvaders();
}
