import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children })=>{
    const [user, setUser] = useState();
    useEffect(()=>{
        const userToken = localStorage.getItem("user_token");
        const userDb = localStorage.getItem("users-bd");

        if(userDb && userToken){
            const hasUser = JSON.parse(userDb)?.filter(
                (user)=>user.email === JSON.parse(userToken).email
            )
            if(hasUser) setUser(hasUser[0]);
        };

    }, [])

    const singin = (email, password)=>{
        const userDb = JSON.parse(localStorage.getItem("users_bd"));
        const hasUser = userDb?.filter((user) => user.email === email);
        console.log(hasUser)

        if(hasUser?.length){
            if(hasUser[0].email === email && hasUser[0].password === password){
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({email, token}))
                setUser({email, password});
                return;
            }else{
                return "Email ou senha incorretos";
            }
        }else{
            return "Email ou senha incorretos";
        }
    }

    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    
        const hasUser = usersStorage?.filter((user) => user.email === email);
    
        if (hasUser?.length) {
          return "Já tem uma conta com esse E-mail";
        }
    
        let newUser;
    
        if (usersStorage) {
          newUser = [...usersStorage, { email, password }];
        } else {
          newUser = [{ email, password }];
        }
    
        localStorage.setItem("users_bd", JSON.stringify(newUser));
    
        return;
      };

      


    return(
        <AuthContext.Provider value={ {authenticad: !!user, user, setUser, singin, signup} }>
            { children }
        </AuthContext.Provider>
    )
}

