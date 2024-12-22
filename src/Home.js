import React, { useState } from "react";
import SearchBar from "../src/components/SearchBar";
import RecipeCard from "../src/components/RecipeCard";

import { fetchRecipes } from "../src/services/recipesAPI";
import ClipLoader from "react-spinners/ClipLoader";
import backgroundImage from "../src/pexels-veganliftz-2383060.jpg";
import { useQuery } from "@tanstack/react-query"; // Usa React Query per fetchare i dati

function Home() {
  const [query, setQuery] = useState("");

  // Fetch ricette con React Query
  const { data: recipes = [], isLoading, isError } = useQuery({
    queryKey: ["recipes", query], // Chiave univoca per il caching
    queryFn: () => fetchRecipes(query), // Funzione per ottenere i dati
    enabled: !!query, // Effettua la richiesta solo se esiste una query
  });

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery); // Aggiorna la query
  };

  return (
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

      {isLoading ? ( // Mostra il loader se isLoading è true
        <div className="loader-container">
          <ClipLoader color="#36d7b7" size={50} />
          <p>Loading recipes...</p>
        </div>
      ) : isError ? ( // Mostra un messaggio in caso di errore
        <div className="error-container">
          <p>Something went wrong. Please try again later.</p>
        </div>
      ) : (
        <div className="recipe-container">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
          ))}
        </div>
      )}

      <footer className="footer">
        <p>© 2024 Alessandro Smajlovic, all rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
