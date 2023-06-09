import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext, useEffect } from "react";
import useFormWithValidation from "../utils/useFormWithValidation";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isSaving }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, resetForm, setValues } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }

  useEffect(() => {
    resetForm();
    setValues(currentUser);
  }, [currentUser, setValues, resetForm, isOpen]);

  return(
    <PopupWithForm 
      isOpen={isOpen} 
      onClose={onClose} 
      name='profile-form'
      title='Редактировать профиль'
      buttonText={isSaving && 'Сохранение...'}
      onSubmit={handleSubmit}
      isFormValid={isValid}
    >
      <fieldset className="popup__fieldset">
        <input
          id="name-input"
          type="text"
          className={`popup__input ${errors.name && 'popup__input_type_error'}`}
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required="required"
          value={values.name || ''}
          onChange={handleChange}
        />
        <span className="popup__error popup__error_visible">{errors.name || ''}</span>
        <input
          id="job-input"
          type="text"
          className={`popup__input ${errors.about && 'popup__input_type_error'}`}
          name="about"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required="required"
          value={values.about || ''}
          onChange={handleChange}
        />
        <span className="popup__error popup__error_visible">{errors.about || ''}</span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;