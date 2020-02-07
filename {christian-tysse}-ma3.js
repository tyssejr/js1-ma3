//question 1 

 const divide = (a, b) => (a - b);
console.log(divide(4, 3));

//question 2

 const GetUrl = "https://api.rawg.io/api/games?genres=sports";

 fetch(GetUrl)
     .then(function (response) {
         return response.json();
     })
     .then(function (json) {
         for (let i = 0; i < json.results.length; i++) {
             console.log(json.results[i].name);
         }
     })
     .catch(function (error) {
         window.location.href = "error.html";
     });
//question 3

const getTag = document.querySelector("p").innerHTML;

const replacer = getTag.replace("cats", "giraffes");

document.querySelector("p").innerHTML = replacer;

//question 4
/*
when it was active i ended up on another page and coud not se the other logs i was doing

const getqString = document.location.search;
const params = new URLSearchParams(getqString);

let userId;

if(params.has(userId)){
    userId = params = get("userId");
}

if(userId < 10) {
    document.location.href ="first.html";
} 
else if(userId >= 10){
    document.location.href= "second.html";
}
else{
    document.location.href = "third.html";
} */

//question 5

const container = document.querySelector(".container");
const button = document.querySelector(".btn");
container.removeChild(button);

//question 6

const animal = document.querySelector(".animals");
const createList = document.createElement("li");

createList.className = "parrot";
createList.innerText = "parrot";
animal.appendChild(createList);
const elephant = document.querySelector(".elephants");
elephant.before(createList);


//question 7
    
fetch("https://api.rawg.io/api/games/3801")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
       document.querySelector(".rating").innerText = json.rating;
    })
    .catch(function (error) {
        console.log(error);
    });

    