import React, { useState } from 'react';
// interface ContadorUI
// {
//   count: number;
// }

const Contador = () =>
{
  const [ count, setCount ] = useState<number>( 0 );
  console.log( 'Renderizo Contador' );
  return ( <>
    <p>Contador: { count }</p>;
    <button onClick={ () => setCount( count + 1 ) }>Aumentar Contador</button>;
  </>
  );

};

export default Contador;