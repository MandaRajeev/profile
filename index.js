let lightEl = document.getElementById('light')
let containerEl = document.getElementById("container");

lightEl.addEventListener('click', () => {
    containerEl.classList.toggle('app-container')
})