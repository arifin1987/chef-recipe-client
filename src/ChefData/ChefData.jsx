import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const ChefData = ({chef}) => {
    const{loading}= useContext(AuthContext);
    const{id,chef_picture,chef_name,years_of_experience,num_of_recipes,likes}= chef;
    
    if(loading){
        return <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
       }
    
    return (
            
            <div className='border-2 border-black p-4 rounded'>
           <img src={chef_picture} alt="" />
            <h1 className='text-black font-bold	'>{chef_name}</h1>
            <p>Years of Experience:{years_of_experience}</p>
            <p>Number of Recipes:{num_of_recipes}</p>
            <p>Likes:{likes}</p>
            <Link to={`/chefs/${id}`}><button className='bg-red-400 text-white p-2 rounded'>View Recipes</button></Link>
            
            
        </div>
            
        
    );
};

export default ChefData;