import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(inputRef.current.value);
  }

  return (
    <PopupWithForm 
      isOpen={isOpen} 
      onClose={onClose} 
      name='avatar-edit'
      title='Обновить аватар'
      buttonText='Сохранить'
      onSubmit={handleSubmit}
    >
      <fieldset className='popup__fieldset'>
        <input
          ref={inputRef}
          id='avatar-input'
          type='url'
          className='popup__input'
          name='avatar'
          placeholder='Ссылка на изображение'
          required='required'
        />
        <span className='popup__error avatar-input-error'></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;