const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slide");
const dotts = document.querySelectorAll(".overlay__list_item");
const dottsArray = Array.from(dotts);

let number = 0;

let elipseIcon = new Image;

elipseIcon.src = 'data:image/svg+xml;base64,' + btoa('<svg version="1.2" width="5.64mm" height="5.64mm" viewBox="0 0 564 564" stroke-width="28.222" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="id3" transform="translate(125 125)"><path fill="rgb(0,102,204)" stroke="none" d="M 380,246 C 380,255 376,263 369,269 362,276 355,279 346,279 L 253,279 C 253,290 257,304 266,321 274,339 279,353 279,364 279,381 276,394 270,402 264,410 253,414 236,414 232,410 228,402 226,392 224,381 222,370 218,359 215,347 210,338 203,330 199,326 137,249 134,247 130,246 110,246 110,246 L 110,77 C 110,77 124,77 127,77 130,76 160,67 164,66 168,64 239,44 262,44 L 294,44 C 327,44 336,64 344,88 345,91 380,240 380,246 Z M 413,246 C 413,230 384,108 382,98 377,86 370,45 355,31 340,17 320,10 296,10 L 262,10 C 245,10 228,12 212,16 195,20 176,26 155,33 134,40 122,44 118,44 118,44 21,47 15,54 8,60 9,267 16,274 22,280 115,279 115,279 121,284 170,345 179,354 183,358 193,398 196,410 200,421 205,431 213,438 220,445 227,448 236,448 251,448 264,445 276,439 288,434 297,425 303,413 309,400 312,384 312,364 312,347 308,330 300,313 L 346,313 C 364,313 380,306 393,293 407,280 413,264 413,246 Z"/></g></svg>');

const nonActiveDott = '<svg class="dott"><use href="./images/sprite.svg#icon-Ellipse" /></svg>';
const activeDott = '<svg class="active dott"><use href="./images/sprite.svg#icon-EllipseBig"/></svg>';

dottsArray.map((el, i) => {
    i == 0 ? el.insertAdjacentHTML('beforeend', activeDott) : el.insertAdjacentHTML('beforeend', nonActiveDott);
})

arrowRight.addEventListener("click", () => {
    if(number == 4){
        changePreviousDott();
        number = 0;
        changeCurrentDott();
    }else{
        changePreviousDott();
        number++;
        changeCurrentDott();
    }

})

arrowLeft.addEventListener("click", () => {
    if(number == 0){
        changePreviousDott();
        number = 4;
        changeCurrentDott();

    }else{
        changePreviousDott();
        number--;
        changeCurrentDott();
    }
    
    
})

function changePreviousDott(){
    slides[number].classList.add("hidden");
    dottsArray[number].innerHTML = " ";
    dottsArray[number].insertAdjacentHTML('beforeend', nonActiveDott);
    dottsArray[number].classList.remove("item--active");
}

function changeCurrentDott(){
    slides[number].classList.remove("hidden");
    dottsArray[number].innerHTML = " ";
    dottsArray[number].insertAdjacentHTML('beforeend', activeDott);
    dottsArray[number].classList.add("item--active");
}