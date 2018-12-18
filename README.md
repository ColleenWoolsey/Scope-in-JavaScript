Scope Exercises
Some software developers were contracted to build some code, but there weren't quite clear yet on how scope works. Your job is to fix their code to stop all the errors from being thrown.

C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 1; y < cookies.length; x++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}
Conjunction Function
const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
}

conjunction("Master", "Card")
console.log(conjoinedWord)
Mod Squad
{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    const HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        const HTMLRepresentation += `<div>${member}</div>`
    })
}

document.querySelector(".show-info").innerHTML = HTMLRepresentation
Simon Says
There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        const invalidLocation = true
    }

    if (invalidLocation) {
        console.log("This location is invalid")
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${k} invalid locations`)
Advanced Challenge: Lambda Llama
Not only can functions take other functions as arguments, but functions can also return functions! This is marked as an advanced challenge because you haven't been introduced to this concept yet.

The llamaNamer function defines an internal function and your job is to rewrite this code so that the internal function gets returned.

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
    }

    return name + suffix
}

nameMaker = llamaNamer()
console.log(nameMaker())