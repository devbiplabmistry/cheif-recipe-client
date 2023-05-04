/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../../../firebase/firebase.config';
import { GithubAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signOut, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider()
    const githubprovider = new GithubAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);


    const createEmailAndPassword = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const register = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    }
    const githubSignIn = () => {
        return signInWithPopup(auth, githubprovider)
    }
    const signOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
        return () => {
            unsubscribe()
        }

    }, [])
    console.log(user);

    const AuthInfo = {
        user,
        setUser,
        createEmailAndPassword,
        register,
        signOut,
        googleSignIn,
        googleSignIn,
        githubSignIn

    }















    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;