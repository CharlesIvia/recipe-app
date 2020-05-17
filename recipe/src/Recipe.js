import React from 'react';
import style from "./recipe.module.css"
const Recipe = ({title,calories,image, ingredients})=>{
    return(
        <div className={style.recipe}>
        <h1 className={style.title}>{title}</h1>
        <img className={style.image}  src={image} alt=""/>
        <h2 className={style.ingredient}>Ingredients</h2>
        <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <p className={style.calories}> Calories: {calories}</p>
        </div>
    );
}

export default Recipe;
