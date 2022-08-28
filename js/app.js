
const loadData = (search) => {
  const api_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(api_URL)
    .then((res) => res.json())
    .then((data) => displayData(data.meals));
};
const displayData = (meals) => {
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = ``;
  meals.forEach((meal) => {
    console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.className = "col";
    mealDiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top img-fluid w-100" alt="" />
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)} . . .</p>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv);
  });
};

const searchFood = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value = '';
  loadData(searchText);
}
