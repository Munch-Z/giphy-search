//DOM interaction

let buttonsDiv = document.getElementById('buttons');
let submitBtn = document.getElementById('submitBtn');
let gifsDiv = document.getElementById('gifs');
let addButton = document.getElementById('addButton');

let buttonsClick = document.querySelectorAll('.buttonStyles');

let gifsClick = document.querySelectorAll('.gifStyles');

//array

let topics = ['Messin', 'Sad', 'Happy', 'Excited', 'Horrified', 'Zach Galifinakis', 'Funny', 'Nervous', 'Nature', 'Angry'];

function makeButtons (arr){
    for(let i = 0; i < arr.length; i++){
        let button = document.createElement('button');

        button.value = arr[i];
        button.textContent = arr[i];
        button.classList.add('buttonStyles');

        buttonsDiv.appendChild(button);
    }
}

makeButtons(topics);