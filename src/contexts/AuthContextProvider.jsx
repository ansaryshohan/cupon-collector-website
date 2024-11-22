/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import AuthContext from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [forgetPasswordEmail, setForgetPasswordEmail] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const signUpWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser= (updatedObj)=>{
    return updateProfile(auth.currentUser,{...updatedObj})
  }

  const forgotPasswordHandle=(email)=>{
    return sendPasswordResetEmail(auth,email)
  }

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, [user]);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    signUpWithEmailAndPassword,
    loginWithEmailAndPassword,
    loginWithGoogle,
    logOut,
    updateUser,
    forgotPasswordHandle,
    forgetPasswordEmail,
    setForgetPasswordEmail,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
