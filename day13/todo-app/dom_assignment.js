// DOM 요소 선택
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');

// 할 일 추가 함수
function addTask() {
  const taskText = taskInput.value.trim(); // 입력값에서 공백 제거

  // 입력이 비어 있으면 경고 후 종료
  if (taskText === '') {
    alert('할 일을 입력해주세요!');
    return;
  }

  // <li> 요소 생성
  const li = document.createElement('li');
  li.classList.add('task-item'); // CSS 스타일 적용

  // <span> 요소 생성 (할 일 텍스트용)
  const span = document.createElement('span');
  span.textContent = taskText;

  // 완료 상태 토글 이벤트
  span.addEventListener('click', function () {
    span.classList.toggle('completed'); // .completed 스타일 적용/해제
  });

  // 삭제 버튼 생성
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제';
  deleteBtn.classList.add('delete-button'); // CSS 스타일 적용

  // 삭제 버튼 클릭 이벤트
  deleteBtn.addEventListener('click', function () {
    taskList.removeChild(li); // 리스트에서 li 제거
  });

  // <li>에 <span>과 버튼 추가
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // <ul>에 <li> 추가
  taskList.appendChild(li);

  // 입력창 초기화
  taskInput.value = '';
}

// 전체 삭제 함수
function clearAllTasks() {
  taskList.innerHTML = ''; // <ul> 내부 비우기
}

// 추가 버튼 클릭 시 할 일 추가
addButton.addEventListener('click', addTask);

// 입력창에서 Enter 키 누를 때 할 일 추가
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// 전체 삭제 버튼 클릭 시 모든 할 일 삭제
clearButton.addEventListener('click', clearAllTasks);
