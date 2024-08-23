// import React, {  createContext, useContext, useState } from 'react'
// import { View } from 'react-native'
// import { RegisterFirebaseRequest } from './authentication.service';

// export const AuthenticationContext = createContext();

// function AuthenticationContextcomponent({children}) {
//     const [user,setUser] = useState(null);
//     const [error,setError] = useState(null);
//     const [loading,setLoading] = useState(null);
//     const [isAuthenticatedd,setIsAuthenticated] = useState(false);


//     const onRegister =async (singleParameter)=>{
//         const {email,password,confirmPassword}= singleParameter
//         setError("");
//         if(password !== confirmPassword){
//             setError("ERROR: Passwords do not match!")
//             return;
//         }
//         setLoading(true);

//         await RegisterFirebaseRequest(email,password).then(
//             (userInformation) => {
//                 setIsAuthenticated(true);
//                 setUser(userInformation);
//                 console.log("user is logged in",userInformation)
//             }).catch((error)=>{
//             setError(error?.message?.toString());
//         });

//         setLoading(false);
//     };
   

//   return <AuthenticationContext.Provider 
//   value={{
//     user,
//     error,
//     isAuthenticatedd,
//     onRegister,
//     loading,
//     }}
//     >
//     {children}
//   </AuthenticationContext.Provider>
// }

// export default AuthenticationContextcomponent
// export const useAuthenticationContext = () => {
//     return useContext(AuthenticationContext);;
//   };
import React, { createContext, useContext, useState } from 'react';
import { LoginFirebaseRequest, RegisterFirebaseRequest } from './authentication.service';

export const AuthenticationContext = createContext();

function AuthenticationContextcomponent({ children }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onRegister = async ({ email, password, confirmPassword }) => {
       
        setError(null);

        console.log('Registering user:', email);  
        console.log('Password:', password, 'Confirm Password:', confirmPassword);  

        
        if (password !== confirmPassword) {
            setError("ERROR: Passwords do not match!");
            console.log('Passwords do not match!');  
            return;
        }

        setLoading(true);

        try {
            const userInformation = await RegisterFirebaseRequest(email, password);
            setIsAuthenticated(true);
            setUser(userInformation);
            console.log("User is logged in:", userInformation);  
        } catch (error) {
            setError(error?.message?.toString());
            console.log('Error during registration:', error?.message?.toString());  
        } finally {
            setLoading(false);
        }
    };


    const onLogin = async (param) => {
        const { email, password } = param;
        setError(null);
    
        setLoading(true);
        await LoginFirebaseRequest(email, password)
          .then((userInformation) => {
            setIsAuthenticated(true);
            setUser(userInformation);
    
            console.log("user is logged in", userInformation);
          })
          .catch((error) => {
            setError(error?.message?.toString());
          });
        //firebase register method
    
        setLoading(false);
      };

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                error,
                isAuthenticated,
                onRegister,
                loading,
                onLogin,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationContextcomponent;

export const useAuthenticationContext = () => {
    return useContext(AuthenticationContext);
};
