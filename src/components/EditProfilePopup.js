import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useState, useContext, useEffect } from "react";


function EditProfilePopup({ isOpen, onClose, onUpdateUser, isSaving, onValidation, errorText }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  function handleChangeName(e) {
    setName(e.target.value);
    onValidation(e);
  }

  function handleChangeAbout(e) {
    setDescription(e.target.value);
    onValidation(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, about: description });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return(
    <PopupWithForm 
      isOpen={isOpen} 
      onClose={onClose} 
      name='profile-form'
      title='Редактировать профиль'
      buttonText={isSaving && 'Сохранение...'}
      onSubmit={handleSubmit}
      isFormValid={
        Object.values(errorText).every(i => i === '') 
        && name.length > 0 
        && description.length > 0
      }
    >
      <fieldset className="popup__fieldset">
        <input
          id="name-input"
          type="text"
          className={`popup__input ${errorText.name && 'popup__input_type_error'}`}
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required="required"
          value={name}
          onChange={handleChangeName}
        />
        <span className="popup__error popup__error_visible">{errorText.name}</span>
        <input
          id="job-input"
          type="text"
          className={`popup__input ${errorText.about && 'popup__input_type_error'}`}
          name="about"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required="required"
          value={description}
          onChange={handleChangeAbout}
        />
        <span className="popup__error popup__error_visible">{errorText.about}</span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;