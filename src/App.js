import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MyRoute from './components/MyRoute';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <MyRoute></MyRoute>
        <Footer></Footer>
      </BrowserRouter> 
    </div>
  );
}

export default App;
