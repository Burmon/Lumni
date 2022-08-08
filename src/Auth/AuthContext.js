import React, {useEffect, useState, createContext } from 'react';
import AuthConfig from './Config';


export const AuthCont = createContext();





 const AuthProvider = (props) =>{
    const { children } = props;
    const [usuario, setUsuario] = useState(null);
    const [aguardando, setAguardando] = useState(true);

    useEffect(() => {
       const subscribe = AuthConfig.auth().onAuthStateChanged((user) =>{
          if(user){
            setUsuario(user);
            setAguardando(false);
          }else{
            setUsuario("");
            setAguardando(false);
          }
           
        });
        return subscribe
    },  []);

    if (aguardando) {
        return <>Carregando...</>;
    }
    const value = {usuario};
    return(
        <AuthCont.Provider value={value}>{children}</AuthCont.Provider>
    );
    
};
export default AuthProvider;