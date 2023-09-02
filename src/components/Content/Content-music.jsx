import React from 'react';
import contentMusic from '../../utils/content-dance.json';

const Content_music = () => {
    return (
      <section className="content-wrapper">
        <div className="paddings innerWidth content-container">
          <h1 className="primaryText"style={{ fontSize: "2.2rem" }}>{contentMusic.title}</h1>
          {contentMusic.sections.map((section, index) => (
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
  
  export default Content_music;