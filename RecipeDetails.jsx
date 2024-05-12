import React from 'react';

const RecipeDetails = ({ recipe, onGoBack }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{recipe.strMeal}</h5>
        <p className="card-text">{recipe.strInstructions}</p>
        <button className="btn btn-primary" onClick={onGoBack}>
          Tillbaka
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
