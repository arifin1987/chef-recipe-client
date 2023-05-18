import React, { createContext, useState } from 'react';
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'
import { useEffect } from 'react';


const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const[user,setUser]= useState(null);
    const[loading, setLoading]= useState(true)

    const createUser= (email,password)=>{
        setLoading(true);
      return  createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle= ()=>{
        
        return signInWithPopup(auth,googleAuthProvider );
    }

    const signInWithGithub =()=>{
        return signInWithPopup(auth, githubAuthProvider);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return()=>{
            unsubscribe();
        }
    },[])
    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        signInWithGoogle,
        signInWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;