import React, {useEffect, useState} from 'react';
import {auth} from "../init-firebase";

export const AuthContext = React.createContext({});

export const AuthProvider = props => {
    let [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser)
    }, [])

    return (
        <AuthContext.Provider value={currentUser}>
            {props.children}
        </AuthContext.Provider>
    )
}