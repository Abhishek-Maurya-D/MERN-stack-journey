async function greet() {
    throw "some random error"; // returns a promise
    return "Hello";
}

greet()
    .then((result) => {
        console.log("Promise was resolved");
        console.log("result was : ", result);
    })
    .catch((err) => {
        console.log("Promise was rejected with err : ", err);
    })

let deom = () => {
    return 5;
}