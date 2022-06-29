import React from 'react';
import './App.css';
import Nav from "./components/nav/Nav";
import {Login} from "./pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Register} from "./pages/Register";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
              <Nav/>
              <main className="form-signin">

                      <Routes>
                          <Route path="/"  element={ <Home/>} />
                          <Route path="login" element={ <Login/>} />
                          <Route path="/register" element={ <Register/>} />
                      </Routes>

              </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
