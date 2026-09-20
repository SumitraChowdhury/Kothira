import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} 
from "react-router-dom";
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
import Message from './pages/Message';
import Notification from './pages/Notification';
import Setting from './pages/Setting';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Registration />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/message" element={<Message />}></Route>
      <Route path="/notification" element={<Notification />}></Route>
      <Route path="/setting" element={<Setting />}></Route>
    </>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App