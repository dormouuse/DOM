//генерую рандомний номер від 1 до 6 
const firstNum = Math.floor(Math.random() * 6) + 1

// генерую зображення від 1 до 6
const firstImage = 'img/dice' + firstNum + '.png'

document.querySelectorAll('img')[0].setAttribute('src', firstImage)

//генерую рандомний номер від 1 до 6 
const secondNum = Math.floor(Math.random() * 6) + 1

// генерую зображення від 1 до 6 
const secondImage = 'img/dice' + secondNum + '.png'

document.querySelectorAll('img')[1].setAttribute('src', secondImage)

//переможець

let winner = document.getElementById("win");

// обирається який текст вивести
if (firstNum > secondNum){
    winner.innerText = "The Winner is Player 1";
} else if (firstNum < secondNum){
    winner.innerText = "The Winner is Player 2";
} else {
    winner.innerText = "It`s a Draw!";
}