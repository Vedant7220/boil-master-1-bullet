var wall,thickness;
var bullet,speed,weight;

var wall1,thickness1;
var bullet1,speed1,weight1;

//var wall2,thickness2;
//var bullet2,speed2,weight2;


function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  wall=createSprite(1200,130,thickness,height/3);
  wall.shapeColor=color(80,80,80);
  
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,80,50,50);
  bullet.velocityX=speed;

  thickness1=random(22,83);
  wall1=createSprite(1200,290,thickness1,height/3);
  wall1.shapeColor=color(80,80,80);

  speed1=random(223,321);
  weight1=random(30,52);
  bullet1=createSprite(50,290,50,50);
  bullet1.velocityX=speed;

  //thickness2=random(22,83);
  //wall2=createSprite(1200,440,thickness2,height/3);


}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
        bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0);
    }
  }
  if(wall1.x-bullet1.x < (bullet1.width+wall1.width)/2)
  {
    bullet1.velocityX=0;
    var deformation=0.5 * weight1 * speed1* speed1/22509;
    if(deformation>180)
    {
      bullet1.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
        bullet1.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      bullet1.shapeColor=color(0,255,0);
    }
  }


  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
}
function hasCollided(lbullet1,lwall1)
{
  bullet1RightEdge=lbullet1.x +lbullet1.width;
  wall1LeftEdge=lwall1.x;
  if(bullet1RightEdge>=wall1LeftEdge)
  {
    return true
  }
  return false;

  if(hasCollided(bullet1,wall1))
  {
    bullet1.velocityX=0;
    var damage=0.5 * weight1 * speed1* speed1/(thickness1 *thickness1 *thickness1);

    if(damage>10)
    {
      wall1.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall1.shapeColor=color(0,255,0);
    }
  }
}

