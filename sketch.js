var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  createCanvas(480,800);

  //ground
  createSprite(240, 790, 480, 20);

  
}

function draw() {
  background(0,0,0);  
  drawSprites();

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height + divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width + 10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for(var k = 0; k < particles.length; k++) {
    divisions[k].display();
  }

  

 
}