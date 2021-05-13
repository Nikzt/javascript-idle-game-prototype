const resourceView = document.getElementById("resource-view")
const resourceList = document.createElement("ul")
const resourceListItemA = document.createElement("li")
resourceListItemA.textContent = "A: 0"
const resourceListItemB = document.createElement("li")
resourceListItemB.textContent = "B: 0"

resourceView.appendChild(resourceList)
resourceList.appendChild(resourceListItemA)
resourceList.appendChild(resourceListItemB)

let resourceA = 0;
let resourceB = 0;

/**
 * Sets the value of resource A to the specified number,
 * and updates the text content of the resource A display
 * @param {number} newResourceAValue the value of resource A
 */
function updateResourceA(newResourceAValue) {
    resourceA = newResourceAValue 
    resourceListItemA.textContent = `A: ${resourceA}`

}

/**
 * Sets the value of resource B to the specified number,
 * and updates the text content of the resource B display
 * @param {number} newResourceBValue the value of resource B
 */
function updateResourceB(newResourceBValue) {
    resourceB = newResourceBValue 
    resourceListItemB.textContent = `B: ${resourceB}`

}

const addOne = (a) => a + 1

const resourceGeneratorView = document.getElementById("resource-generators-view")
const resourceGeneratorsList = document.createElement("ul")
const resourceGeneratorAItem = document.createElement("li")
resourceGeneratorAItem.textContent = "A Generators: 0"
const resourceGeneratorBItem = document.createElement("li")
resourceGeneratorBItem.textContent = "B Generators: 0"

resourceGeneratorView.appendChild(resourceGeneratorsList)
resourceGeneratorsList.appendChild(resourceGeneratorAItem)
resourceGeneratorsList.appendChild(resourceGeneratorBItem)

let resourceGeneratorsA = 0;
let resourceGeneratorsB = 0;

function updateResourceGeneratorA(newResourceGeneratorAValue) {
    resourceGeneratorsA = newResourceGeneratorAValue;
    resourceGeneratorAItem.textContent = "A Generators: " + newResourceGeneratorAValue
}

function updateResourceGeneratorB(newResourceGeneratorBValue) {
    resourceGeneratorsB = newResourceGeneratorBValue;
    resourceGeneratorBItem.textContent = "B Generators: " + newResourceGeneratorBValue
}

document.getElementById("plus-one-a-button")
    .addEventListener("click", () => updateResourceA(addOne(resourceA)), false)
document.getElementById("plus-one-b-button")
    .addEventListener("click", () => { 
        if (resourceA >= 5){
        updateResourceA(resourceA - 5)
        updateResourceB(resourceB + 1)}
        else alert('Not enough Resource A!')
    }, false)
document.getElementById("plus-one-a-gen-button")
    .addEventListener("click", () => {
        if (resourceA >= 50) {
            updateResourceGeneratorA(resourceGeneratorsA + 1)
            updateResourceA(resourceA - 50)
        } else {
            alert("not enough vespene gas")
        }
    }, false)
document.getElementById("plus-one-b-gen-button")
    .addEventListener("click", () => {
        if (resourceB >= 100) {
            updateResourceGeneratorB(resourceGeneratorsB + 1)
            updateResourceB(resourceB - 100)
        } else {
            alert("not enough gay monkey cum")
        }
    }, false)
   
setInterval(() => updateResourceA(resourceA + resourceGeneratorsA), 60000)
setInterval(() => updateResourceB(resourceB + resourceGeneratorsB), 60000)