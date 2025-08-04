
import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';
import PorfileUpdate from './pages/ProfileUpdate/PorfileUpdate';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/profile' element={<PorfileUpdate/>} />
      </Routes>
    </>
  )
}
export default App;
