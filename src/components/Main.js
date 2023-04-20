import React from 'react';

function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar-edit').classList.add('popup_opened');
  }
  function handleEditProfileClick() {
    document.querySelector('.popup_type_profile-form').classList.add('popup_opened');
  }
  function handleAddPlaceClick() {
    document.querySelector('.popup_type_card-form').classList.add('popup_opened');
  }
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-area">
          <img className="profile__avatar" src="#" alt="аватар профиля"/>
          <button type="button" onClick={handleEditAvatarClick} className="profile__avatar-edit-btn"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <button type="button" onClick={handleEditProfileClick} className="profile__edit-btn" name="profile-edit" ariaLabel="Редактировать профиль">
          </button>
          <p className="profile__job"></p>
        </div>
        <button type="button" className="profile__add-btn" onClick={handleAddPlaceClick} name="profile-add" ariaLabel="Добавить фото">
        </button>
      </section>

      <div className="popup popup_type_confirmation">
        <div className="popup__container">
          <button type="button" className="popup__close-btn" name="form-close" ariaLabel="Закрыть">
          </button>
          <h3 className="popup__title">Вы уверены?</h3>
          <button type="button" className="popup__button" name="delete-card" ariaLabel="Удалить карточку">Да</button>
        </div>
      </div>

      <div className="popup popup_type_avatar-edit">
        <div className="popup__container">
          <button type="button" className="popup__close-btn" name="form-close" ariaLabel="Закрыть">
          </button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form action="#" className="popup__form" name="avatar-form" novalidate>
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
            <button type="submit" className="popup__button" name="form-submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_profile-form">
        <div className="popup__container">
          <button type="button" className="popup__close-btn" name="form-close" ariaLabel="Закрыть">
          </button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form action="#" className="popup__form" name="profile-form" novalidate>
            <fieldset className="popup__fieldset">

              <input
                id="name-input"
                type="text"
                className="popup__input"
                name="name"
                placeholder="Имя"
                minlength="2"
                maxlength="40"
                required="required"
              />
              <span className="popup__error name-input-error"></span>

              <input
                id="job-input"
                type="text"
                className="popup__input"
                name="about"
                placeholder="О себе"
                minlength="2"
                maxlength="200"
                required="required"
              />
              <span className="popup__error job-input-error"></span>

            </fieldset>
            <button type="submit" className="popup__button" name="form-submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_card-form">
        <div className="popup__container">
          <button type="button" className="popup__close-btn" name="form-close" ariaLabel="Закрыть">
          </button>
          <h3 className="popup__title">Новое место</h3>
          <form action="#" className="popup__form" name="card-form" novalidate>
            <fieldset className="popup__fieldset">

              <input
                id="title-input"
                type="text"
                className="popup__input"
                name="name"
                placeholder="Название"
                minlength="2"
                maxlength="30"
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
            <button type="submit" className="popup__button" name="form-submit">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_image popup_background_dark">
        <div className="popup__image-container">
          <button type="button" className="popup__close-btn" name="form-close" ariaLabel="Закрыть"></button>
          <img src="#" alt="" className="popup__image-view"/>
          <p className="popup__image-title"></p>
        </div>
      </div>
      <section className="photo-grid">
        <ul className="photo-grid__list">
        </ul>
      </section>
    </main>
  );
}

export default Main;
