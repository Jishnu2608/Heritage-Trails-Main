import React from 'react';
import contentFestivals from '../../utils/content-festivals.json';

const Content_festivals = () => {
    return (
      <section className="content-wrapper">
        <div className="paddings innerWidth content-container">
          <h1 className="primaryText" style={{ fontSize: "2.2rem" }}>{contentFestivals.title}</h1>
          {contentFestivals.sections.map((section, index) => (
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
  
  export default Content_festivals;