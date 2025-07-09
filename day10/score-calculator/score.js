// 최대 점수
const MAX_SCORE = 105;

// score 점수 세팅
let inputStr = prompt("점수를 입력하세요.");
console.log(inputStr);
let input = parseInt(inputStr);
console.log(input);
let score = input;

// 최종점수 계산 (5점 추가)
let finalScore;
if (isNaN(score) || score < 0 || score > 100) {
  console.log("Invalid score! Please enter a number between 0 and 100.");
} else {
  // 보너스 점수 추가
  finalScore = score + 5;

if (finalScore > MAX_SCORE) {
    finalScore = MAX_SCORE;
}
// 등급 결정 (if문)
let grade;
 if (finalScore >= 100) {
    grade = 'S';
  } else if (finalScore >= 90) {
    grade = 'A';
  } else if (finalScore >= 80) {
    grade = 'B';
  } else if (finalScore >= 70) {
    grade = 'C';
  } else if (finalScore >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

// 합격/불합격 여부 결정 (삼항연산자)
let result = finalScore >= 60 ? "Pass" : "Fail";

// 등급에 따른 console.log() 출력 (switch문)
let message;
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

// 결과 출력
console.log(`Final Score: ${finalScore}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${result}`);
console.log(`Message: ${message}`);
}