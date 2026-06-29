const ingredientInput = document.getElementById("ingredientInput");
const searchBtn = document.getElementById("searchBtn");
const resultsGrid = document.getElementById("resultsGrid");
const resultsInfo = document.getElementById("resultsInfo");
const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

const STRIPE_COLORS = ["var(--accent-red)", "var(--accent-green)", "var(--accent-mustard)"];

searchBtn.addEventListener("click", searchMeals);
ingredientInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchMeals();
  }
});

async function searchMeals() 
{
  const ingredient = ingredientInput.value.trim();

  if (!ingredient)
 {
    setInfo("Type an ingredient to get started!");
    resultsGrid.innerHTML = "";
    return;
  }

  setInfo("Searching the pantry...");
  resultsGrid.innerHTML = "";

  try 
  {
    const response = await fetch(`${API_URL}${encodeURIComponent(ingredient)}`);

    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

    const data = await response.json();

    if (!data.meals) 
    {
      setInfo(`No meals found with "${ingredient}". Try something like "egg" or "onion".`);
      return;
    }

    const count = data.meals.length;
    setInfo(`${count} meal${count === 1 ? "" : "s"} found with "${ingredient}"`);
    renderMeals(data.meals);
  } 
  catch (error) 
  {
    console.error("Error fetching meals:", error);
    setInfo("Invalid ingredient. Please try again!", true);
  }
}

function renderMeals(meals)
{
  resultsGrid.innerHTML = meals
    .map((meal, index) => {
      const stripe = STRIPE_COLORS[index % STRIPE_COLORS.length];
      return `
        <article class="meal-card" style="--stripe: ${stripe}">
          <img src="${meal.strMealThumb}" alt="${escapeHTML(meal.strMeal)}" loading="lazy" />
          <h3>${escapeHTML(meal.strMeal)}</h3>
        </article>
      `;
    })
    .join("");
}

function setInfo(message, isError = false) 
{
  resultsInfo.textContent = message;
  resultsInfo.classList.toggle("error", isError);
}

function escapeHTML(str) 
{
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
