import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useLogin from "../hooks/useLogin";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();


  //push data on server when user signup/login
  const [LoginInfo, setLoginInfo] = useState({});
  const jwtANDUser = (user, insert = true, role = 'user') => {
    setLoading(true);
    setLoginInfo({
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
      role,
      insert,
    }); setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useLogin(LoginInfo);

  //-----------Firebase create user------------

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //-------Firebase create login ----------
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //-------Firebase google sign In-----
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ---------- Firebase Twitter sign In---------
  const signInWithTwitter = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  //-------Firebase GitHub sign In ---------
  const signInWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  // Firebase logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // -------- firebase update name ---------
  const updateName = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };


  //   firebase email verification
  const verifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  //   firebase password reset
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };


  //   observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user observing");
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //==================== auth Info======================
  const authInfo = {
    user,
    loading,
    createUser,
    updateName,
    verifyEmail,
    signInWithGoogle,
    signInWithTwitter,
    signInWithGitHub,
    signIn,
    logOut,
    resetPassword,
    jwtANDUser
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
