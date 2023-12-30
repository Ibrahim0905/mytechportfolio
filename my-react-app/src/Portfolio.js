import React from 'react';
import fitness from './Images/fitness.jpeg';
import realtor from './Images/realtor.jpeg';
import hopeservice from './Images/hopeservice.webp';


function Portfolio() {
  return (
    <section className="section__container portfolio__container" id="portfolio">
      <h2 className="section__header">My Portfolio</h2>
      <p className="section__description">
        Explore a showcase of my diverse projects, demonstrating my skills in
        web development, design, and beyond. Each project reflects my passion
        for creating impactful and innovative web and digital experiences.
      </p>
    
        <div className="portfolio__card">
          <img src={realtor} alt="portfolio" />
          <div className="portfolio__details">
            <h3>real estate website</h3>
            <a  style={{ color: 'orange', textDecoration: 'none' }} href="https://ibrahim0905.github.io/realtor/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
        <div className="portfolio__card">
          <img src={hopeservice} alt="portfolio" />
          <div className="portfolio__details">
            <h3>electronic landing page</h3>
            <a style={{ color: 'orange', textDecoration: 'none' }} href="https://ibrahim0905.github.io/hopeservice/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
        <div className="portfolio__card">
          <img src={fitness} alt="portfolio" />
          <div className="portfolio__details">
            <h3>gym website</h3>
            <a  style={{ color: 'orange', textDecoration: 'none' }} href="https://ibrahim0905.github.io/fitnesswebsite/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
