import axios from "axios";

const API_KEY = process.env.REACT_APP_API_RECIPES_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch"; // API's URL

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
        query: query,
        diet: "vegetarian",
        number: 15,
      },
    });

    if (response.data.results.length === 0) {
      throw new Error("Nessuna ricetta trovata con questo criterio.");
    }

    return response.data.results;
  } catch (error) {
    console.error("Errore nel fetch delle ricette :(", error);
    throw error;
  }
};

export const fetchRecipeDetails = async (id) => {
  console.log("ID passato a fetchRecipeDetails:", id); // Logga l'ID

  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );

    if (!response.data || !response.data.title) {
      throw new Error("Dettagli ricetta non trovati.");
    }

    return response.data;
  } catch (error) {
    console.error("Errore API:", error);
    throw error;
  }
};

