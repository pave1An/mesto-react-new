import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAbout(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, about: description });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return(
    <PopupWithForm 
      isOpen={isOpen} 
      onClose={onClose} 
      name='profile-form'
      title='Редактировать профиль'
      buttonText='Сохранить'
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <input
          id="name-input"
          type="text"
          className="popup__input"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required="required"
          value={name}
          onChange={handleChangeName}
        />
        <span className="popup__error name-input-error"></span>
        <input
          id="job-input"
          type="text"
          className="popup__input"
          name="about"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required="required"
          value={description}
          onChange={handleChangeAbout}
        />
        <span className="popup__error job-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;