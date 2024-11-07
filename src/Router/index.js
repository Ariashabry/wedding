import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Admin from '../Admin'
import Edit from '../Edit'

export default function Router() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <App />
          </>
        }
      />
      <Route
        path="/tamu"
        element={
          <>
            <App />
          </>
        }
      />
      {/* <Route exact path="/admin" element={<Admin />} /> */}
      {/* <Route exact path="/edittamu/:identifier" element={<Edit />} /> */}
    </Routes>
  )
}
