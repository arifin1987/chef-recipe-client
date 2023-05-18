import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';





const Register = () => {
  const {createUser}= useContext(AuthContext);
  const[error,setError] = useState('')
  
    const handleRegister= event=>{
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.confirm.value;
      const photo = form.photo.value;
      console.log(name, email, password,confirm);

      setError('');

      if(password !==confirm){
        setError('Your password did not match');
        return;
      }
      else if(password.length <6){
        setError('password must be 6 characters or longer');
        return;
      }
      else if(email && password == ''){
        setError('Email and password field cannot be empty')
      }

      createUser(email, password)
      .then(result=>{
        const loggedUser= result.user;
        console.log(loggedUser);
        form.reset();

      })
      .catch(error=>{
        console.log(error)
      })

    }

  
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Please Register!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister}   className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name='confirm' placeholder="Confirm Password" className="input input-bordered" required />
                <label className="label">
                  
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photo' placeholder="photo URL" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <Link to='/login'>
            <button className="btn btn-link">Already have an account?Please Login</button>

            </Link>
            <p className='text-primary'>{error}</p>
            
          </div>
        </div>
      </div>
    );
};

export default Register;