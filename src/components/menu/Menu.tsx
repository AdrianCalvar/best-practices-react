import React from 'react';
import './styles.scss';
export function Menu ()
{

  return (
    <div className='main-menu-container'>
      <h1>Buenas prácticas React</h1>
      <div className='card-container'>
        <div className='card architecture'>
          <div className='gradient-card'>
          </div>
          <div className='content'>
            <div className='link-text-div'>
              <a href='/arquitectura'>Arquitectura</a>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='content'>
            <div className='link-text-div'>
              <a href="/clasesvsfunciones">Clases vs Funciones</a>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='content'>
            <div className='link-text-div'>
              <a href='/redux'>Redux</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
