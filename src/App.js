import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipesDetails"; // Importazione corretta
import { fetchRecipes } from "./services/recipesAPI";
import backgroundImage from './pexels-veganliftz-2383060.jpg'; // Assicurati che il percorso sia corretto
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    try {
      const results = await fetchRecipes(query);
      setRecipes(results);
    } catch (error) {
      console.error("Errore durante la ricerca:", error);
    }
  };

  return (
    <Router>
      <Routes>
        {/* Route per la Home con la SearchBar */}
        <Route
          path="/"
          element={
            <div
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                position: "relative",
              }}
            >
              <div className="search-container">
                <SearchBar onSearch={handleSearch} />
              </div>
              <div className="recipe-container">
                {recipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    id={recipe.id} // Passa l'ID alla card per il link
                    title={recipe.title}
                    image={recipe.image}
                  />
                ))}
              </div>

              {/* Aggiungi il footer qui */}
              <footer className="footer">
                <p>© 2024 Alessandro Smajlovic, all rights reserved.</p>
              </footer>
            </div>
          }
        />

        {/* Route per la pagina dei dettagli */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

