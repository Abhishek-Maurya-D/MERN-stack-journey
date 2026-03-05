// json => js

let jsonRes = `{"fact":"A cat's field of vision is about 200 degrees.","length":45}`;

let validRes = JSON.parse(jsonRes);

console.log(validRes.fact);


// JS => JSON

let student = {
    name: "Abhishek Maurya",
    marks: 85,
};

let jsonData = JSON.stringify(student);
console.log(jsonData);