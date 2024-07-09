let angle = 0;
let isFilling = true;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  rotate(-90); 

  let h = hour();
  let m = minute();
  let s = second();

  if (h > 12) {
    h = h - 12;
  }

  angle = map(h * 60 + m + s / 60, 0, 12 * 60, 0, 360); // 12시간 기준으로 계산

  strokeWeight(1);
  stroke(255);
  noFill();
  arc(0, 0, 500, 500, 0, angle);

  if (isFilling) {
    fill(0);
  } else {
    fill(255);
  }
  arc(0, 0, 400, 400, 0, angle);
  
  //시계 눈금 
  strokeWeight(2);
  stroke(255);
  for (let i = 0; i < 12; i++) {
    line(0, -450, 0, -250); // 눈금 위치 조정
    rotate(30);
  }
  
  // 현재 시간 표시 (회전 상태 해제 및 설정)
  push(); // 현재 변환 상태 저장
  rotate(90); // 회전 상태 해제
  fill(140);
  noStroke();
  textSize(25); 
  let timeString = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2);
  text(timeString, -50, 330); 
  pop(); // 저장된 변환 상태 복원

  if (angle >= 360) {
    isFilling = !isFilling;
    angle = 0; 
  }
}




