import React from 'react';

interface Props
{
  user: string;
}
const ProfilePage: React.FC<Props> = ( props ) =>
{
  const showMessage = () =>
  {
    alert( 'Siguiendo ' + props.user );
  };

  const handleClick = () =>
  {
    setTimeout( showMessage, 3000 );
  };

  return (
    <button onClick={ handleClick }>Seguir</button>
  );
};

export default ProfilePage;
