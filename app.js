// let inp = document.querySelector('input');
// console.dir(inp);
// inp.addEventListener('keydown', function(event) {
//     console.log(key = event.key);
//     console.log(code = event.code);
//     // console.log("Key Pressed");
// })

// function saveToDb(data){
//     return new Promise((success,failure)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             success("success: data saved");
//         }else{
//             failure("failure: weak connection");
//         }
//     });
// }

// saveToDb("apna college")
// .then(()=>{
//     console.log("Promise was resolved!!");
//     // console.log(request);
// })
// .catch(()=>{
//     console.log("Promise rejected!!");
//     // console.log(request);
// })


// async function greet() {
//     // throw "rndm error";
//     return "Hello World!";
// }

// greet()
// .then((result) => {
//     console.log("Problem resolved:", result);
// })
// .catch((error) => {
//     console.log("Promise Rejected:", error)
// });


// let jsonRes = '{"fact":"Cats don\u2019t have sweat glands over their bodies like humans do. Instead, they sweat only through their paws.","length":107}';
// console.log(jsonRes);

// let jsonData = JSON.parse(jsonRes);
// console.log(jsonData);
// console.log(jsonData.fact);


let url = "https://catfact.ninja/fact";

fetch(url)
.then((res) => {
    console.log(res);
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log("Error: ", err);
});