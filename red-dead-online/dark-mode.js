function toggleDarkMode(){

document.body.classList.toggle('light-mode');

localStorage.setItem(
'darkmode',
document.body.classList.contains('light-mode')
);

}

window.onload = () => {

const saved =
localStorage.getItem('darkmode');

if(saved === 'true'){
document.body.classList.add('light-mode');
}

};
