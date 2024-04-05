import React, { useState } from 'react';

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
      <blockquote>Real food doesn't have ingredients, real food is ingredients.
          <cite> - Mahad Farah</cite>
      </blockquote>
      {!selectedRecipe && (
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Sök maträtt"
              value={query}
              onChange={handleChange}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      )}
      <div className="row">
        {recipes &&
          recipes.map(recipe => (
            <div className="col-md-4 mb-4" key={recipe.idMeal}>
              <div className="card">
                <img
                  src={recipe.strMealThumb}
                  className="card-img-top"
                  alt={recipe.strMeal}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.strMeal}</h5>
                  {!selectedRecipe && (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleSelectRecipe(recipe)}
                    >
                      Välj
                    </button>
                  )}
                </div>
                {selectedRecipe && selectedRecipe.idMeal === recipe.idMeal && (
                  <div className="card-body">
                    <h5 className="card-title">{selectedRecipe.strMeal}</h5>
                    <p className="card-text">{selectedRecipe.strInstructions}</p>
                    <button className="btn btn-primary" onClick={handleGoBack}>
                      Tillbaka
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
