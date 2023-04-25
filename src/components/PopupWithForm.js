import React from 'react';

function PopupWithForm({ isOpen, onClose, children, name, title, buttonText }) {
  return ( 
    <div className={`popup ${isOpen && 'popup_opened'} popup_type_${name}`}>
      <div className= 'popup__container'>
        <button type="button" onClick={onClose} className="popup__close-btn" name="form-close" aria-label="Закрыть" />
        <h3 className="popup__title">{title}</h3>
        <form action="#" className="popup__form" name={name} noValidate>
          {children}
          <button type="submit" className="popup__button" name="form-submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
