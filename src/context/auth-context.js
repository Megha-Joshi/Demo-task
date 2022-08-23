import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const googleLogin = () =>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }

    const logOut = () =>{
        signOut(auth);
        navigate("/");
    }

    useEffect(() => {
        const removeUser = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("User", currentUser);
        })
        return () => {
            removeUser();
        }
    }, []);

    useEffect(() => {
        if(user=== null){
        navigate("/");
        }else{
        navigate("/homepage");
        }
        }, [user]);

    return (<AuthContext.Provider value={{googleLogin, logOut, user}}>{children}</AuthContext.Provider>)
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };