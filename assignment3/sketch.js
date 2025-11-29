// (D로 컵 들기, 마우스 따라 눈동자, 클릭 시 깜빡임)

let lift = 0;           // 0~1: 컵/오른팔 들어올린 정도 (D키)
let blink = 0;          // 0: 눈 뜸, 1: 눈 감음
let blinkTimer = 0;     // 깜빡임 유지 프레임

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background("#c1b185");

  // ---- D키로 컵 들어올리기(부드럽게) ----
  let targetLift = 0;
  if (keyIsPressed && (key === 'D' || key === 'd')) targetLift = 1;
  lift = lerp(lift, targetLift, 0.12);

  // ---- 깜빡임 타이머 ----
  if (blinkTimer > 0) {
    blinkTimer--;
    if (blinkTimer === 0) blink = 0;
  }

  // ---- 좌표 계산 ----
  const faceCX = 300, faceCY = 170;
  const rightShoulder = { x: 370, y: 285 };
  const handBase = { x: 420, y: 250 };
  const cupBase  = { x: 420, y: 260 };

  const liftY   = -90 * easeInOutCubic(lift);
  const liftRot = -radians(15) * lift;

  const handPos = { x: handBase.x, y: handBase.y + liftY };
  const cupPos  = { x: cupBase.x,  y: cupBase.y  + liftY };

  // ---- 머리(얼굴) ----
  translate(faceCX, faceCY);
  drawHeadAndFace();  // 얼굴 중심 (0,0)
  resetMatrix();

  // ---- 몸통/목/왼팔 ----
  drawBodyAndNeck();
  drawLeftArm();

  // ---- 오른팔 ----
  stroke("#f5d6c6");
  strokeWeight(12);
  line(rightShoulder.x, rightShoulder.y, handPos.x, handPos.y);
  noStroke();

  // ---- 손 ----
  translate(handPos.x, handPos.y);
  rotate(liftRot);
  fill("#f5d6c6");
  rectMode(CENTER);
  rect(0, 0, 20, 20, 3);
  resetMatrix();
  rectMode(CORNER);

  // ---- 컵 ----
  translate(cupPos.x, cupPos.y);
  rotate(liftRot);

  fill("#8b4513");
  quad(-20, -30, 20, -30, 10, 30, -10, 30);

  // 얼음(반투명)
  fill(255, 255, 255, 200);
  rectMode(CENTER);
  rect(-7,  0, 8, 8, 2);
  rect(5,   8, 8, 8, 2);
  rect(-12, 3, 8, 8, 2);
  rect(2,   14,8, 8, 2);
  rectMode(CORNER);

  resetMatrix();

  // ---- 도움말(고정 텍스트) ----
  drawHelpOverlay();
}

// ================= 그리기 함수 =================
function drawBodyAndNeck() {
  fill("#c54646");
  quad(280, 260, 320, 260, 370, 290, 230, 290);
  quad(230, 290, 370, 290, 350, 390, 250, 390);

  fill("#f5d6c6");
  rect(280, 230, 40, 40, 10);
}

function drawLeftArm() {
  stroke("#f5d6c6");
  strokeWeight(12);
  line(230, 285, 160, 250);
  noStroke();
  fill("#f5d6c6");
  rect(150, 240, 20, 20, 3);
}

function drawHeadAndFace() {
  // 머리 윗동그라미
  fill("#4b2e2e");
  circle(0, -110, 55);

  // 얼굴
  fill("#f5d6c6");
  ellipse(0, 0, 140, 160);

  // 앞머리
  fill("#4b2e2e");
  arc(0, -20, 150, 150, PI, 0, CHORD);

  // 앞머리 갈라짐
  fill("#f5d6c6");
  triangle(40, -20, 45, -40, 55, -20);

  // 옆머리(Bezier)
  fill("#4b2e2e");
  beginShape();
  vertex(-72, -30);
  bezierVertex(-90, 5, -70, 40, -55, 60);
  endShape();

  beginShape();
  vertex(72, -30);
  bezierVertex(90, 10, 70, 40, 55, 60);
  endShape();

  // 볼터치(고정)
  fill("#FFC0C0");
  ellipse(-40, 25, 40, 30);
  ellipse(40, 25, 40, 30);

  // 다크서클
  fill("#CCCCE5");
  ellipse(-30, 15, 30, 13);
  ellipse(30, 15, 30, 13);

  // 눈 (마우스 따라가기 + 깜빡임)
  const eyeL = { x: -30, y: 0 };
  const eyeR = { x: 30,  y: 0 };

  // 얼굴 중심(300,170) 기준 마우스 상대 좌표
  const mx = mouseX - 300;
  const my = mouseY - 170;

  // 민감도 0.25, 최대 이동 반경 ±6px
  const dx = constrain(mx * 0.25, -6, 6);
  const dy = constrain(my * 0.25, -6, 6);

  fill(255);
  if (blink === 1) {
    // 감은 눈
    ellipse(eyeL.x, eyeL.y - 7, 35, 4);
    ellipse(eyeR.x, eyeR.y - 7, 35, 4);
  } else {
    // 흰자
    ellipse(eyeL.x, eyeL.y, 35, 30);
    ellipse(eyeR.x, eyeR.y, 35, 30);

    // 동공
    fill(0);
    circle(eyeL.x + dx, eyeL.y + dy, 18);
    circle(eyeR.x + dx, eyeR.y + dy, 18);

    // 하이라이트
    fill(255);
    circle(eyeL.x - 5 + dx, eyeL.y - 5 + dy, 5);
    circle(eyeR.x - 5 + dx, eyeR.y - 5 + dy, 5);

    // 윗눈꺼풀
    fill(0);
    arc(eyeL.x, eyeL.y - 7, 35, 17, PI, 0, CHORD);
    arc(eyeR.x, eyeR.y - 7, 35, 17, PI, 0, CHORD);
  }

  // 코
  stroke("#f0b9a2");
  strokeWeight(10);
  point(0, 20);
  noStroke();

  // 입
  noFill();
  stroke(120, 60, 60);
  strokeWeight(3);
  arc(0, 40, 40, 20, 0, PI);
  noStroke();
}

function drawHelpOverlay() {
  fill(0, 0, 0, 120);
  rect(12, 12, 240, 55, 10);
  fill(255);
  textSize(12);
  textAlign(LEFT, TOP);
  text("Controls:\nD: 컵 들기\n마우스: 이동(눈동자 추적), 클릭(깜빡임)", 20, 20);
}

// ================= 마우스 콜백 =================
function mousePressed() {
  // 캔버스 클릭 시 깜빡임
  blink = 1; 
  blinkTimer = 8;
}

// ================= 유틸리티 =================
function easeInOutCubic(t) {
  return (t < 0.5) ? (4*t*t*t) : (1 - pow(-2*t + 2, 3)/2);
}

// Save a 5-second gif when the user presses the 's' key.
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}
