//DOM interaction

let buttonsDiv = document.getElementById('buttons');
let submitBtn = document.getElementById('submitBtn');
let gifsDiv = document.getElementById('gifs');
let addButton = document.getElementById('addButton');

//array

let topics = ['Messin', 'Sad', 'Happy', 'Excited', 'Horrified', 'Zach Galifinakis', 'Funny', 'Nervous', 'Nature', 'Angry'];

function makeButtons(arr) {

    buttonsDiv.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        let button = document.createElement('button');

        button.value = arr[i];
        button.textContent = arr[i];
        button.classList.add('buttonStyles');

        buttonsDiv.appendChild(button);
    }
}

function queryGiphy(value) {
    let apiKey = 'Vh31uI0oj8Okq5Ta1Gvn85LtomDftORM';
    let searchTerm = value.replace(/\u0020/g, '+');


    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&lang=en&limit=10`, {
        method: 'GET'
    }).then(function (response) {
        return response.json();
    }).then(function (myJson) {
        updateGifs(myJson);
    })
}

function updateGifs(obj) {

    for (let i = 0; i < obj.data.length; i++) {

        let stillImage = obj.data[i].images.original_still.url;
        let gif = obj.data[i].images.original.url;
        let rating = obj.data[i].rating;
        let altText = obj.data[i].title;

        let newDiv = document.createElement('div');

        newDiv.innerHTML = `<img class="gifStyles"  src="${stillImage}" alt="${altText}" data-alt="${gif}">
        <div class="text-wrapper">Rating: ${rating.toUpperCase()}</div>`;

        gifsDiv.appendChild(newDiv);

    }
}

buttonsDiv.addEventListener('click', function (event) {

    if (!event.target.matches('.buttonStyles')) {
        return;
    } else {
        queryGiphy(event.target.value);
    }
})

gifsDiv.addEventListener('click', function (event) {

    let gifRunning = false;

    if (!event.target.matches('.gifStyles')) {
        return;
    } else {
        let src = event.target.src;
        if (!gifRunning) {
            gifRunning = true;
            event.target.src = event.target.dataset.alt;
            event.target.dataset.alt = src;
        } else {
            gifRunning = true;
            event.target.src = event.target.dataset.alt;
            event.target.dataset.alt = src;
        }
    }
})

submitBtn.addEventListener('click', function (event) {

    event.preventDefault();

    let userInput = document.getElementById('addButton').value;

    if (userInput !== '') {
        topics.push(userInput);
        makeButtons(topics);
    }

    document.getElementById('addButton').value = '';
})



makeButtons(topics);