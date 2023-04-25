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
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) { 
    setSelectedCard(card);
  }

  function closeAllPopups(){
      setIsEditAvatarPopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
    setSelectedCard({});
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
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} 
        name='avatar-edit'
        title='Обновить аватар'
        buttonText='Сохранить'
        >
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
      </PopupWithForm>

      <PopupWithForm 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
        name='profile-form'
        title='Редактировать профиль'
        buttonText='Сохранить'
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
      </PopupWithForm>

      <PopupWithForm 
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups} 
        name='card-form'
        title='Новое место'
        buttonText='Создать'
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
      </PopupWithForm>
      
      <PopupWithForm
        isOpen={false} 
        onClose={closeAllPopups} 
        name='confirmation'
        title='Вы уверены?'
        buttonText='Да'
      />      
      
      <ImagePopup card={selectedCard} closeAllPopups={closeAllPopups} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
