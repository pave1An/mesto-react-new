import Header from './Header';
import Registration from './Registration';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({ name: '', about: '' });
  const [cards, setCards] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [deletionCardId, setDeletionCardId] = useState('');
  const [errorText, setErrorText] = useState({});
 
  function setValidationMessage(e) {
    setErrorText((prevValue) => (
      { ...prevValue, [e.target.name]: e.target.validationMessage }
    ));
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  
  function handleCardClick(card) { 
    setSelectedCard(card);
  }
  
  function handleDeleteClick(cardId) {
    setIsDeleteCardPopupOpen(true);
    setDeletionCardId(cardId);
  }

  function handleCardLike(card, isLiked) { 
    api.clickLike(card._id, isLiked)
    .then((res) => setCards(cards => cards.map(c => c._id === card._id ? res : c)))
    .catch((err) => console.log(`Ошибка: ${err.status}`));
  }

  function handleCardDelete() {
    setIsSaving(true);
    api.deleteCard(deletionCardId)
    .then(() => {
      setCards(cards => cards.filter(с => с._id !== deletionCardId));
      closeAllPopups();
    })
    .catch((err) => console.log(`Ошибка: ${err.status}`))
    .finally(() => setIsSaving(false));
  }

  function handleUpdateUser(userData) {
    setIsSaving(true);
    api.patchUserInfo(userData)
    .then(res => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => console.log(`Ошибка: ${err.status}`))
    .finally(() => setIsSaving(false));
  }
  
  function handleUpdateAvatar(avatar) {
    setIsSaving(true);
    api.patchAvatar(avatar)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => console.log(`Ошибка: ${err.status}`))
    .finally(() => setIsSaving(false));
  }

  function handleAddPlaceSubmit(card) {
    setIsSaving(true);
    api.postCard(card)
    .then(newCard => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err) => console.log(`Ошибка: ${err.status}`))
    .finally(() => setIsSaving(false));
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard({});
    setErrorText({});
  }

  useEffect(() => {
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
        <Routes>
          <Route path='/' element={
            <Main 
              onEditProfile={handleEditProfileClick} 
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onClose={closeAllPopups}
              onCardLike={handleCardLike}
              onCardDelete={handleDeleteClick}
              cards={cards}
            />}
          />
        </Routes>
        <Registration />
        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isSaving={isSaving}
          onValidation={setValidationMessage}
          errorText={errorText}
          />
        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isSaving={isSaving}
          onValidation={setValidationMessage}
          errorText={errorText}
          />
        <AddPlacePopup 
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isSaving={isSaving}
          onValidation={setValidationMessage}
          errorText={errorText}
          />
        <DeleteCardPopup
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          onDeleteCard={handleCardDelete}
          isSaving={isSaving}
          />
        <ImagePopup card={selectedCard} closeAllPopups={closeAllPopups} onClose={closeAllPopups} />
        {/* <Footer /> */}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
