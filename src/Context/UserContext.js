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
  updateEmail,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useLogin from "../hooks/useLogin";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [subscribes, setSubscribes] = useState("");
  const [loading, setLoading] = useState(true);
  const [workspaces, setWorkspaces] = useState([]);
  const [currentWorkspace, setCurrentWorkspace] = useState(null);
  const [boardItems, setBoardItems] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);

  const themes = {
    light: "winter",
    dark: "forest",
  };

  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
    localStorage.setItem("dark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };

  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setIsDark(isDark);
  }, []);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  //push data on server when user signup/login
  const [LoginInfo, setLoginInfo] = useState({});
  const jwtANDUser = (user, insert = true, role = "user") => {
    setLoading(true);
    setLoginInfo({
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
      role,
      insert,
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useLogin(LoginInfo);

  //load workspaces
  const reloadWorkspaces = () => {
    fetch(process.env.REACT_APP_SERVER_URL + `/get-workspaces`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((res) => {
        setWorkspaces(res);
        if (!currentWorkspace && res.length > 0) {
          setCurrentWorkspace(res[0]);
        }
      });
  };

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
  const updateName = (
    name,
    photoURL = "https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"
  ) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
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
  //   firebase updateEmail
  const emailUpdate = (newEmail) => {
    setLoading(true);
    return updateEmail(auth.currentUser, `${newEmail}`);
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

  const initialBoardLists = [
    {
      ListName: "To Do",
      id: "1",
    },
    {
      ListName: "Doing",
      id: "2",
    },
    {
      ListName: "Done",
      id: "3",
    },
  ];

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
    jwtANDUser,
    emailUpdate,
    subscribes,
    setSubscribes,
    workspaces,
    setWorkspaces,
    reloadWorkspaces,
    currentWorkspace,
    setCurrentWorkspace,
    toggleTheme,
    isDark,
    theme, initialBoardLists,
    currentTask,
    setCurrentTask,
    boardItems, setBoardItems
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
