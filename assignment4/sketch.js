let beamColorA, beamColorB;
let stars = []; // 별 정보 저장 배열

function setup() {
  createCanvas(600, 400);

  // RGB 색상 모드
  colorMode(RGB, 255, 255, 255);
  beamColorA = color(255, 255, 100); // 노란빛
  beamColorB = color(100, 200, 255); // 파란빛

  // 별 위치 + 개별 애니메이션 속성 저장
  let starPositions = [
    [75, 50], [150, 80], [300, 40], [450, 70],
    [525, 120], [375, 60], [225, 30], [25, 100]
  ];
  for (let pos of starPositions) {
    stars.push({
      x: pos[0],
      y: pos[1],
      speed: random(0.02, 0.05),     // 각 별만의 움직임 속도
      amplitude: random(1, 4)        // 크기 변화 폭 (1~4)
    });
  }
}

function draw() {
  let t = millis() / 1000.0;

  // === 애니메이션 값들 ===
  let shipOffsetX = sin(frameCount * 0.05) * 5;   // 우주선 좌우로 흔들림
  let personOffsetY = sin(frameCount * 0.03) * 15; // 인물 위아래로 흔들림
  let moonSize = 65 + 5 * sin(frameCount * 0.03); // 달 크기 변화

  // === 배경 ===
  background("#000080");
  noStroke();

  // === 색 변화 (RGB + lerpColor) ===
  let amt = (sin(t) + 1) / 2; // 0~1
  let currentBeamColor = lerpColor(beamColorA, beamColorB, amt);
  fill(currentBeamColor);

  // === 우주선 빛 (좌우 이동) ===
  quad(
    180 + shipOffsetX, 200,
    405 + shipOffsetX, 210,
    495, 400,
    105, 400
  );

  // === 우주선 몸체 ===
  fill("#AAAAAA");
  ellipse(300 + shipOffsetX, 170, 375, 120);

  // === 유리 돔 (원래 있던 부분) ===
  fill("#66CCFF");
  arc(300 + shipOffsetX, 150, 225, 140, radians(180), radians(360), OPEN);

  // === 외계인 (창문 코드 제거 + 위치 y=120 유지) ===
  let alienOffsetY = sin(frameCount * 0.04) * 8;
  let alienOffsetX = sin(frameCount * 0.03) * 3;

  let alienBaseX = 300 + shipOffsetX + alienOffsetX;
  let alienBaseY = 120 + alienOffsetY;

  // 외계인 몸
  fill("#00FF00");
  ellipse(alienBaseX, alienBaseY, 30, 40);

  // 외계인 눈
  fill(0);
  ellipse(alienBaseX - 5, alienBaseY - 5, 8, 10);
  ellipse(alienBaseX + 5, alienBaseY - 5, 8, 10);

  // 외계인 더듬이
  stroke("#00FF00");
  strokeWeight(3);
  line(alienBaseX, alienBaseY - 15, alienBaseX - 7, alienBaseY - 25);
  line(alienBaseX, alienBaseY - 15, alienBaseX + 7, alienBaseY - 25);
  noStroke();

  // === 인물 (우주선 아래) ===
  fill("#FF80FF");
  circle(360, 280 + personOffsetY, 20);
  triangle(
    360, 280 + personOffsetY,
    345, 320 + personOffsetY,
    375, 330 + personOffsetY
  );

  // === 인물 팔 ===
  let armWave = sin(frameCount * 0.15) * 2;
  strokeWeight(5);
  stroke("#FF80FF");
  line(330, 300 + personOffsetY, 360, 290 + personOffsetY + armWave);
  line(360, 290 + personOffsetY, 382, 310 + personOffsetY + armWave);
  noStroke();

  // === 반짝이는 별 ===
  for (let star of stars) {
    let starSize = 2 + star.amplitude * (1 + sin(frameCount * star.speed));
    fill(255, 255, 255, 230);
    circle(star.x, star.y, starSize);
  }

  // === 달 ===
  fill(255, 255, 200);
  ellipse(480, 60, moonSize, moonSize);

  fill(200);
  ellipse(470, 65, 10, 10);
  ellipse(490, 78, 8, 8);
  ellipse(483, 70, 6, 6);

  // === 건물들 ===
  fill("#00CC00");
  square(45, 340, 70);

  fill("#FFFF66");
  rect(55, 350, 45, 10);
  rect(78, 370, 35, 10);

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