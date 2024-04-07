import { GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config";

export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user);
    // Create User
    const registerUser = (email, password) => {
          return createUserWithEmailAndPassword(auth , email, password)
    }
    
    // Update User Profile
    const updateUserProfile = (name, image) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image,
          })
    }

    // Login user
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google login
    const googleUser = () =>{
        return signInWithPopup(auth, GoogleProvider);
    }

    // Github User
    const githubUser = () =>{
        return signInWithPopup(auth, GithubProvider);
    }
    
    // Logout user
    const logout = () =>{
        setUser(null)
        signOut(auth);
    }
    // Observer
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user);
            }
            else{
                setUser(null);
            }
        });
        return () =>{
            unsubscribe()
        }
    },[])


    const authInfo = {
        user,
        registerUser,
        updateUserProfile,
        loginUser,
        googleUser,
        githubUser,
        logout,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;