const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slide");
const dotts = document.querySelectorAll(".overlay__list_item");
const dottsArray = Array.from(dotts);

let number = 0;

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