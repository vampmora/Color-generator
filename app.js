const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', ()=>{
    const r = Math.floor(Math.random()* 256);
    const g = Math.floor(Math.random()* 256);
    const b = Math.floor(Math.random()* 256);
    const newColors = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor= newColors;
    h1.innerText = newColors;
});