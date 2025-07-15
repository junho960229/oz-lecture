const promise = new Promise((resolve, reject) => {
    console.log("promise 영역");
    let promiseResult = "작업성공!";
    
});

promise
.then((result) => {
    console.log("then 영역");
    console.log(result);
})
.catch((err) => {
    console.log("catch 영역");
    console.log(err);
})