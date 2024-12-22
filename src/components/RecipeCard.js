import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./RecipeCard.css";

function RecipeCard({ id, title, image }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/recipes/${id}`)} // Naviga alla pagina dei dettagli della ricetta
      className="recipe-card"
    >
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default RecipeCard;
