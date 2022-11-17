'use strict'
const container = document.querySelector('.container');
const btnPlay = document.querySelector('button#play');
let difficultyLevel;
let bombElement;



// bottone per far comparire la griglia
btnPlay.addEventListener('click', function () {
    container.innerHTML = '';
    console.clear();
    difficultyLevel = document.querySelector('#difficulty-level').value;
    let index;


    if (difficultyLevel === 'easy') {
        index = 100;
    } else if (difficultyLevel === 'medium') {
        index = 81;
    } else if (difficultyLevel === 'hard') {
        index = 49;
    }
    bombElement = createArrayNum(16, 1, index);


    for (let i = 0; i < index; i++) {
        // crea l'elemento div
        let boxNumerato = createBox();
        // lo numera
        boxNumerato.innerHTML = `${i + 1}`;
        // aggiunge la classe box
        boxNumerato.classList.add(`box`);
        boxNumerato.classList.add(`box-${i}`);
        if (difficultyLevel === 'easy') {
            boxNumerato.classList.add('easy');
        } else if (difficultyLevel === 'medium') {
            boxNumerato.classList.add('medium');
        } else if (difficultyLevel === 'hard') {
            boxNumerato.classList.add('hard');
        };

        // bottone che cambia il colore
        boxNumerato.addEventListener('click', function () {
            if (bombElement.includes(i + 1)) {
                this.classList.add('bomb');
            }
        })
        container.appendChild(boxNumerato)
    };
});


// FUNZIONI
function createBox() {
    const divBox = document.createElement('div');

    return divBox
}

function randomNumber(min, max) {
    let randomNum = Math.floor(Math.random() * ((max + 1) - min) + min);
    return randomNum
}

function createArrayNum(numPossibility, minNum, maxNum) {
    let arrayNumb = [];
    while (arrayNumb.length < numPossibility) {
        let randomNumForArray = randomNumber(minNum, maxNum);
        if (!arrayNumb.includes(randomNumForArray))
            arrayNumb.push(randomNumForArray);

    }
    return arrayNumb;
};

