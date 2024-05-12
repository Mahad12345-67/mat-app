import React from 'react';

const RecipeCard = ({ recipe, onSelectRecipe, selectedRecipe }) => {
  return (
    <div className="col-md-4 mb-4">
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
              onClick={() => onSelectRecipe(recipe)}
            >
              Visa Detaljer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
