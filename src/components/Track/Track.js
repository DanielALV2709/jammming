import React from 'react';
import './Track.css';

function Track() {
  return (
    <div className="Track">
      <div className="Track-info">
        <h3>Track Name</h3>
        <p>Artist | Album</p>
      </div>
      <button className="Track-action">+</button>
    </div>
  );
}

export default Track;