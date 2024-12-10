import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../services/recipesAPI"; // Importa la funzione API

const Recipes = () => {
  const [recipes, setRecipes] = useState([]); // Stato per memorizzare le ricette

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const results = await fetchRecipes("pasta"); // Sostituisci "pasta" con il termine di ricerca che preferisci
        setRecipes(results); // Salva le ricette nello stato
      } catch (error) {
        console.error("Errore nel fetch delle ricette:", error);
      }
    };
    loadRecipes();
  }, []); // Effettua la chiamata solo al montaggio del componente

  return (
    <div>
      <h1>Ricette Vegetariane</h1>
      <div>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} style={{ margin: "10px 0", border: "1px solid #ccc", padding: "10px" }}>
              <h2>{recipe.title}</h2>
              {recipe.image && <img src={recipe.image} alt={recipe.title} style={{ width: "100px" }} />}
            </div>
          ))
        ) : (
          <p>Caricamento ricette in corso...</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;
