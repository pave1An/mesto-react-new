import React from 'react';

function Card({ card, onCardClick }) {
  return (
    <li className="element">
      <button type="button" className="element__trash" name="trash" aria-label="Удалить" />
      <img className="element__image" src={card.link} alt={card.name} onClick={() => onCardClick(card)}/>
      <div className="element__bottom">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-area">
          <button type="button" className="element__like" name="like" aria-label="Лайк" />
          <span className="element__number-of-likes">0</span>
        </div>
      </div>
    </li>
  );
}

export default Card;