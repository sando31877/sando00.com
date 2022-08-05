var a = 80; //가로 
var b = 80; //세로
var angle = 0;

function setup() {
  createCanvas(400, 400);
  textSize(20);
  
  angleMode(DEGREES);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(255);
  var x = a*cos(angle);
  var y = b*sin(angle);
  angle++;
  
  // 타이틀 
  text("js 삼각함수 그리기", 200, 30);
  fill(150);

  // 원 그리기
  stroke(0);
  noFill();
  ellipse(200, 200, 2*a, 2*b);
  line(200,200,200+a,200);
  noStroke();
  fill(255,0,0);
  ellipse(200+x, 200+y, 8);
  ellipse(200, 200, 4);
  stroke(255,0,0);
  line(200, 200, 200+x, 200+y);
  fill(100, 100);
  arc(200, 200, a/2, a/2, 0, angle);

  
  // x축
  stroke(0,255,0);
  fill(0,255,0);
  ellipse(200+x, 180-a, 8);
  line(200+x, 180-a, 200+x, 200+y);
  line(200+x, 200, 200, 200);
  push();
  textSize(10);
  fill(0);
  noStroke();
  text("x = a * cos(angle)", 200+x+45, 180-a+2.5);
  pop();
  
  // y축
  stroke(0,0,255);
  fill(0,0,255);
  ellipse(180-a, 200+y, 8); 
  line(180-a, 200+y, 200+x, 200+y);
  line(200+x, 200, 200+x, 200+y);
  push();
  translate(180-a, 200+y);
  rotate(-90);
  textSize(10);
  fill(0);
  noStroke();
  text("y = b * sin(angle)", 50, 2.5);
  pop();
  
  // x축, y축 라벨
  fill(0);
  text("x축 움직임 = cos",200,150-a, 120, 50);
  push();
  translate(150-a, 200);
  rotate(-90);
  text("y축 움직임 = sin",0, 0, 120, 50);
  pop();
  
  // 각도 표시
  noStroke();
  fill(255);
  rect(250+a,200,60,30);
  fill(0);
  text((angle%360)+"°",250+a,210); //일반각
  text((angle%360*PI/180)+"π",330+a,240); //라디안
}