import React, { useState } from 'react';
import HijoEnorme from './components/HijoEnorme';
import PadreLigero from './components/PadreLigero';
import './styles.scss';
const ArquitecturaExample1 = () =>
{
  const [ count, setCount ] = useState( 1 );
  // const [ music, setMusic ] = useState( musicList );
  const hijo = <HijoEnorme />;


  return ( <div className='counter'>

    <p>Renderizados de Main: { count }</p>
    <button onClick={ () => { setCount( count + 1 ); } }>Re-Render Main</button>
    {/* <button onClick={ () => { setCount( count + 1 ); addSong( music, count, setMusic ); } }>Aumentar Contador</button> */ }
    <div className='container-padre-hijo'>
      <PadreLigero>{ hijo }</PadreLigero>
      {/* <PadreLigero>{ hijo( music ) }</PadreLigero> */ }
    </div>
  </div> );
};

export default ArquitecturaExample1;