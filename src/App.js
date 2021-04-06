import React, { useState, useEffect } from "react"
import './App.css';
import { getTokenFromUrl } from './spotify'
import Login from "./Login/Login"


function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""
    //hash is object includes access-token
    const _token = hash.access_token
    if (_token) {
      setToken(_token)
    }
  }, []);


  return (
    <div className="app">
      {token ? (<h1>Logged in</h1>) : <Login />}
    </div>
  )
}

export default App;
