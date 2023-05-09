import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isSaving, onValidation, errorText }) {
  const inputRef = useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(inputRef.current.value);
  }

  function handleInputChange(e) {
    onValidation(e);
  }

  useEffect(() => {
    inputRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm 
      isOpen={isOpen} 
      onClose={onClose} 
      name='avatar-edit'
      title='Обновить аватар'
      buttonText={isSaving && 'Сохранение...'}
      onSubmit={handleSubmit}
      isFormValid={
        Object.values(errorText).every(i => i === '') 
        && inputRef.current.value !== ''
      }
    >
      <fieldset className='popup__fieldset'>
        <input
          ref={inputRef}
          id='avatar-input'
          type='url'
          className={`popup__input ${errorText.avatar && 'popup__input_type_error'}`}
          name='avatar'
          placeholder='Ссылка на изображение'
          required='required'
          onChange={handleInputChange}
        />
        <span className='popup__error popup__error_visible'>{errorText.avatar}</span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;