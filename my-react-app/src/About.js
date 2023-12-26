import React from 'react';
import ibrahim from './Images/ibrahim.jpeg';

function About() {
  return (
    <section className="section__container about__container" id="about">
      <div className="about__image">
       <img src={ibrahim} alt="about" className="about__img" />
      </div>
      <div className="about__content">
        <h2 className="section__header">Bit About Me</h2>
        <p className="section__description">
          A passionate web developer with a creative flair and a knack for
          turning visions into reality. My journey in web development began with
          a fascination for coding and design, and it has evolved into a career
          where I blend aesthetics with functionality. With a focus on user
          experience and a commitment to staying updated with the latest
          industry trends, I'm dedicated to creating web solutions that not only
          meet but exceed expectations.
        </p>
      </div>
    </section>
  );
}

export default About;

