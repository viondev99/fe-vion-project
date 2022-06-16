import React, { useContext } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { postAuth, putAuth, getAuth } from '../services'
import {
  clear,
  loadFromStorage,
  saveToStorage,
} from '../common/utils/storage'

export const AuthContext = React.createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(loadFromStorage('User'))
  const signup = async (newUser, callback) => {
    const data = { email: newUser.email, password: newUser.password }
    await postAuth(
      'http://localhost:3000/api/v1/auth/signup',
      data
    )

    callback()
  }

  const signin = async (newUser, callback) => {
    const data = { email: newUser.user.email, password: newUser.user.pass }
    const response = await postAuth(
      'http://localhost:3000/api/v1/auth/login',
      data
    )

    setUser({ ...response.data.data, email: newUser.user.email })

    saveToStorage('User', { ...response.data.data, email: newUser.user.email })

    callback()
  }

  const signout = () => {
    setUser({ email: null, password: null, pass: null})
    clear()
  }

  const changeProfile = async (newUser, callback) => {
    try {
      const data = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        address1: newUser.address1,
        address2: newUser.address2,
      }
      await putAuth('http://localhost:3000/api/v1/user', data)
      callback()
    } catch (error) {
      console.log(error)
    }
    
  }

  const getUserInfor = async () => {
    const response = await getAuth('http://localhost:3000/api/v1/user')
    const dataUser = loadFromStorage('User')
    const updateDataUser = {
      access_token: dataUser.access_token,
      ...response.data.data,
    }

    setUser(updateDataUser)
    saveToStorage('User', updateDataUser)
  }

  const isUserLoggedIn = Boolean(user?.access_token)

  const value = {
    signup,
    signin,
    signout,
    changeProfile,
    getUserInfor,
    user,
    isUserLoggedIn,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function RequireAuth({ children }) {
  const auth = useContext(AuthContext)
  const location = useLocation()

  if (!auth.isUserLoggedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }

  return children
}
