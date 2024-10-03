let editingCar = null;
let cars = [];

const carsList = document.getElementById('cars-list');
const totalRating = document.getElementById('total-rating');
const formModal = document.getElementById('form-modal');
const createCarBtn = document.getElementById('create-car-btn');
const cancelFormBtn = document.getElementById('cancel-form-btn');
const buttonSubmit = document.getElementById("submit");
const carForm = document.getElementById("car-form");

createCarBtn.addEventListener("click", () => {
    formModal.style.display = "flex";
    carForm.reset();
    editingCar = null;
});

cancelFormBtn.addEventListener("click", () => {
    formModal.style.display = "none";
});

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    
    const model = document.getElementById("model").value;
    const rating = parseFloat(document.getElementById("rating").value);
    const year = parseInt(document.getElementById("year").value);
    const image = document.getElementById("image").value;

    if (editingCar === null) {
        cars.push({ model, rating, year, image });
    } else {
        cars[editingCar] = { model, rating, year, image };
        editingCar = null;
    }

    renderItems(cars);
    formModal.style.display = "none";
});

function renderItems(cars) {
    carsList.innerHTML = '';
    cars.forEach((car, index) => {
        const li = document.createElement('li');
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.gap = "10px";
        li.style.padding = "10px";
        li.style.borderRadius = "5px";
        li.innerHTML = `
            <img src="${car.image}" style="width: 100px; height: 150px; border-radius: 5px; object-fit: cover;">
            <div>
                <h2 style="font-size: 1.25rem; font-weight: bold;">${car.model}</h2>
                <p>Car Rating: <span style="font-weight: bold;">${car.rating}</span></p>
                <p>Year: <span style="font-weight: bold;">${car.year}</span></p>
                <button class="edit-button" style="background-color: yellow; color: white; padding: 5px 10px; border-radius: 5px; margin-top: 5px;" data-index="${index}">Edit</button>
            </div>
        `;
        li.querySelector('.edit-button').addEventListener('click', () => {
            editingCar = index;
            document.getElementById("model").value = car.model;
            document.getElementById("rating").value = car.rating;
            document.getElementById("year").value = car.year;
            document.getElementById("image").value = car.image;
            formModal.style.display = "flex";
        });
        carsList.appendChild(li);
    });

    const total = cars.reduce((acc, car) => acc + car.rating, 0);
    totalRating.textContent = total.toFixed(1);
}

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCars = cars.filter(car => car.model.toLowerCase().includes(searchTerm));
    renderItems(filteredCars);
});

const sortBtn = document.getElementById('sort-btn');
const sortOptions = document.getElementById('sort-options');

sortBtn.addEventListener('click', () => {
    const sortBy = sortOptions.value;
    if (sortBy === 'rating') {
        cars.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'year') {
        cars.sort((a, b) => b.year - a.year);
    }
    renderItems(cars);
});
