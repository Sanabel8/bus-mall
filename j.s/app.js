'use script';
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

function Pictuer(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shown = 0;

    Pictuer.allPictures.push(this);

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


console.log(Pictuer.allPictures);


function generateRandomIndex() {
    return Math.floor(Math.random() * Pictuer.allPictures.length);
}
console.log(generateRandomIndex());



function renderThreeImages() {
    leftImageIndex = generateRandomIndex();
    middleImageIndex = generateRandomIndex();
    rightImageIndex = generateRandomIndex();

    //||
    while (leftImageIndex === middleImageIndex || leftImageIndex === rightImageIndex || middleImageIndex === leftImageIndex) {
        middleImageIndex = generateRandomIndex();
        rightImageIndex = generateRandomIndex();
        leftImageIndex = generateRandomIndex();

    }
    console.log(Pictuer.allPictures[leftImageIndex].source);
    console.log(Pictuer.allPictures[middleImageIndex].source);
    console.log(Pictuer.allPictures[rightImageIndex].source);




    leftImageElement.src = Pictuer.allPictures[leftImageIndex].source;
    middleImageElement.src = Pictuer.allPictures[middleImageIndex].source;
    rightImageElement.src = Pictuer.allPictures[rightImageIndex].source;

}

renderThreeImages();

//handele clicking
let imagesElement = document.getElementById('show-results');
imagesElement.addEventListener('click', handleUserClick);

function handleUserClick(event) {
    console.log(event.target.id);
    userAttemptsCounter++;

    //add to attempts
    if (userAttemptsCounter <= maxAttempts) {

        if (event.target.id === 'left-img') {
            Pictuer.allPictures[leftImageIndex].votes++;
            //    Pictuer.allPictures[leftImageIndex].shown++;
          //  shown++;

        } else if (event.target.id === 'middle-img') {
            Pictuer.allPictures[middleImageIndex].votes++;
            //  Pictuer.allPictures[middleImageIndex].shown++;
           // shown++;


        } else {
            Pictuer.allPictures[rightImageIndex].votes++;
            //   Pictuer.allPictures[rightmageIndex].shown++;
           // shown++;

        }

        renderThreeImages();

    } else {
        let list = document.getElementById('resultes-lists');

        let pictureResulte;

        for (let i = 0; Pictuer.allPictures.length; i++) {

            pictureResulte = document.createElement('li');
            list.appendChild(pictureResulte);
            pictureResulte.textContent = `${Pictuer.allPictures[i].name} has ${Pictuer.allPictures[i].votes} votes ,and was seen ${Pictuer.allPictures[i].shown} times`


        }


        //remove event listner

        imagesElement.removeEventListener('click', handleUserClick);
    }



}

















