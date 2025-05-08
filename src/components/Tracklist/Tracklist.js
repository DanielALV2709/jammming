import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

function Tracklist() {
  return (
    <div className="Tracklist">
      {/* Las tracks se mapearán aquí dinámicamente luego */}
      <Track />
      <Track />
      <Track />
    </div>
  );
}

export default Tracklist;