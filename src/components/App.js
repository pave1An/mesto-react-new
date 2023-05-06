import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import AddPlacePopup from './AddPlacePopup';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({ name: '', about: '' });
  const [cards, setCards] = React.useState([]);

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

  function handleCardLike(card, isLiked) { 
    api.clickLike(card._id, isLiked)
    .then((res) => setCards(cards => cards.map(c => c._id === card._id ? res : c)))
    .catch((err) => console.log(`Ошибка: ${err.status}`));
  }

  function handleCardDelete(cardId) {
    api.deleteCard(cardId)
    .then(() => setCards(cards => cards.filter(с => с._id !== cardId)))
    .catch((err) => console.log(`Ошибка: ${err.status}`));
  }

  function handleUpdateUser(userData) {
    api.patchUserInfo(userData)
    .then(res => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch(err => console.log(`Ошибка: ${err.status}`));
  }

  function handleUpdateAvatar(avatar) {
    api.patchAvatar(avatar)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch(err => console.log(`Ошибка: ${err.status}`));
  }

  function handleAddPlaceSubmit(card) {
    api.postCard(card)
    .then(newCard => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch(err => console.log(`Ошибка: ${err.status}`));
  }

  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([user, cards]) => {
      setCurrentUser(user);
      setCards(cards);
    })
    .catch((err) => console.log(`Ошибка: ${err.status}`));
  },[]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onClose={closeAllPopups}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup 
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <PopupWithForm
          isOpen={false}
          onClose={closeAllPopups}
          name='confirmation'
          title='Вы уверены?'
          buttonText='Да'
        />
        <ImagePopup card={selectedCard} closeAllPopups={closeAllPopups} onClose={closeAllPopups} />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
