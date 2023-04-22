import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    setFormData({
      name: 'avatar-edit',
      title: 'Обновить аватар',
      buttonText: 'Сохранить',
      children: 
        <fieldset className="popup__fieldset">
          <input
            id="avatar-input"
            type="url"
            className="popup__input"
            name="avatar"
            placeholder="Ссылка на изображение"
            required="required"
          />
          <span className="popup__error avatar-input-error"></span>
        </fieldset>
    });
    setIsOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    setFormData({
      name: 'profile-form',
      title: 'Редактировать профиль',
      buttonText: 'Сохранить',
      children: 
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
          />
          <span className="popup__error job-input-error"></span>
        </fieldset>
    });
    setIsOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    setFormData({
      name: 'card-form',
      title: 'Новое место',
      buttonText: 'Создать',
      children: 
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
          />
        <span className="popup__error title-input-error"></span>
        <input
          id="url-input"
          type="url"
          className="popup__input"
          name="link"
          placeholder="Ссылка на картинку"
          required="required"
        />
        <span className="popup__error url-input-error"></span>
      </fieldset>
    });
    setIsOpen(true);
  }

  function handleCardClick(card) { 
    setSelectedCard(card);
  }

  function closeAllPopups(){
    setIsOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
    setFormData({});
  }
  
  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onClose={closeAllPopups}
      />
      <PopupWithForm 
        isOpen={isOpen} 
        onClose={closeAllPopups} 
        formData={formData}
      />
      <ImagePopup card={selectedCard} closeAllPopups={closeAllPopups} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
