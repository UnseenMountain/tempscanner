import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import Footer from "./components/Footer"
function App() {
  return (
   <Router>
     <div>
     <Route path="/" exact component={Home}/>
     </div>

      <Footer/>
   </Router>
  );
}

export default App;
