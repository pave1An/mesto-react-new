import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userData, setUserData] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userInfo, cards]) => {
      setUserData({
        userName: userInfo.name,
        userDescription: userInfo.about,
        userAvatar: userInfo.avatar,
      });
      setCards(cards);
    })
    .catch(err => console.log(`Ошибка: ${err.status}`));
  },[]);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-area">
          <img className="profile__avatar" src={userData.userAvatar} alt="аватар профиля"/>
          <button type="button" onClick={onEditAvatar} className="profile__avatar-edit-btn" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userData.userName}</h1>
          <button type="button" onClick={onEditProfile} className="profile__edit-btn" name="profile-edit" aria-label="Редактировать профиль" />
          <p className="profile__job">{userData.userDescription}</p>
        </div>
        <button type="button" className="profile__add-btn" onClick={onAddPlace} name="profile-add" aria-label="Добавить фото" />
      </section>

      <div className="popup popup_type_confirmation">
        <div className="popup__container">
          <button type="button" className="popup__close-btn" name="form-close" aria-label="Закрыть">
          </button>
          <h3 className="popup__title">Вы уверены?</h3>
          <button type="button" className="popup__button" name="delete-card" aria-label="Удалить карточку">Да</button>
        </div>
      </div>

      <section className="photo-grid">
        <ul className="photo-grid__list">
          {cards.map((card) => <Card key={card._id} card={card} onCardClick={onCardClick} />)}
        </ul>
      </section>
    </main>
  );
}

export default Main;
