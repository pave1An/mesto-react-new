import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [ name, setName] = React.useState('');
  const [ link, setLink] = React.useState('');
  
  
  function handleNameChange(e) {
    setName(e.target.value);
  }
  
  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  return (
    <PopupWithForm 
      isOpen={isOpen} 
      onClose={onClose} 
      name='card-form'
      title='Новое место'
      buttonText='Создать'
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <input
          id="title-input"
          type="text"
          className="popup__input"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required="required"
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error title-input-error popup__error_visible"></span>
        <input
          id="url-input"
          type="url"
          className="popup__input"
          name="link"
          placeholder="Ссылка на картинку"
          required="required"
          value={link}
          onChange={handleLinkChange}
        />
        <span className="popup__error url-input-error popup__error_visible"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;