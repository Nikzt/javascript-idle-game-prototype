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