import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import ProductsList from './components/ProductsList/ProductsList';
const App = () => {
  return (       
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path = '/'element={<><Filters/><ProductsList/></>} />
    <Route path ='/ add' element ={<h1>Add Form</h1>} />
    <Route path = '/'element={<h1>Edit Form</h1>}  />
    <Route path ='/ add' element ={<h1>Contacts</h1>} />    
  </Routes>
  <h1>Footer</h1>
  </BrowserRouter>      
  );
};

export default App;