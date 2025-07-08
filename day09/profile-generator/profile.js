const NAME = 'team';
let templateString = `나의 이름은 \t ${NAME} 입니다.`;
var lastname = "JH";
console.log("templateString", templateString);
console.log("lastname", lastname);

// 변수 선언
let num1 = 2;
let num2 = 3;
console.log("num1 + num2", num1 + num2);

let age = `제 나이는 ${num2} 입니다.`;
console.log("age", age);

let boolean1 = true;
let boolean2 = false;
let boolean3 = 10<20;
let boolean4 = 10>20;
console.log("boolean1", boolean1);
console.log("boolean2", boolean2);
console.log("boolean3", boolean3);
console.log("boolean4", boolean4);

let StringA = null;
console.log(StringA);

let Youtube;
console.log(Youtube);

let Big1 = 123456789123456789n;
let Big2 = BigInt("123456789123456789");
console.log("Big1", Big1);
console.log("Big2", Big2);


// 문자열 처리
let String1 = '문자열은 큰 따옴표나' + "작은따옴표(\n)로 감싸면 됩니다."
console.log(templateString);
console.log(String1);


// 객체 - 배열
let hobby = ["youtube", "starcarft", "exercise"];
console.log(hobby);
console.log("hobby[0]", hobby[0]);
console.log("hobby[1]", hobby[1]);
console.log("hobby[2]", hobby[2]);

// 객체 - 리터럴
let MyProfile = {
    MyName: "junho",
    MyAge: 30,
    isStudent: "true",
};
console.log("MyProfile.MyName", MyProfile.MyName);
console.log("MyProfile.MyAge", MyProfile.MyAge);
console.log("MyProfile.isStudent", MyProfile.isStudent);

// typeof 사용
console.log(typeof hobby);
console.log(typeof StringA);
console.log(typeof Youtube);
console.log(null === undefined);




