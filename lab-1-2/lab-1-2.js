// const burger = document.querySelector(".burger");
// const navigation = document.querySelector(".navigation_1");

// burger.addEventListener("click", () => {
    
//     if (navigation.style.visibility === "visible") {
//         navigation.style.visibility = "hidden";
//         navigation.style.opacity = "0"; 
//     } else {
//         navigation.style.visibility = "visible";
//         navigation.style.opacity = "1"; 
//     }


//     if (burger.classList.contains("burger-expanded")) {
//         burger.classList.remove("burger-expanded");
//     } else {
//         burger.classList.add("burger-expanded");
//     }
// });

// window.addEventListener('load', () => {
//     document.querySelector('.section_2').classList.add('loaded');
// });

// window.addEventListener('load', () => {
//     document.querySelector('.main_1 h1').classList.add('loaded');
// });

const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation_1");

burger.addEventListener("click", () => {
    navigation.classList.toggle("active");  // Тепер використовуємо клас "active" для керування видимістю меню

    burger.classList.toggle("burger-expanded");  // Перемикаємо клас "burger-expanded"
});

window.addEventListener('load', () => {
    document.querySelector('.section_2').classList.add('loaded');
});

window.addEventListener('load', () => {
    document.querySelector('.main_1 h1').classList.add('loaded');
});
