async function getPost(postNum) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postNum}`);

    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }

    const data = await response.json();
    console.log("받은 데이터:", data);
  } catch (error) {
    console.log("에러 발생:", error);
    alert("에러: " + error.message);
  }
}
getPost(1); // 정상 작동
