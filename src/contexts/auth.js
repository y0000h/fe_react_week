import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthConext = createContext(null);

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = user=>{
        setUser(user);
    }
    
    const logout = user=>{
        setUser(null);
        // navigate("/");
    }   

    return (
        <AuthConext.Provider value={{user, login, logout}}>
            {children}
        </AuthConext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthConext);
}