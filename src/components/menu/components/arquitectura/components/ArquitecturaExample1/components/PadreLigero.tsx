import React from 'react';
import { useRenderCount } from '../../../hooks/useRenderCount';
import './styles.scss';
interface PadreLigeroUI
{
  children?: React.ReactNode;
}
const PadreLigero: React.FC<PadreLigeroUI> = ( props ) =>
{
  const [ count ] = useRenderCount();
  console.log( 'Renderizando padre' );
  return ( <div className='parent'>
    <p>Padre</p>
    <img src={ require( '../assets/parent.jpg' ) } alt='' />
    <p>Renderizados Padre: { count }</p>
    { props.children }</div > );

};

export default PadreLigero;