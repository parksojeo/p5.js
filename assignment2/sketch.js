function setup() {
  createCanvas(600, 400);
  background("#c1b185");

  // 머리
  fill("#4b2e2e");
  noStroke();

  // 똥머리 꼭대기 부분
  circle(300, 60, 55); // y +30

  // 몸통 (사각형 + 약간 사선 느낌)
  fill("#c54646");
  quad(280, 260, 320, 260, 370, 290, 230, 290);
  quad(230, 290, 370, 290, 350, 390, 250, 390);

  // 목 (사각형)
  fill("#f5d6c6");
  rect(280, 230, 40, 40, 10);

  // 얼굴 (타원)
  fill("#f5d6c6");
  ellipse(300, 170, 140, 160);

  // 앞머리 일부 arc로 표현
  fill("#4b2e2e");
  arc(300, 150, 150, 150, PI, 0, CHORD);

  // 앞머리 살짝 갈라진 부분 (삼각형)
  fill("#f5d6c6");
  triangle(340, 150, 345, 130, 355, 150);
  
// 왼쪽 옆머리
fill("#4b2e2e");
beginShape();
vertex(228, 140);                 // 시작점
bezierVertex(210, 175, 230, 210, 245, 230); // 끝점을 얼굴쪽으로 이동
endShape(CLOSE);

// 오른쪽 옆머리
beginShape();
vertex(372, 140);                 // 시작점
bezierVertex(390, 170, 370, 210, 355, 230); // 끝점을 얼굴쪽으로 이동
endShape(CLOSE);
  
    // 볼터치
  fill("#FFC0C0");
  ellipse(260, 195, 40, 30); 
  ellipse(340, 195, 40, 30);
  
  // 다크서클
  fill("#CCCCE5");
  ellipse(270, 185, 30, 13);
  ellipse(330, 185, 30, 13);

  // 눈 (원 + 점)
  fill(255);
  ellipse(270, 170, 35, 30); // 왼쪽 흰자
  ellipse(330, 170, 35, 30); // 오른쪽 흰자
  fill(0);
  circle(270, 170, 18); // 왼쪽 동공
  circle(330, 170, 18); // 오른쪽 동공
  fill(255);
  circle(270, 165, 5); // 왼쪽 동공 하이라이트
  circle(330, 165, 5); // 오른쪽 동공 하이라이트
  fill(0);
  arc(270, 163, 35, 17, PI, 0, CHORD);
  arc(330, 163, 35, 17, PI, 0, CHORD);
  

  // 코 (점)
  stroke("#f0b9a2");
  strokeWeight(10);
  point(300, 190);

  // 입 (arc)
  noFill();
  stroke(120, 60, 60);
  strokeWeight(3);
  arc(300, 210, 40, 20, 0, PI);

  // 팔 (선 + 사각형 손)
  stroke("#f5d6c6");
  strokeWeight(12);
  line(230, 285, 160, 250); // 왼팔
  line(370, 285, 420, 250); // 오른팔
  strokeWeight(1);
  fill("#f5d6c6");
  square(150, 240, 20); // 왼손
  square(410, 240, 20); // 오른손

  // 손에 든 컵 (사다리꼴 + 삼각형)
  fill("#8b4513");
  quad(400, 230, 440, 230, 430, 290, 410, 290); // 컵 몸통
  

  // 컵 안 얼음 추가
  fill(255, 255, 255, 200); // 반투명 흰색
  rect(415, 235, 8, 8, 2); // 얼음 1
  rect(425, 245, 8, 8, 2); // 얼음 2
  rect(410, 240, 8, 8, 2); // 얼음 3
  rect(420, 255, 8, 8, 2); // 얼음 4
}