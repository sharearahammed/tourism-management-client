/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../../firebase.config";


export const AuthContext = createContext(null);
const AuthConfiguration = ({children}) => {
    const auth = getAuth(app);
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const [reload , setReload] = useState(false);
    const googleProvider = new GoogleAuthProvider();
  const gitHubprovider = new GithubAuthProvider();


  const [ spotCollection , setSpotCollection ] = useState([]);
  useEffect(()=>{
      fetch('http://localhost:5000/alltouristsSpot')
      .then(res=>res.json())
      .then(data=>{
        //   console.log(data);
          setSpotCollection(data);
      }) 
  },[])

  const GoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  };
  
  const GitHubSignIn = () => {
    return signInWithPopup(auth, gitHubprovider)
  };

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
      }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
            console.log('Current User: ',currentUser)
        })
        return () =>{
            unSubscribe();
        } ;
    },[auth, reload])

    const authInfo = { spotCollection , setReload,GitHubSignIn,GoogleSignIn,setUser,user,loading,setLoading,createUser,signInUser,resetPassword,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthConfiguration; 