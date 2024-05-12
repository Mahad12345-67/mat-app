import React, { useState } from 'react';
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      setRecipes(data.meals);
      setSelectedRecipe(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoBack = () => {
    setRecipes([]);
    setSelectedRecipe(null);
  };

  const handleSelectRecipe = recipe => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Mahad's Foodmenu</h1>
      <blockquote>
        Real food doesn't have ingredients, real food is ingredients.
        <cite> - Mahad Farah</cite>
      </blockquote>
      <SearchForm
        query={query}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <RecipeList
        recipes={recipes}
        onSelectRecipe={handleSelectRecipe}
        selectedRecipe={selectedRecipe}
      />
      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} onGoBack={handleGoBack} />
      )}
    </div>
  );
}

export default App;
