// 최대 점수
const MAX_SCORE = 105;

// score 점수 세팅
let inputStr = prompt("점수를 입력하세요.");
console.log(inputStr);
let input = parseInt(inputStr);
console.log(input);

let score = input;

if (isNaN(score) || score < 0 || score > 100) {
  console.log("Invalid score! Please enter a number between 0 and 100.");
} else {
  // 단항 부정 연산자 사용
   if (!isNaN(score)) {
    console.log("✅ 유효한 숫자입니다.");
  }

  // 점수 조정
  score++;      // 1점 증가
  score += 5;   // 5점 보너스
  score *= 1.1; // 10% 가산

if (score > 100) score = 100;

// 등급 결정 (if문)
let grade;
  if (score >= 100) {
    grade = 'S';
  } else if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else if (score >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

// 합격/불합격 여부 결정 (삼항연산자)
let result = score >= 60 ? "Pass" : "Fail";

// 등급에 따른 console.log() 출력 (switch문)
let message;
if (score === 100) {
  message = "Perfect Score!";
} else {
  switch (grade) {
    case "S":
      message = "Super!!";
      break;
    case "A":
      message = "Excellent work!";
      break;
    case "B":
      message = "Good job!";
      break;
    case "C":
      message = "Satisfactory performance.";
      break;
    case "D":
      message = "Needs improvement.";
      break;
    case "F":
      message = "Please try harder!";
      break;
  }
}

// 결과 출력
console.log(`Final Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${result}`);
console.log(`Message: ${message}`);
}