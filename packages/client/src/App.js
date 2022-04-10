import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { LogInPage } from './Pages/LogIn';
import { ProfilePage } from './Pages/Profile';
import { HomePage } from './Pages/Home';
import './App.css';

const App = () => {
  const LogIn = LogInPage();
  const Profile = ProfilePage();
  const Home = HomePage();
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={LogIn} />
        <Route path='/login' element={LogIn} />
        <Route path='/profile' element={Profile} />
        <Route path='/home' element={Home} />
      </Routes>
    </Router>
  );
};

export default App;
