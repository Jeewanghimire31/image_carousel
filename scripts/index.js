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
console.log(image_number);


image.forEach((data, index)=>{
    const navigation_add = document.createElement("span");
    navigation_add.classList.add("carousel_nav");
    carouselNav.appendChild(navigation_add);

    // default active for first image
    if (index === 0) {
        navigation_add.classList.add("carousel_button_selected");
    }

    navigation_add.addEventListener('click', ()=>{
        console.log(image[index]);
        setPosition(index);
        updateNavigation(index);
    });
});

const setPosition = (index)=>{
    position = -index * 800;

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




// Function to change the position of the carousel at regular intervals
const changeCarouselPosition = () => {
    position = (position - 800) % (image_number * 800);
    carouselImage.style.left = position + "px";
};

// set interval
 interval = setInterval(changeCarouselPosition, 10000);

 
const resetInterval =()=> {
    clearInterval(interval);
    interval = setInterval(changeCarouselPosition, 10000);
}








