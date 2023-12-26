

import React from 'react';

function Skills() {
  return (
    <section className="section__container service__container" id="service">
      <h2 className="section__header">My Best SKills</h2>
      <div className="service__grid">
        <div className="service__card">
          <span><i className="ri-window-fill"></i></span>
          <h4>Website Design</h4>
          <p>
            i craft user-friendly interfaces that engage visitors and help 
            achieve  online goals with minimum efforts.
          </p>
        </div>
        <div className="service__card">
          <span><i className="ri-store-line"></i></span>
          <h4>E-commerce Solutions</h4>
          <p>
            i build secure, scalable, and user-centric online stores that
            enhance the shopping experience and drive conversions.
          </p>
        </div>
        <div className="service__card">
          <span><i className="ri-share-fill"></i></span>
          <h4>Front End development</h4>
          <p>
            My service is to create attractive user interfaces website that customers will be proud of the work done 
            i use the language like :html,css, javascript and it's framework React js 
          </p>
        </div>
        <div className="service__card">
          <span><i className="ri-share-circle-line"></i></span>
          <h4>Other </h4>
          <p>
           i am a gospel and religious book writter 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
