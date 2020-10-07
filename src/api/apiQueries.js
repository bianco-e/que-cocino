const LOCAL_URL = "http://localhost:5000";
const URL = "https://que-cocino-api.herokuapp.com";

export const postRecipe = (recipe) => {
  fetch(`${URL}/recipes/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  });
};

export const postIngredients = (ingredients) => {
  return ingredients.forEach((ingredient) =>
    getMatchingIngredients(ingredient).then((res) => {
      if (!res.find((name) => name.toLowerCase() == ingredient.toLowerCase())) {
        return fetch(`${URL}/ingredients/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: ingredient }),
        });
      }
    })
  );
};

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
