var a,b

function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(200, 100, 30, 30);

   a.shapeColor="red"
   b.shapeColor="red"

}

function draw() {
  background(255,255,255);  

  a.x=mouseX
  a.y=mouseY
   console.log(a.y-b.y)


   if(a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2){
     a.shapeColor="green"
   b.shapeColor="green"
   }
   else
   {
     a.shapeColor="red"
   b.shapeColor="red"
   }

  drawSprites();
}