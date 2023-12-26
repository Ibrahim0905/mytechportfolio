
import React from 'react';
import ibra from './Images/ibra.jpeg';


function Header() {
  return (
    <header className="section__container header__container" id="home">
      <div className="header__image">
        <img src={ibra} alt="header" />
      </div>
      <div className="header__content">
        <div>
          <h1>Ibrahim<br />Web Developper<br />Designer</h1>
        </div>
        <p className="section__description">
          I'm a dedicated web developer with a creative flair and a penchant for
          turning lines of code into captivating online experiences. My journey
          in the digital realm began years ago, and I've since honed my skills
          in front-end and back-end development.
        </p>
        <div className="header__btn">
          <button className="btn">Hire Me Now</button> 
        </div>
      </div>
    </header>
  );
}

export default Header;
