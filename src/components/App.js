import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <body className="page">
      <Header />
      <Main />
      <Footer />
      

    <template className="template">
      <li className="element">
        <button type="button" className="element__trash" name="trash" ariaLabel="Удалить"></button>
        <img className="element__image" src=" "/>
        <div className="element__bottom">
          <h2 className="element__title"></h2>
          <div className="element__like-area">
            <button type="button" className="element__like" name="like" ariaLabel="Лайк"></button>
            <span className="element__number-of-likes">0</span>
          </div>
        </div>
      </li>
    </template>
    </body>
  );
}

export default App;
