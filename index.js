


let totalCount = document.getElementById("passengerCount")
let savedCount = document.getElementById("save-el")

let count = 0;
function increment() {
    count += 1
    totalCount.textContent = count  
}

function save() {
    let countStr = count + ", "
    savedCount.textContent += countStr
    totalCount.textContent = 0
    count = 0
}