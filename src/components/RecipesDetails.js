import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importa `useNavigate`
import { fetchRecipeDetails } from "../services/recipesAPI";
import "./RecipeDetails.css";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); // Inizializza `useNavigate`
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [error, setError] = useState(""); // Gestione dell'errore

  useEffect(() => {
    const getDetails = async () => {
      try {
        const details = await fetchRecipeDetails(id);
        setRecipeDetails(details);
        setError(""); // Reset dell'errore
      } catch (err) {
        setError("Errore nel recupero dei dettagli della ricetta.");
      }
    };
    getDetails();
  }, [id]);

  if (error) return <div>{error}</div>; // Mostra errore
  if (!recipeDetails) return <div>Caricamento...</div>;

  return (
    <div className="recipe-details">
      <h1>{recipeDetails.title}</h1>
      <img src={recipeDetails.image} alt={recipeDetails.title} />
      <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
      <h3>Info</h3>
      <ul>
        <li>
          <strong>Preparation time:</strong> {recipeDetails.readyInMinutes} minuti
        </li>
        <li>
          <strong>Portions:</strong> {recipeDetails.servings}
        </li>
      </ul>
      <h3>Ingredients</h3>
      <ul>
        {recipeDetails.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>
        Back
      </button>
    </div>
  );
}

export default RecipeDetails;
