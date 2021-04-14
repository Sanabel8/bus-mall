'use script';
let container = document.getElementById('images');

let leftImageElement = document.getElementById('left-img');
let middleImageElement = document.getElementById('middle-img');
let rightImageElement = document.getElementById('right-img');


//num of attempt
let maxAttempts = 10;
//counters
let userAttemptsCounter = 0;
//decleared img
let leftImageIndex;
let middleImageIndex;
let rightImageIndex;

let namesArr = [];
let votesArr = [];
let shownArr = [];



//Pascal
function Pictuer(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shown = 0;
    Pictuer.allPictures.push(this);
    namesArr.push(this.name);

}
Pictuer.allPictures = [];


//instantces
new Pictuer('bag.jpg', 'images/bag.jpg');
new Pictuer('banana.jpg', 'images/banana.jpg');
new Pictuer('bathroom.jpg', 'images/bathroom.jpg');
new Pictuer('boots.jpg', 'images/boots.jpg');
new Pictuer('breakfast.jpg', 'images/breakfast.jpg');
new Pictuer('bubblegum.jpg', 'images/bubblegum.jpg');
new Pictuer('chair.jpg', 'images/chair.jpg');
new Pictuer('cthulhu.jpg', 'images/cthulhu.jpg');
new Pictuer('dog-duck.jpg', 'images/dog-duck.jpg');
new Pictuer('dragon.jpg', 'images/dragon.jpg');
new Pictuer('pen.jpg', 'images/pen.jpg');
new Pictuer('pet-sweep.jpg', 'images/pet-sweep.jpg');
new Pictuer('scissors.jpg', 'images/scissors.jpg');
new Pictuer('shark.jpg', 'images/shark.jpg');
new Pictuer('sweep.png', 'images/sweep.png');
new Pictuer('wine-glass.jpg', 'images/wine-glass.jpg');
new Pictuer('usb.gif', 'images/usb.gif');
new Pictuer('tauntaun.jpg', 'images/tauntaun.jpg');
new Pictuer('water-can.jpg', 'images/water-can.jpg');
new Pictuer('unicorn.jpg', 'images/unicorn.jpg');




function generateRandomIndex() {
    return Math.floor(Math.random() * Pictuer.allPictures.length);
}
console.log(generateRandomIndex());

let imagArr = [];


function renderThreeImages() {

    leftImageIndex = generateRandomIndex();
    middleImageIndex = generateRandomIndex();
    rightImageIndex = generateRandomIndex();

    //||
    while (leftImageIndex === middleImageIndex || leftImageIndex === rightImageIndex || middleImageIndex === rightImageIndex ||imagArr.includes(leftImageIndex) ||imagArr.includes(middleImageIndex)||imagArr.includes(rightImageIndex)) {
        middleImageIndex = generateRandomIndex();
        leftImageIndex = generateRandomIndex();
        rightImageIndex = generateRandomIndex();

    }


    imagArr = [leftImageIndex, middleImageIndex, rightImageIndex];
    console.log(imagArr);


    leftImageElement.src = Pictuer.allPictures[leftImageIndex].source;
    Pictuer.allPictures[leftImageIndex].shown++;

    middleImageElement.src = Pictuer.allPictures[middleImageIndex].source;
    Pictuer.allPictures[middleImageIndex].shown++;

    rightImageElement.src = Pictuer.allPictures[rightImageIndex].source;
    Pictuer.allPictures[rightImageIndex].shown++;



}

renderThreeImages();



//handele clicking
container.addEventListener('click', handleUserClick);

function handleUserClick(event) {
    console.log(event.target.id);
    userAttemptsCounter++;

    //add to attempts
    if (userAttemptsCounter <= maxAttempts) {


        if (event.target.id === 'left-img') {
            Pictuer.allPictures[leftImageIndex].votes++;
        } else if (event.target.id === 'middle-img') {
            Pictuer.allPictures[middleImageIndex].votes++;

        } else if (event.target.id === 'right-image') {
            Goat.allGoats[rightImageIndex].votes++;
            Pictuer.allPictures[rightImageIndex].votes++;

        } else {
            userAttemptsCounter--;
        }

        renderThreeImages();

    } else {


        let button = document.getElementById('button');

        button.addEventListener('click', showingList);
        button.hidden = false;

        for (let i = 0; i < Pictuer.allPictures.length; i++) {

            votesArr.push(Pictuer.allPictures[i].votes);
            shownArr.push(Pictuer.allPictures[i].shown);

        }
        console.log(votesArr);

        // show the chart
        chart();

        //  remove event listener

        container.removeEventListener('click', handleUserClick);
    }
}






//renderThreeImages();



//
function showingList() {

    let list = document.getElementById('resultes-lists');
    let pictureResulte;


    for (let i = 0; Pictuer.allPictures.length; i++){
        pictureResulte = document.createElement('li');
    list.appendChild(pictureResulte);
    pictureResulte.textContent = `${Pictuer.allPictures[i].name} has ${Pictuer.allPictures[i].votes} votes ,and was seen ${Pictuer.allPictures[i].shown} times`

    }


    button.removeEventListener('click', showing);

}





// chart.js
function chart() {
    let ctx = document.getElementById('myChart').getContext('2d');

    let chart = new Chart(ctx, {
        // what type is the chart
        type: 'bar',

        //  the data for showing
        data: {
            //  for the names
            labels: namesArr,

            datasets: [
                {
                    label: 'Picture votes',
                    data: votesArr,
                    backgroundColor: [
                        'white',
                    ],

                    borderWidth: 1
                },

                {
                    label: 'Picture shown',
                    data: shownArr,
                    backgroundColor: [
                        'firebrick',
                    ],

                    borderWidth: 1
                }

            ]
        },
        options: {}
    });

}
















