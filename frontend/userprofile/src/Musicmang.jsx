import React, { useState } from 'react';
import Slider from './Slider';
import Albums from './Albums';

const Musicmang = () => {
  const [albums, setAlbums] = useState([
    { id: 1, title: 'Album 1', songs: [] },
    { id: 2, title: 'Album 2', songs: [] },
  ]);

  const addSongToAlbum = (albumId, song) => {
    setAlbums((prevAlbums) =>
      prevAlbums.map((album) =>
        album.id === albumId ? { ...album, songs: [...album.songs, song] } : album
      )
    );
  };

  const deleteAlbum = (albumId) => {
    setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== albumId));
  };

  const deleteSongFromAlbum = (albumId, songIndex) => {
    setAlbums((prevAlbums) =>
      prevAlbums.map((album) =>
        album.id === albumId ? { ...album, songs: album.songs.filter((_, i) => i !== songIndex) } : album
      )
    );
  };

  return (
    <div>
      <h1>Music App</h1>
      {albums.map((album) => (
        <Albums
          key={album.id}
          album={album}
          addSongToAlbum={addSongToAlbum}
          deleteAlbum={deleteAlbum}
          deleteSongFromAlbum={deleteSongFromAlbum}
        />
      ))}
      <Slider songs={albums.flatMap((album) => album.songs)} />
    </div>
  );
};

export default Musicmang;
