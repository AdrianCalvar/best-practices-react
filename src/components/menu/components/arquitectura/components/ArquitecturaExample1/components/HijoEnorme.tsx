import React from 'react';
import { useRenderCount } from '../../../hooks/useRenderCount';
import './styles.scss';

// interface IProps
// {
//   music: MusicUI[];
// }
// const songElement = ( song: SongIU ) =>
// {
//   console.log( 'render', song.title );
//   return <p key={ `song ${ song.title }` } > { song.title }</p>;
// };

// const HijoEnorme = ( props: IProps ) =>

const HijoEnorme: React.FC = () =>
{
  const [ counter ] = useRenderCount();
  return (
    <div className='child'>
      <p>Hijo Muy Pesado</p>
      <img src={ require( '../assets/child.png' ) } alt='' />
      <p>Renderizado de Hijo: { counter }</p>
    </div>
  );
};

export default HijoEnorme;