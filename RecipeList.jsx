import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, onSelectRecipe, selectedRecipe }) => {
  return (
    <div className="row">
      {recipes &&
        recipes.map(recipe => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onSelectRecipe={onSelectRecipe}
            selectedRecipe={selectedRecipe}
          />
        ))}
    </div>
  );
};

export default RecipeList;
