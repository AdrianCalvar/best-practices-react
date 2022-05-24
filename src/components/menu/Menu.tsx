import React from 'react';
import './styles.scss';
import { useNavigate } from "react-router-dom";


export function Menu ()
{
  let navigate = useNavigate();

  async function onClickRedirect ( event: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string )
  {
    event.preventDefault();
    const route = '/' + name;
    navigate( route, { replace: false } );

  };
  return (
    <div className='main-menu-container'>
      <h1>BUENAS PRÁCTICAS</h1>
      <div className='separator' />
      <div className='card-container'>
        <div onClick={ ( event ) => onClickRedirect( event, 'arquitectura' ) } className='card architecture'>
          <div className='gradient-card'>
          </div>
          <div className='content'>
            <div className='link-text-div'>
              <a href='/arquitectura'>Arquitectura y DOM</a>
            </div>
          </div>
        </div>
        <div onClick={ ( event ) => onClickRedirect( event, 'clasesvsfunciones' ) } className='card clasesvsfunciones'>
          <div className='gradient-card'>
          </div>
          <div className='content'>
            <div className='link-text-div'>
              <a href="/clasesvsfunciones">Clases vs Funciones</a>
            </div>
          </div>
        </div>
        <div onClick={ ( event ) => onClickRedirect( event, 'hooks' ) } className='card redux'>
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

