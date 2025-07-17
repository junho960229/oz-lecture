// 상수 선언 (const)
const MAX_TIME = 10;
const MIN_TIME = 1;

// 변수 선언 (var)
var timerMessage = "";

// 함수 선언문 + 매개변수 기본값 사용
function startTimer(seconds = 10) {
  let timerCount = seconds; // let 사용
  const timerDisplay = document.getElementById("timerDisplay");
  const startButton = document.getElementById("startTimer");

  // 출력 초기화
  timerDisplay.classList.remove("error");
  timerDisplay.textContent = `타이머: ${timerCount}초`;

  // 버튼 비활성화
  startButton.disabled = true;

  // setInterval로 타이머 시작
  const intervalId = setInterval(() => {
    timerCount--;
    if (timerCount > 0) {
      timerDisplay.textContent = `타이머: ${timerCount}초`;
    } else {
      clearInterval(intervalId); // 타이머 종료
      timerDisplay.textContent = "타이머 종료!";
      startButton.disabled = false; // 버튼 다시 활성화
    }
  }, 1000);
}

// 이벤트 리스너 등록
document.getElementById("startTimer").addEventListener("click", function () {
  const input = document.getElementById("timerInput").value;
  const timerDisplay = document.getElementById("timerDisplay");

  // 입력 숫자로 변환
  const seconds = Number(input);

  // 유효성 검사
  if (isNaN(seconds) || seconds < MIN_TIME || seconds > MAX_TIME) {
    timerMessage = "유효한 숫자(1-10)를 입력하세요!";
    timerDisplay.textContent = timerMessage;
    timerDisplay.classList.add("error");
    return;
  }

  // 타이머 실행
  startTimer(seconds);
});
