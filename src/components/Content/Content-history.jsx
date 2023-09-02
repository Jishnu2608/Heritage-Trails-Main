import React from 'react';
import contentHistory from '../../utils/content-history.json';

const Content_history = () => {
    return (
      <section className="content-wrapper">
        <div className="paddings innerWidth content-container">
          <h1 className="primaryText" style={{ fontSize: "2.2rem" }}>{contentHistory.title}</h1>
          {contentHistory.sections.map((section, index) => (
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
  
  export default Content_history;