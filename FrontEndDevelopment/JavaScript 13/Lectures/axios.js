// Axios 
// library to make HTTP requests

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
})

async function getImage() {
    try{
        let res = await axios.get(url2);
        return res.data.message;
    } catch(e) {
        console.log("error - ", e);
        return "/";
    }
}



// 2

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(e) {
//         console.log("error - ", e);
//         return "No fact found";
//     }
// }



// Api with header
const url3 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url3, config);
        console.log(res.data);
    } catch(err){
        console.log(err);
    }
}
