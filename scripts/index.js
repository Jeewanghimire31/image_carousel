
// declaring variables
const container = document.querySelector(".container");
const carouselImage = document.querySelector(".carousel_image");

const image = document.querySelectorAll(".image");
console.log(image);

const carouselNav = document.querySelector(".carousel_navigation");

const buttonLeft = document.querySelector("#button_left");
const buttonRight = document.querySelector("#button_right");


let image_number = image.length;
let position = 0;
let index_interval = 0;
let image_width = 650;
// console.log(image_number);


// creating each navigation(circle) in each number of image.
image.forEach((data, index)=>{
    const navigation_add = document.createElement("span");
    navigation_add.classList.add("carousel_nav");
    carouselNav.appendChild(navigation_add);

    // default active for first image
    if (index === 0) {
        navigation_add.classList.add("carousel_button_selected");
    }

    navigation_add.addEventListener('click', ()=>{
        // console.log(image[index]);
        setPosition(index);
        updateNavigation(index);
        resetInterval();
    });
});

// setting image position to shift
const setPosition = (index)=>{
    position = -index * image_width;

    // console.log(index);
    carouselImage.style.left=position+"px";
};

const updateNavigation = (index) => {
    const navigationCircle = document.querySelectorAll(".carousel_nav");
    navigationCircle.forEach((dot, dotIndex) => {
        if (dotIndex === index) {
            dot.classList.add("carousel_button_selected");
        } else {
            dot.classList.remove("carousel_button_selected");
        }
    });
};


// function to work for image silde in each button click
buttonRight.addEventListener('click', () => {
    index_interval = (index_interval + 1) % image_number;
    setPosition(index_interval);
    updateNavigation(index_interval);
    resetInterval();
});

buttonLeft.addEventListener('click', () => {
    index_interval = (index_interval - 1 + image_number) % image_number;
    setPosition(index_interval);
    updateNavigation(index_interval);
    resetInterval();
});




// function to change the position of the carousel at regular intervals
const changeCarouselPosition = () => {
    position = (position - image_width) % (image_number * image_width);
    carouselImage.style.left = position + "px";
};

// set interval
 interval = setInterval(changeCarouselPosition, 5000);

 
const resetInterval =()=> {
    clearInterval(interval);
    interval = setInterval(changeCarouselPosition, 5000);
}








