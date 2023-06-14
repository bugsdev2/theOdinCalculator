const darkModeToggle = document.querySelector('.dark-mode-button');
const darkModeImg = document.querySelector('.dark-mode-button img:nth-child(2)');
let darkMode = false;
console.log(darkModeImg.style.display)
const darkModeEnable = () => {
    document.body.classList.add('dark-mode');
    darkModeImg.style.display = 'none';
}

const darkModeDisable = () => {
    document.body.classList.remove('dark-mode');
    darkModeImg.style.display = 'block';
}

darkModeToggle.addEventListener('click', () => {
    if (darkMode == true) {
        darkModeDisable();
        darkMode = false;
    } else {
        darkModeEnable();
        darkMode = true;
    }
    
})