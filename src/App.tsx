import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Arquitectura from './components/menu/components/arquitectura/Arquitectura';
import ArquitecturaExample1 from './components/menu/components/arquitectura/components/ArquitecturaExample1/ArquitecturaExample1';
import ClasesVsFunciones from './components/menu/components/classesvsfunctions/ClasesVsFunciones';
import Hooks from './components/menu/components/Hooks';
import { Menu } from './components/menu/Menu';

function App ()
{
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={ <Menu /> } />
          <Route path="/arquitectura" element={ <Arquitectura /> } />
          <Route path="/arquitectura/example1" element={ <ArquitecturaExample1 /> } />
          {/* <Route path="/arquitectura/example2" element={ <ArquitecturaExample2 /> } /> */ }
          <Route path="/clasesvsfunciones" element={ <ClasesVsFunciones /> } />
          <Route path="/hooks" element={ <Hooks /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
