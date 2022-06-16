import React from 'react'
import { postAuth, putAuth, getAuth } from '../services'
import { loadFromStorage, removeFromStorage, saveToStorage } from '../common/utils/storage'

export const AuthContext = React.createContext(null)

export function AuthProvider({children}) {
    let [user, setUser] = React.useState(loadFromStorage('User')
    )
    let signup = async(newUser, callback) => {

        const data = {email: newUser.email, password: newUser.password}
        const response = await postAuth('http://localhost:3000/api/v1/auth/signup', data )

        setUser(response.data.data)
        saveToStorage('User', response.data.data)

        callback()

    }

    let signin = async(newUser, callback) => {
        const data = {email: newUser.user.email, password: newUser.user.pass}
        const response = await postAuth('http://localhost:3000/api/v1/auth/login', data)

        setUser({...response.data.data, email: newUser.user.email})
        
        
        saveToStorage('User', {...response.data.data, email: newUser.user.email})   

        callback()

    }
       
    let signout = () => {
        
        setUser({email: null, password: null, pass: null, id: null})
        removeFromStorage('User')   
    }


    const changeProfile = async(newUser, callback) => {
        try {
            const data = {
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    address1: newUser.address1,
                    address2: newUser.address2
            }
            const response = await putAuth('http://localhost:3000/api/v1/user', data)
            
        }
        catch (error) {
            console.log(error)
        }
        callback();
    }

    const getUserInfor = async(newUser, callback) => {
        const response = await getAuth('http://localhost:3000/api/v1/user')
        const dataUser = loadFromStorage('User' )

        const updateDataUser = {
            access_token: dataUser.access_token,
            ...response.data.data
        }

        setUser(updateDataUser)
        saveToStorage('User', updateDataUser)

    }

    let value = { signup, signin, signout, changeProfile, getUserInfor, user };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function RequireAuth({children}) {
    let auth = React.useContext(AuthContext)
    console.log({auth})
    // neu user chua login -> login page
    // else return ra children
}

// 1. tao context 
// 2. define 1 provider - truyen data vao cac component bang provider mma no da wrap
// 3. truyen vao provider data, wrap vao
// 4. su dung useContext de nhan data



