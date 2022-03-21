

function setup() {
  // put setup code here
  createCanvas(100,100)
  frameRate(30)
  textSize(5)
  
}


let gameover = false
let snakeX = 50
let snakeY = 50
let snakeLength = 2
let nofood = true
let snektrail = []

function distance2(x1,x2,y1,y2){
  return Math.sqrt((x1-x2)**2 + (y1-y2)**2)
}

function draw() {
  print(snektrail)
  background(0)
  strokeWeight(1)
  stroke(255)
  square(snakeX,snakeY,1)

  for (let i = 0; i < snektrail.length; i++){
    square(snektrail[i][0],snektrail[i][1],1)
    if (snektrail.length >= 2){
      snektrail[snektrail.length-i-1] = snektrail[snektrail.length-i-2]
    snektrail[0] = [snakeX,snakeY]
    if (distance2(snakeX,snektrail[i][0],snakeY,snektrail[i][1])==0 && i>=2){
      gameover = true
      
    }
    if (gameover){
      text('GameOver',20,50)
      text("Press Spacebar to play again",5,70)

    }
    
  }
    
  }


  if (!gameover){
    if (keyCode === UP_ARROW){
    snakeY -= 1
  }
  else if (keyCode === DOWN_ARROW){
    snakeY += 1
  }
  else if (keyCode === LEFT_ARROW){
    snakeX -= 1
  }
  else if (keyCode === RIGHT_ARROW){
    snakeX += 1
  }
  }
  snakeX = snakeX % 100
  snakeY = snakeY % 100
  if (snakeX == 0){
    snakeX = 100
  }
  if (snakeY == 0){
    snakeY = 100
  }
  
  if (nofood == true){
    
    foodX = 100 * Math.random()
    foodY = 100 * Math.random()
  
    nofood = false
  
  

  }
  stroke(0,255,0)
  square(foodX,foodY,1)
  
  if (distance2(foodX,snakeX,foodY,snakeY) < 2){
    nofood = true
    snakeLength += 1
    snektrail.push([])
  }
  
  text(snakeLength-2,90,90)
  if (keyCode == 32 && gameover){
    gameover = false
    snakeX = 50
    snakeY = 50
    snakeLength = 2
    nofood = true
    snektrail = []
    keyCode = RIGHT_ARROW
  }

}