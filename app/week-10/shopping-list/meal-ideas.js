"use client";

import { useState, useEffect } from "react";

export default function MealIdeas ({ingredient}){
    
    const [meals, setMeals] = useState ([]);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals || [];
        }catch (error) {
            console.error("ERROR cannot fetch meal ideas", error);
            return [];
        }
    };

    useEffect(() => {
        async function loadMealIdeas() {
            try {
                const getMeals = await fetchMealIdeas(ingredient);
                console.log("meals successfully fetched", getMeals);
                setMeals(getMeals);
            }catch(error){
                console.error("ERROR cannot load meal ideas", error);
                setMeals([]);
            }
        };

        if (ingredient){
            loadMealIdeas();
        } else {
            setMeals([]);
        };
    },[ingredient]);

    return (
        <div className="justify-items-center w-1/2 p-4 m-3">
                <h2 className="text-white text-3xl font-bold font-mono">MealIdeas</h2>
            <div>
                <ul>
                    {meals.length > 0 ? (
                        meals.map((meal) => (
                            <div className="group drop-shadow-md bg-white border-4 border-red-600 rounded-lg p-3 grid grid-cols-2 m-3 hover:bg-red-600 transition-all duration-200" key={meal.idMeal}>
                                <img className="group-hover:border-white border-4  w-24 h-24"src={meal.strMealThumb} alt={meal.strMeal}/>
                                <h3 className="group-hover:text-white text-black font-mono m-2">{meal.strMeal}</h3>
                            </div>
                        ))
                    ) : (
                        <h3>No meal ideas found for {ingredient}</h3>
                    )}
                </ul>
            </div>
        </div>
    );
};