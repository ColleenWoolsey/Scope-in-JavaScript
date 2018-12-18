// C is for Cookie
// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1
// for (let x = 1; y < cookies.length; x++) {
//     const currentCookie = cookies[y]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

// C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"];

for (let y = 0; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}


// Conjunction Function
// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
// }
// conjunction("Master", "Card")
// console.log(conjoinedWord)

// Conjunction Function
const conjunction = function (firstWord, secondWord) {
    let conjoinedWord = `${firstWord} ${secondWord}`;
    console.log(conjoinedWord)
}
conjunction("Master", "Card")


// Mod Squad
// {
//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }
//     const HTMLRepresentation = `<h1>The Mod Squad</h1>`
//     ModSquad.members.forEach(member => {
//         const HTMLRepresentation += `<div>${member}</div>`
//     })
// }
// document.querySelector(".show-info").innerHTML = HTMLRepresentation

// Mod Squad{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }
    
    let HTMLRepresentation = document.querySelector(".show-info");
    let HTMLRepresent = `<h1>The Mod Squad</h1>`;
    ModSquad.members.forEach(member => {
        HTMLRepresent += `<div>${member}</div>`;
    })
    HTMLRepresentation.innerHTML = HTMLRepresent;
    console.log(HTMLRepresentation);



// Simon Says

// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// for (let k = 0; k < locations.length; k++) {
//     const currentLocation = locations[k]
//     if (currentLocation[0] > 2) {
//         const invalidLocation = true
//     }
//     if (invalidLocation) {
//         console.log("This location is invalid")
//     }
// }
// console.log(`There were ${k} invalid locations`)

// Simon Says
// There are two separate scoping issues in this code. Remember,
// for and if are their own block scopes and if something is declared
// with let or const then that variable only exists in that scope.
/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
const invalidLocation = [];
const k = invalidLocation.length;
const j = locations.length - invalidLocation.length
for (let i = 0; i < locations.length; i++) {
    let currentLocation = locations[i]
    if (currentLocation[0] > 2) {
        let invalidLocation = true;
        console.log(`${locations[i]} is invalid`);
    } else {
        invalidLocation.push("false");
        console.log(`${locations[i]} is valid`);    
    }
}
    console.log(`There were ${k} invalid locations where the first item in the array was > 2`)
    console.log(`There were ${j} valid locations where currenLocation[0] was > 2`)


// Advanced Challenge: Lambda Llama

// const llamaNamer = function () {
//     const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
//     const randomizer = Math.floor(Math.random() * 7)
//     const namer = function () {
//         const suffix = " the Llama"
//         const name = possibleNames[randomizer]
//     }
//     return name + suffix
// }
// nameMaker = llamaNamer()
// console.log(nameMaker())


// Advanced Challenge: Lambda Llama
// Not only can functions take other functions as arguments, but functions
// can also return functions! This is marked as an advanced challenge
// because you haven't been introduced to this concept yet.

// The llamaNamer function defines an internal function and your job
// is to rewrite this code so that the internal function gets returned.

const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"];
const suffix = " the Llama";
const llamaNamer = function () {
    const randomizer = Math.floor(Math.random() * 7);
   
    const namer = function () {
        let name = possibleNames[randomizer];
        return name;
    }      
    //console.log(namer());
    return namer() + suffix;
}
console.log(llamaNamer())