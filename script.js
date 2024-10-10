function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) 
        {  color += letters[Math.floor(Math.random() * 16)];}
    return color;}

    function changeColor() {const colorBox = document.getElementById('color-box');
        const randomColor = getRandomColor(); 
        colorBox.style.backgroundColor = randomColor;}
        document.getElementById('change-color-btn').onclick = changeColor;
