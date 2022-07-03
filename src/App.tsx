import React from 'react';
import './App.css';
import Nav from "./components/nav/Nav";
import {Login} from "./pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Register} from "./pages/Register";
import {MainProvider} from "./provider/mainProvider";


function App() {
    return (
      <BrowserRouter>
          <MainProvider>
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
          </MainProvider>
      </BrowserRouter>
  );
}

export default App;
