import React from 'react';
import image404 from '../assets/404.png';
import '../styles/containers/NotFound.styl';

const NotFound = () => {
  return (
    <>
      <div className="NotFound__container">
        <img className="NotFound-image" src={image404} alt="Not Found" />
        <h2>Hmmmm... No encontramos lo que buscas</h2>
      </div>
    </>
  );
};

export default NotFound;
