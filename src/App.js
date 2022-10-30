import React from 'react'
import Home from './pages/HomePage/Home'
import Login from './pages/LoginPage/Login'
import List from './pages/ListPage/List'
import Single from './pages/SinglePage/Single'
import New from './pages/NewPage/New'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { userInputs, productInputs } from './formSource'

import './style/dark.scss'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'

function App() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add new User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add new Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  )
}

export default App
