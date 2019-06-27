//DOM interaction

let buttonsDiv = document.getElementById('buttons');
let submitBtn = document.getElementById('submitBtn');
let gifsDiv = document.getElementById('gifs');
let addButton = document.getElementById('addButton');

let buttonsClick = document.querySelectorAll('.buttonStyles');

let gifsClick = document.querySelectorAll('.gifStyles');

//array

let topics = ['Messin', 'Sad', 'Happy', 'Excited', 'Horrified', 'Zach Galifinakis', 'Funny', 'Nervous', 'Nature', 'Angry'];

function makeButtons(arr) {
    for (let i = 0; i < arr.length; i++) {
        let button = document.createElement('button');

        button.value = arr[i];
        button.textContent = arr[i];
        button.classList.add('buttonStyles');

        buttonsDiv.appendChild(button);
    }
}

function queryGiphy (value){
    let apiKey = 'Vh31uI0oj8Okq5Ta1Gvn85LtomDftORM';
    
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${value}&rating=G&lang=en&limit=10`, {
        method: 'GET'
    }).then(function(response){
        return response.json();
    }).then(function(myJson){
        console.log(myJson);
    })
}

function updateGifs (obj){
    for(let i = 0; i < obj.length; i++){
        
    }
}




queryGiphy('dogs');


makeButtons(topics);