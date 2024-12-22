import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipesDetails"; 
import Home from "./Home";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

// Inizializzazione del QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    // Avvolge l'app con il QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Route per la Home */}
          <Route path="/" element={<Home />} />
          
          {/* Route per la pagina dei dettagli */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
