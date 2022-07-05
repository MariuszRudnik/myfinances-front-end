import React from 'react';
import './App.css';
import './styles/style.scss';

import Nav from "./components/nav/Nav";
import {Login} from "./pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Register} from "./pages/Register";
import {MainProvider} from "./provider/mainProvider";
import {Start} from "./pages/Start";



function App() {
    return (
      <BrowserRouter>
          <MainProvider>
                <div className="App">
                      <Nav/>
                      <main className="o-container">
                          <Routes>
                              <Route path="/*"  element={ <Start/>} />
                              <Route path="/login" element={ <Login/>} />
                              <Route path="/register" element={ <Register/>} />
                          </Routes>
                      </main>
                </div>
          </MainProvider>
      </BrowserRouter>
  );
}

export default App;
