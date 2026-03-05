let url = `https://catfact.ninja/fact`;

fetch(url) // returns promise
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log("data1 = ", data.fact);
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log("Data2 = ", data2.fact);
    })
    .catch((err) => {
        console.log("Error - ", err);
    });



// api -> with async & await
async function getFacts() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);        
    } catch(e) {
        console.log("Error -", e);
    }
    console.log("Bye");
}