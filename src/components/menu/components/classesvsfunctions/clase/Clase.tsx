import React from 'react';

interface Props
{
  user: string;
}
class Clase extends React.Component<Props>
{
  showMessage = () =>
  {
    alert( 'Siguiendo ' + this.props.user );
  };

  handleClick = () =>
  {
    setTimeout( this.showMessage, 3000 );
  };

  render ()
  {
    return <button onClick={ this.handleClick }>Seguir</button>;
  }
}

export default Clase;
