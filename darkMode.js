const darkModeToggle = document.querySelector('.dark-mode-button');
const darkModeImg = document.querySelector('.dark-mode-button img:nth-child(2)');
const root = document.documentElement;

let flag = false;
console.log(root)
const darkModeEnable = () => {
    root.classList.add('dark-mode');
    // document.body.classList.add('dark-mode');
    darkModeImg.style.display = 'none';
}

const darkModeDisable = () => {
    root.classList.remove('dark-mode')
    // document.body.classList.remove('dark-mode');
    darkModeImg.style.display = 'block';
}

darkModeToggle.addEventListener('click', () => {
    if (flag == true) {
        darkModeDisable();
        flag = false;
    } else {
        darkModeEnable();
        flag = true;
    }
    
})