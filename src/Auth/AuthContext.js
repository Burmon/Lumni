import React, {useEffect, useState, createContext } from 'react';
import AuthConfig from './Config';


const AuthCont = createContext();

export function AuthContext() {
  return useContext(AuthCont);
}

export function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

//   function register(email, password, userName) {
//     return auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
//       userCredential.user.sendEmailVerification();
//       return userCredential.user.updateProfile({
//         displayName: userName,
//       })
//     })
//   }

//   function login(email, password) {
//     auth.signInWithEmailAndPassword(email, password);
//   }

//   function logout() {
//     return auth.signOut();
//   }
//   function setProfileName(name) {
//     return currentUser.updateProfile({
//       displayName: name,
//     })
//   }

  useEffect(() => {
    const unsubsribe = AuthConfig.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        setIsLoading(false);
      } else {
        setCurrentUser("");
        setIsLoading(false);
      }
    });
    return unsubsribe;
  }, []);

  const value = {
    currentUser
  };

  return (
    <AuthCont.Provider value={value}>
      {!isLoading && props.children}
    </AuthCont.Provider>
  );
}
export default AuthProvider
// export const AuthContext = createContext();





//  const AuthProvider = (props) =>{
//     const { children } = props;
//     const [usuario, setUsuario] = useState(null);
//     const [aguardando, setAguardando] = useState(true);

//     useEffect(() => {
//        const subscribe = AuthConfig.auth().onAuthStateChanged((user) =>{
//           if(user){
//             setUsuario(user);
//             setAguardando(false);
//           }else{
//             setUsuario("");
//             setAguardando(false);
//           }
           
//         });
//         return subscribe
//     },  []);

//     if (aguardando) {
//         return <>Carregando...</>;
//     }
//     const value = {usuario};
//     return(
//         <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
//     );
    
// };
// export default AuthProvider;