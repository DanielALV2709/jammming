import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

function Playlist() {
  return (
    <div className="Playlist">
      <input defaultValue="New Playlist" />
      <Tracklist />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;