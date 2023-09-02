import React from 'react';
import contentDance from '../../utils/content-dance.json';

const Content_dance = () => {
    return (
      <section className="content-wrapper">
        <div className="paddings innerWidth content-container">
          <h1 className="primaryText" style={{ fontSize: "2.2rem" }}>{contentDance.title}</h1>
          {contentDance.sections.map((section, index) => (
            <div key={index}>
              <div className="flexColStart">
                <h2 className="orangeText">{section.title}</h2>
              </div>
              <p style={{color: "#1f3e72"}}>{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Content_dance;