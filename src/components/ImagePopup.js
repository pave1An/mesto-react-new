import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_image popup_background_dark ${card.link && 'popup_opened'}`}>
      <div className="popup__image-container">
        <button 
          type="button" 
          className="popup__close-btn" 
          name="form-close" 
          aria-label="Закрыть"
          onClick={onClose}
        >
        </button>
        <img src= {card.link} alt={card.name} className="popup__image-view"/>
        <p className="popup__image-title">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;