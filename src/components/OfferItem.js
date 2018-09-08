import React from 'react';

const OfferItem = ({image, title, text}) => {
  return (
    <article className="offer__item">
      <header className="offer__item-header">
        <img src={image} alt={title} />
      </header>
      <h3 className="offer__item-title">{title}</h3>
      <p className="offer__item-text">{text}</p>
    </article>
  );
};

export default OfferItem;