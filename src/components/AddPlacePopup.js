import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isSaving, onValidation, errorText}) {
  const [placeData, setPlaceData] = useState({ name: '', link: ''});
  
  function handleInputChange(e) {
    const { name, value } = e.target;
    setPlaceData(prevState => ({...prevState, [name]: value}));
    onValidation(e);
  }

  const { name, link } = placeData;

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(placeData);
  }

  useEffect(() => {
    setPlaceData({ name: '', link: ''});
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name='card-form'
      title='Новое место'
      buttonText={isSaving ? 'Сохранение...' : 'Создать'}
      onSubmit={handleSubmit}
      isFormValid={
        Object.values(errorText).every(i => i === '') 
        && Object.values(placeData).every(i => i !== '') 
      }
    >
      <fieldset className="popup__fieldset">
        <input
          id="title-input"
          type="text"
          className={`popup__input ${errorText.name && 'popup__input_type_error'}`}
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required="required"
          value={name}
          onChange={handleInputChange}
        />
        <span className="popup__error popup__error_visible">{errorText.name}</span>
        <input
          id="url-input"
          type="url"
          className={`popup__input ${errorText.link && 'popup__input_type_error'}`}
          name="link"
          placeholder="Ссылка на картинку"
          required="required"
          value={link}
          onChange={handleInputChange}
        />
        <span className="popup__error popup__error_visible">{errorText.link}</span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;