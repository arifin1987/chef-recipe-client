import React, { useContext, useEffect, useState } from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';

import { Toaster, toast } from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProvider';


const ChefRecipes = () => {
    const{loading}= useContext(AuthContext);
    const cuisine = useLoaderData()
    console.log(cuisine);
    const notify = () => toast('This is my favorite recipe');
    

   if(loading){
    return <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
   }
    return (
        
        <div >
            <div className='md:flex flex-col items-center'>

            <img  src={cuisine.chef_picture} alt="" />
            <h1 className='text-black font-bold	'>{cuisine.chef_name}</h1>
            <p>Years of Experience:{cuisine.years_of_experience}</p>
            <p>Number of Recipes:{cuisine.num_of_recipes}</p>
            <p>Likes:{cuisine.likes}</p>
            </div>
            
            <h1 className='text-center text-4xl font-bold'>Your Favorite Recipe</h1>
            <div className='flex justify-between m-2'>
                <div className='border-2 p-4 mr-4'>
                    <h1 className='font-bold'>Recipe Name:{cuisine.recipes[0].recipe_name}</h1>
                    <p>Ingredients:{cuisine.recipes[0].ingredients}</p>
                    <p>Cooking Method:{cuisine.recipes[0].cooking_method}</p>
                    <p>Rating:{cuisine.recipes[0].rating}</p>
                    <div>
                    <button onClick={notify} className='bg-red-300 p-2 text-white rounded'>Favorite</button>
                    <Toaster></Toaster>
                    </div>
                    
                </div>
                <div className='border-2 p-4 mr-4'>
                    <h1 className='font-bold'>Recipe Name:{cuisine.recipes[1].recipe_name}</h1>
                    <p>Ingredients:{cuisine.recipes[1].ingredients}</p>
                    <p>Cooking Method:{cuisine.recipes[1].cooking_method}</p>
                    <p>Rating:{cuisine.recipes[1].rating}</p>
                    <div>
                    <button onClick={notify} className='bg-red-300 p-2 text-white rounded'>Favorite</button>
                    <Toaster></Toaster>
                    </div>
                </div>
                <div className='border-2 p-4 mr-4'>
                    <h1 className='font-bold'>Recipe Name:{cuisine.recipes[2].recipe_name}</h1>
                    <p>Ingredients:{cuisine.recipes[2].ingredients}</p>
                    <p>Cooking Method:{cuisine.recipes[2].cooking_method}</p>
                    <p>Rating:{cuisine.recipes[2].rating}</p>
                    <div>
                    <button onClick={notify} className='bg-red-300 p-2 text-white rounded'>Favorite</button>
                    <Toaster></Toaster>
                    </div>
                </div>

            </div>
            
            
           
        </div>
           
    );
};

export default ChefRecipes;