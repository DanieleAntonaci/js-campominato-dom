'use strict'
const container = document.querySelector('.container');
const btnPlay = document.querySelector('button#play');
let difficultyLevel;
let arrayNumb = [];


// bottone per far comparire la griglia
btnPlay.addEventListener('click', function () {
    container.innerHTML = '';
    console.clear();
    difficultyLevel = document.querySelector('#difficulty-level').value;
    let index


    if (difficultyLevel === 'easy') {
        index = 100;
    } else if (difficultyLevel === 'medium') {
        index = 81;
    } else if (difficultyLevel === 'hard') {
        index = 49;
    }


    for (let i = 0; i < index; i++) {
        // crea l'elemento div
        let boxNumerato = createBox();
        // lo numera
        boxNumerato.innerHTML = `${i + 1}`;
        // aggiunge la classe box
        boxNumerato.classList.add('box');
        if (difficultyLevel === 'easy') {
            boxNumerato.classList.add('easy');
        } else if (difficultyLevel === 'medium') {
            boxNumerato.classList.add('medium');
        } else if (difficultyLevel === 'hard') {
            boxNumerato.classList.add('hard');
        }

        // bottone che cambia il colore
        boxNumerato.addEventListener('click', function () {
            this.classList.add('clicked')
            console.log(`Hai selzionato la casella ${i + 1}`);
        })
        container.appendChild(boxNumerato)
    };
});

// FUNZIONI
function createBox() {
    const divBox = document.createElement('div');

    return divBox
}

function randomNumber() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    return randomNum
}

function createArrayNum() {
    while (arrayNumb.length < 16) {
        let randomNumForArray = randomNumber();
        if (!arrayNumb.includes(randomNumForArray))
            arrayNumb.push(randomNumForArray);

    }
    return arrayNumb;
};

function boxSelectWithArray(numBox) {

}