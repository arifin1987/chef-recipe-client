import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import ActiveLink from '../../ActiveLink/ActiveLink';


const Header = () => {
  const{user, logOut}= useContext(AuthContext);
  console.log(user);
 
  
  const handleLogout=()=>{
    logOut()
    .then(result=>{})
    .catch(error=> console.log(error))
  }
  

  return (
    <div>
      
      <div className="navbar bg-red-400 text-primary-content md:flex justify-between">
        <div>
        <a className="btn btn-ghost normal-case text-xl">Tasty Recipe</a>
        </div>
        
        <div >

          <ActiveLink className="btn btn-ghost normal-case text-xl " to='/'>Home</ActiveLink>
          <ActiveLink className="btn btn-ghost normal-case text-xl " to='/blog'>Blog</ActiveLink>
          <ActiveLink className="btn btn-ghost normal-case text-xl " to='/register'>Register</ActiveLink>
          
          
          
          
          
          {
            user? <button onClick={handleLogout}>Logout</button>: <Link to='/login'><button>Login</button></Link> 

            
          }
          {
            user && <div className="tooltip" data-tip={user.displayName}>
            <img src={user.photoURL } className='rounded-full w-2/4' />
          </div>   
          }
            
          
         









        </div>
      </div>



    </div>


  );
};

export default Header;