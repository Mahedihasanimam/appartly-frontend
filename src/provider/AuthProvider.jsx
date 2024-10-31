'use client'

import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  
  import axios from "axios";
  import auth from "../app/firebase/Firebase.config";
//   import { axiosCommon } from "../hooks/UseAxiosCommon";
  
  export const AuthContext = createContext(null);
  const AuthProvider = ({ children }) => {
    const [user, setuser] = useState([]);
    const [loder, setLoder] = useState(true);
    const googleProvider = new GoogleAuthProvider();
  
    //user create
    const createUser = (email, password) => {
      setLoder(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    //login
    const login = (email, password) => {
      setLoder(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    // google login
    const googleLogin = () => {
      setLoder(true);
      return signInWithPopup(auth, googleProvider);
    };
    // logout
    const logout = () => {
      setLoder(true);
      signOut(auth);
    };

    // // ovjarvar
    // useEffect(() => {
    //   const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
    //       const userEmail=currentUser?.email || user?.email
    //       const loggedUser={email:userEmail}
    //     setuser(currentUser);
    //     setLoder(false);
    //     console.log(currentUser);
    //     if(currentUser){
        
    //       axiosCommon.post(`/jwt`, loggedUser,)
    //       .then(res=>{
    //         console.log('responsd data',res.data.token,loggedUser);
    //          if(res.data.token){
              
    //           localStorage.setItem('accesstoken',res.data.token)
    //          }
    //       })
    //     }
    //     else{
    //       axios.post(`${import.meta.env.VITE_API_URL}/logout`,loggedUser)
    //       .then(res=>{
    //           console.log(res.data)
    //       })
    //     }
    //   });
    //   return () => {
    //     unsubcribe();
    //   };
    // }, [user?.email]);

    const authinfo = {
      createUser,
      login,
      user,
      setuser,
      logout,
      googleLogin,
      loder,
    };
    return (
      <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;