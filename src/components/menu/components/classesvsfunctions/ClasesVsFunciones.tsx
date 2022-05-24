import React, { useState } from 'react';
import Clase from './clase/Clase';
import './styles.scss';
import Funcion from './funcion/Funcion';
const ClasesVsFunciones = () =>
{
  const [ user, setUser ] = useState( 'Paco' );

  return (
    <div className='classvsfunctions-main'>
      <label>
        <b>Elige un perfil: </b>
        <select
          value={ user }
          onChange={ e => setUser( e.target.value ) }
        >
          <option value="Paco">Paco</option>
          <option value="Antonia">Antonia</option>
          <option value="Susna">Susna</option>
        </select>
      </label>
      <h1>Bienvenido al perfil de { user }!</h1>
      <div className='components'>
        <div className='componets-centering-div'>

          <div>
            <Funcion user={ user } />
            <b> (function)</b>
          </div>
          <div>
            <Clase user={ user } />
            <b> (class)</b>
          </div>
        </div>
      </div>
    </div> );
};

export default ClasesVsFunciones;