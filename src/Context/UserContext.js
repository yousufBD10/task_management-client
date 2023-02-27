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
    light:{
      nav:'bg-gray-200 navbar shadow-md',
      bg:'bg-blue-100',
      text:'text-black',
      features:"bg-gray-200",
      reviews:"bg-gray-200",
      serviceCard:" h-auto md:h-[350px] bg-gray-300  flex overflow-hidden shadow",
      footer:"footer p-12 text-white bg-black ",
      pricingCard:"my-9 mr-3 py-3 px-3 card-compact w-72 h-auto bg-base-100 shadow-2xl rounded-xl",
      pricingOrder:"my-9 mx-11 py-3 px-11 h-auto bg-gray-100 shadow-2xl rounded-xl",
      createworkspace:"w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 bg-stone-100 rounded-md lg:max-w-screen-xl",
      createworkspaceInput: "border border-stone-300  rounded py-1 px-3 block focus:ring-blue-500  focus:border-blue-500  w-full",
      table:'table w-full',
      ToDo:'bg-gray-300 text-black shadow-lg p-3',
      TaskCard:'bg-gray-300  hover:shadow-lg p-3',
      modal:"modal-box",
      createTaskTextAria:"textarea textarea-accent  border rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500  w-full h-40",
      SingleTaskModalColor:"modal-box card rounded-md touch-auto max-w-screen-md scrollbar-hide",
      SingleTaskModalInput:"input input-bordered w-full rounded-md text-3xl font-semibold",
      SingleTaskModalTextAria:"input input-bordered p-4 w-full rounded-md outline-border h-28",
      SingleTaskModalComment:"input input-bordered p-2 mt-2 w-full rounded-sm outline-border",
      buttonStyle :
      "dropdown dropdown-bottom md:dropdown-left flex items-center mb-1 mr-1 p-2 space-x-3  btn-ghost bg-gray-300 btn-sm  hover:bg-gray-400 w-44 md:w-none",
      accountSection:"menu menu-compact dropdown-content mt-12 p-2 shadow-lg bg-base-100 rounded-sm w-60",
      editProfileInput:"input input-bordered w-full bg-gray-300 font-semibold ",
      boardEditeModal:"bg-gray-100 border border-stone-300 rounded py-4 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full",
      editeWorkspaceInput:"bg-gray-100 border border-stone-300 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
    },
    dark: { 
    nav:'bg-gray-700 text-white navbar shadow-md',
    bg:'bg-gray-900 text-white',
    text:'text-white',
    features:"bg-gray-800",
    reviews:"bg-gray-800",
    feature:"text-black",
    serviceCard:" h-auto md:h-[350px] bg-gray-700  flex overflow-hidden text-white shadow",
    footer:"footer p-12 text-white bg-gray-900",
    pricingCard:"my-9 mr-3 py-3 px-3 text-white card-compact w-72 h-auto bg-gray-700 shadow-2xl rounded-xl",
    pricingOrder:"my-9 mx-11 py-3 px-11 h-auto bg-gray-700 shadow-2xl rounded-xl",
    createworkspace:"w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 bg-gray-700 text-white rounded-md lg:max-w-screen-xl",
    createworkspaceInput:"border border-stone-300  rounded py-1 px-3 block focus:ring-blue-500  focus:border-blue-500  w-full bg-gray-700 text-white",
    table:' gap-4 w-full bg-gray-700 text-white',
    ToDo:'bg-gray-700 text-white shadow-lg p-3',
    TaskCard:'bg-gray-500 text-white shadow-lg p-3',
    modal:"modal-box text-white bg-slate-600",
    createTaskTextAria:"textarea textarea-accent  border rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 bg-gray-600  w-full h-40",
    SingleTaskModalColor:"modal-box bg-gray-600 text-white card rounded-md touch-auto max-w-screen-md scrollbar-hide",
    SingleTaskModalInput:"input input-bordered w-full rounded-md text-3xl bg-gray-700  font-semibold",
    SingleTaskModalTextAria:"input bg-gray-700 text-white input-bordered p-4 w-full rounded-md outline-border h-28",
    SingleTaskModalComment:"input bg-gray-700 input-bordered p-2 mt-2 w-full rounded-sm outline-border",
    buttonStyle :
    "dropdown dropdown-bottom md:dropdown-left flex items-center mb-1 mr-1 p-2 space-x-3  btn-ghost bg-gray-500 btn-sm  hover:bg-gray-600 w-44 md:w-none",
    accountSection:"menu menu-compact dropdown-content mt-12 p-2 shadow-lg bg-gray-700 rounded-sm w-60",
    editProfileInput:"input input-bordered w-full bg-gray-700 text-white focus:bg-gray-600 font-semibold ",
    boardEditeModal:"bg-gray-700 border border-stone-300 rounded py-4 px-3 block focus:ring-blue-500 focus:border-blue-500  w-full",
    editeWorkspaceInput:"bg-gray-600 border border-stone-300 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-white w-full"

  },
  }
  

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
