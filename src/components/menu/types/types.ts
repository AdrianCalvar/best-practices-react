export interface ArchitectureState {
  value: number;
}
export interface SongIU
{
  title: string;
  length: string;
}
export interface AlbumIU
{
  title: string;
  songs: SongIU[];

  description: string;
}
export interface MusicUI
{
  name: string;
  albums: AlbumIU[];

}