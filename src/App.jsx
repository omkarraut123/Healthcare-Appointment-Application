import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import HomePage from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function App() {
 
  return (
    <>   
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
   
    </>
  )
}

export default App
