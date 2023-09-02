import React from 'react';
import contentArtCraft from '../../utils/content-art_craft.json';

const Content_art = () => {
    return (
      <section className="content-wrapper">
        <div className="paddings innerWidth content-container">
          <h1 className="primaryText" style={{ fontSize: "2.2rem" }}>{contentArtCraft.title}</h1>
          {contentArtCraft.sections.map((section, index) => (
            <div key={index}>
              <div className="flexCenter">
                <h2 className="orangeText">{section.title}</h2>
              </div>
              <p className>{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Content_art;