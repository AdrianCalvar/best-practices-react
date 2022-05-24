import { MusicUI } from "../../../types/types";

export const addSong = ( music: MusicUI[], count: number, setMusic: React.Dispatch<React.SetStateAction<MusicUI[]>> ) =>
{
  console.log( 'añado song ' );
  music[ 0 ].albums[ 0 ].songs.push( {
    "title": "Song Creado " + count,
    "length": "4:44"
  } );
  setMusic( music );
};