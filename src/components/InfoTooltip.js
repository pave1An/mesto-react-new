import React from 'react';
import failImage from '../images/info-tooltip-fail.svg';
import succesImage from '../images/info-tooltip-succes.svg';

export const InfoTooltip = ({ isOpen, onClose }) => {

  return(
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className= "popup__container">
        <button type="button" onClick={onClose} className="popup__close-btn" name="form-close" aria-label="Закрыть" />
        <img className='popup__tooltip-image' src={succesImage} />
        <p className='popup__tooltip-text'>Вы успешно зарегистрировались!</p>
      </div>
    </div>
  );
}