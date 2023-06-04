let countEl = document.getElementById("count-el");
let saveEl = document.getElementById('save-el')

let count = 0;
function increment() {
    countEl.textContent = ++count;
}

function save() {
    saveEl.textContent += `${countEl.innerText} - `
    count = 0;
    countEl.textContent = count;
}

// let welcomeEl = document.getElementById("welcome-el")
// let name = 'AP'
// let greeting = 'Welcome back '
// welcomeEl.innerText = greeting + name
// welcomeEl.innerText += ' 👋'