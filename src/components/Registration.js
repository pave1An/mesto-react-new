import React from 'react';
import { Link } from 'react-router-dom';


function Registration() {

  return (
    <div className='form-section'>
      <h2 className='form-section__header'>Регистрация</h2>
      <form className='form-section__form'>
        <fieldset className='form-section__fieldset'>
          <input className='form-section__input' type='email' placeholder='Email' />
          <span className='form-section__error'></span>
          <input className='form-section__input' type='password' placeholder='Пароль' />
          <span className='form-section__error'></span>
        </fieldset>
        <button type='submit' className='form-section__button' name='form-submit'>Зарегистрироваться</button>
      </form>  
      <span className='form-section__text'>Уже зарегистрированы? <Link className='form-section__link' to='#'>Войти</Link></span>
    </div>
  );
}

export default Registration;