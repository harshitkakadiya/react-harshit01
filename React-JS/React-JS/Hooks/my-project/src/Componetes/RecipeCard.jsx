import React from 'react'
import { useState } from 'react';

function Recipe({ drinkers }) {
    return (
      <ol>    
        <li>Boil {drinkers} cups of water.</li>
        <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
        <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
      </ol>
    );
  }

const RecipeCard = () => {
    const [state, setState] = useState()
    function handleRecipe (){
        setState(Recipe)
    }

    return (
        <div>
            <div><p>{state}</p></div>
             <div>
             <button className=' border-2 px-2 py-1 bg-slate-400' onClick={handleRecipe}>Recipi_01</button> 
             </div>
        </div>
      )
}
   

export default RecipeCard
