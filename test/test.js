const jsonString3 = `{
    "name": "지민",
    "age": 22
}`;
const jsonObj3 = JSON.parse(jsonString3);
console.log("jsonObj3", jsonObj3); // { name: '지민', age: 22 }

const jsonObj3String = JSON.stringify(jsonObj3);
console.log("jsonObj3String", jsonObj3String); // '{"name":"지민","age":22}'