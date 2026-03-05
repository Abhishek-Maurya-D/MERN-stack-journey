// Promises
// the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// function savetoDb(data){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         console.log("Your data was saved : ", data);
//     } else {
//         console.log("Weak connection. data was not saved.");
//     }
// }

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb(
//     "Apna College",
//     () => {
//         console.log("Success : your data was saved.");
//         savetoDb("Hello World", () => {
//             console.log("Success2 : data 2 saved");
//             savetoDb(
//                 "Abhishek Maurya",
//                 () => {
//                     console.log("success3: data 3 saved");
//                 },
//                 () => {
//                     console.log("failure3 : weak connection");
//                 }
//             )
//         }, () => {
//             console.log("failure2 : weak connection");
//         })
//     },
//     () => {
//         console.log("Failure : weak connection, data not saved.");
//     }
// )




// ====================================================================================

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("Success : data was saved");
//         } else {
//             reject("Failure : weak connection");
//         }
//     });
// }

// let request = savetoDb("Abhishek Maurya"); // req = promise object
// request
//     .then(() => {
//         console.log("Promise was resolved");
//         console.log(request);
//     })
//     .catch(() => {
//         console.log("Promise was rejected");
//         console.log(request);
//     });

// promises chanining

// ====== 1  ==========
// savetoDb("apna college")
//     .then(() => {
//         console.log("Data 1 saved.");
//         savetoDb("Hello World").then(() => {
//             console.log("Data 2 saved.");
//         });
//     })
//     .catch(() => {
//         console.log("Promise was rejected.");
//     });

// ============== 2 =================
// savetoDb("apna college")
//     .then(() => {
//         console.log("Data 1 saved.");
//         return savetoDb("Hello World");
//     })
//     .then(() => {
//         console.log("Data 2 saved.");
//         return savetoDb("Abhishek Maurya");
//     })
//     .then(() => {
//         console.log("Data 3 saved.");
//     })
//     .catch(() => {
//         console.log("Promise was rejected.");
//     });

// ========================================
// savetoDb("apna college")
//     .then((result) => {
//         console.log("Data 1 saved.");
//         console.log("result of promise: ", result);
//         return savetoDb("Hello World");
//     })
//     .then((result) => {
//         console.log("Data 2 saved.");
//         console.log("result of promise: ", result);
//         return savetoDb("Abhishek Maurya");
//     })
//     .then((result) => {
//         console.log("Data 3 saved.");
//         console.log("result of promise: ", result);
//     })
//     .catch((error) => {
//         console.log("Promise was rejected.");
//         console.log("error of promise: ", error);
//     });

// ==========================================
// color change using promises
h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color changed!");
        }, delay);
    });
}

// promises chaning
changeColor("red", 1000)
    .then(() => {
        console.log("red color was completed");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("orange color was completed");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("green color was completed");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("blue color was completed");
    })
    .catch(() => {
        console.log("Promise was rejected.");
    });