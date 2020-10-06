const URL = "http://localhost:5000";

export const getRandomRecipe = () =>
  fetch(`${URL}/recipes/random`).then((res) => res.json());

export const getMatchingIngredients = (keyword) =>
  fetch(`${URL}/ingredients/contains/${keyword}`).then((res) => res.json());

export const getRecipeWithFilter = (having, notHaving) =>
  fetch(`${URL}/recipes/filter`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      having,
      notHaving,
    }),
  }).then((res) => res.json());
