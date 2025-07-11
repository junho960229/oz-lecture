// ✅ 변수 선언
const maxStars = 10;
let input;          // 사용자 입력 (while 안에서만 사용)
var stars = "";     // 별 문자열 (전역 사용)

// ✅ 함수 선언문: 기본 별 출력
function printStars(count = 1) {
  stars = "";
  for (let i = 0; i < count; i++) {
    stars += "*";
  }
  console.log(stars);
}

// ✅ 함수 표현식: 역순 별 출력
const printReverseStars = function (count) {
  for (let i = count - 1; i > 0; i--) {
    console.log("*".repeat(i));
  }
}

// ✅ 화살표 함수: 사각형 별 출력
const printSquare = (count) => {
  for (let i = 0; i < count; i++) {
    console.log("*".repeat(count));
  }
}

// ✅ 객체: 패턴들 정의
const patterns = {
  pattern1: "*".repeat(5),
  pattern2: "*".repeat(3),
  pattern3: "*".repeat(1),
  customPattern: "*".repeat(8)
};

// ✅ rest 파라미터: 여러 개 출력
function printMultipleStars(...counts) {
  for (let i = 0; i < counts.length; i++) {
    let count = counts[i];
    if (!isNaN(count) && count >= 1 && count <= 10) {
      console.log(`입력 ${count}: ${"*".repeat(count)}`);
    } else {
      console.log(`출력할 수가 없습니다.`);
    }
  }
}

// ✅ 1. 사용자 입력 받기 (유효할 때까지 반복)
let validInput;
while (true) {
  input = prompt(`Enter the number of stars (1-${maxStars}):`);
  if (!isNaN(input) && input >= 1 && input <= maxStars) {
    validInput = Number(input); // 바깥에서 사용할 수 있게 저장
    break;
  } else {
    console.log("Invalid input! Enter a number between 1 and 10.");
    continue;
  }
}

// ✅ 2. 유효한 입력 받은 후 모든 출력 처리
console.log("-- 기본 별 출력 --");
printStars(validInput);

console.log("-- 역순 별 출력 --");
printReverseStars(validInput);

console.log("-- 사각형 패턴 출력 --");
printSquare(validInput);

console.log("-- 사전 정의된 패턴 출력 --");
for (let key in patterns) {
  console.log(`${key}: ${patterns[key]}`);
}

console.log("-- 여러 숫자 별 출력 --");
printMultipleStars(2, 5, 1, validInput);
