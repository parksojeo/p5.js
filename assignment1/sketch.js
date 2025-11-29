function setup() {
  createCanvas(600, 400);
}

function draw() {
  // 배경색
  background("#000080");
  noStroke();

  // 우주선 빛
  fill("#FFFF66");
  quad(180, 200, 405, 210, 495, 400, 105, 400);

  // 우주선
  fill("#AAAAAA");
  ellipse(300, 170, 375, 120);

  fill("#66CCFF");
  arc(300, 150, 225, 140, radians(180), radians(360), OPEN);

  // 인물 얼굴과 몸
  fill("#FF80FF");
  circle(360, 280, 20);
  triangle(360, 280, 345, 320, 375, 330);

  // 인물의 팔
  strokeWeight(5);
  stroke("#FF80FF");
  line(330, 300, 360, 290);
  line(360, 290, 382, 310);

  // 별
  stroke(255);
  strokeWeight(3);
  point(75, 50);
  point(150, 80);
  point(300, 40);
  point(450, 70);
  point(525, 120);
  point(375, 60);
  point(225, 30);
  point(25, 100);

  // 달
  noStroke();
  fill(255, 255, 200);
  ellipse(480, 60, 65, 65);

  fill(200);
  ellipse(470, 65, 10, 10);
  ellipse(490, 78, 8, 8);
  ellipse(483, 70, 6, 6);

  // 건물
  fill("#00CC00");
  square(45, 340, 70);

  fill("#FFFF66");
  rect(68, 350, 45, 10);
  rect(98, 370, 37, 10);

  fill("#009900");
  rect(180, 320, 75, 80);

  fill("#FFFF66");
  rect(218, 340, 30, 8);
  rect(195, 355, 39, 8);

  fill("#00AA00");
  square(420, 345, 60);

  fill("#FFFF66");
  rect(435, 365, 40, 10);
  rect(440, 385, 30, 10);
}