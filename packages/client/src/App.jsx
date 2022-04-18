import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthPage from "./screens/Auth/AuthPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" />
        <Route path="/users" />
        <Route path="/" component={AuthPage} />
      </Routes>
    </Router>
  )
}

export default App
