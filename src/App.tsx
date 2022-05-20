import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Arquitectura from './components/menu/components/Arquitectura';
import ClasesVsFunctiones from './components/menu/components/classesvsfunctions/ClasesVsFunctiones';
import Redux from './components/menu/components/Redux';
import { Menu } from './components/menu/Menu';

function App ()
{
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={ <Menu /> } />
          <Route path="/arquitectura" element={ <Arquitectura /> } />
          <Route path="/clasesvsfunciones" element={ <ClasesVsFunctiones /> } />
          <Route path="/redux" element={ <Redux /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
