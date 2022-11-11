const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slide");
const dotts = document.querySelectorAll(".overlay__list_item");
let number = 1;

const nonActiveDott = '<svg class="dott"><use href="./images/sprite.svg#icon-Ellipse" /></svg>';
const activeDott = '<svg class="active"><use href="./images/sprite.svg#icon-EllipseBig"/></svg>';

// dotts.map((el, i) => {
//     el.insertAdjacentHTML('beforeend', activeDott);
// })

// console.log(dotts.ToArray)
arrowRight.addEventListener("click", () => {
    if(number == 5){
        slides[number - 1].classList.add("hidden");
        dotts[number - 1].textContent = "";
        dotts[number - 1].classList.remove("item--active");
        number = 1;
        slides[number - 1].classList.remove("hidden");
        dotts[number - 1].insertAdjacentHTML('beforeend', activeDott);
        dotts[number - 1].classList.add("item--active");
        // console.log(slides[number - 1]);
    }else{
        slides[number - 1].classList.add("hidden");
        dotts[number - 1].textContent = "";
        dotts[number - 1].classList.remove("item--active");
        number++;
        slides[number - 1].classList.remove("hidden");
        dotts[number - 1].insertAdjacentHTML('beforeend', activeDott);
        dotts[number - 1].classList.add("item--active");
        // console.log(slides[number - 1]);
    }

})



arrowLeft.addEventListener("click", () => {
    if(number == 1){
        
        slides[number - 1].classList.add("hidden");
        dotts[number - 1].textContent = "";
        dotts[number - 1].classList.remove("item--active");
        number = 5;
        slides[number - 1].classList.remove("hidden");
        dotts[number - 1].insertAdjacentHTML('beforeend', activeDott);
        dotts[number - 1].classList.add("item--active");
        // console.log(slides[number - 1]);
    }else{
        slides[number - 1].classList.add("hidden");
        dotts[number - 1].textContent = "";
        dotts[number - 1].classList.remove("item--active");
        number--;
        slides[number - 1].classList.remove("hidden");
        dotts[number - 1].insertAdjacentHTML('beforeend', activeDott);
        dotts[number - 1].classList.add("item--active");
        // console.log(slides[number - 1]);
        
        
    }
    
    
})

// slides.map((el, i) => {})