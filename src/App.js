import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import Signin from 'pages/Signin'
import Cart from 'pages/Cart'
import Home from 'pages/Home'
import DashBoard from 'pages/Dashboard'
import { AuthProvider, RequireAuth } from 'store/auth-context'
import { ListItem } from 'pages/ListItem'
import { Signup } from 'pages/Signup'
import { ProfileUser } from 'pages/ProfileUser'
import { InforItem } from 'pages/InforItem'
import { Contruction } from 'pages/Contruction'
import { ListPost } from 'pages/ListPost'
import { ProductContextProvider } from 'store/product-context'
import { Pay } from 'pages/Pay'
import Layout from 'components/layout'

function App() {
  return (
    <AuthProvider>
      <ProductContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route
              path="/admin"
              element={
                <RequireAuth>
                  <DashBoard />
                </RequireAuth>
              }
            />
            <Route
              path="/cart"
              element={
                <RequireAuth>
                  <Cart />
                </RequireAuth>
              }
            />
            <Route path="/list-item" element={<ListItem />} />
            <Route path="signup" element={<Signup />} />
            <Route
              path="profile-user"
              element={
                <RequireAuth>
                  <ProfileUser />
                </RequireAuth>
              }
            />
            <Route path="infor-item/:id" element={<InforItem />} />
            <Route path="contruction" element={<Contruction />} />
            <Route path="list-post" element={<ListPost/>}/>
            <Route path='/pay' element={<Pay/>}/>
          </Route>
        </Routes>
      </ProductContextProvider>
    </AuthProvider>
  )
}

export default App
