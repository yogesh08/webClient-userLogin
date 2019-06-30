import React from 'react'

const AuthContext = React.createContext({
    user:{
    userName:'',
    email:'',
    password: ''}
})

export function useAuth(){
    return React.useContext(AuthContext);
}