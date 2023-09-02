import React from 'react';
import contentArchitecture from '../../utils/content-architecture.json';

const Content_architecture = () => {

  // const cardIndex = match.params.index; //It can be 1 also
  // const contentData = contentArchitecture.sections[cardIndex];
    return (
      <section className="content-wrapper">
        <div className="paddings innerWidth content-container">
          <h1 className="primaryText" style={{ fontSize: "2.2rem" }}>{contentArchitecture.title}</h1>
          {contentArchitecture.sections.map((section, index) => (
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
  
  export default Content_architecture;

//   return (
//     <section className="content-wrapper">
//       <div className="paddings innerWidth content-container">
//         <h1 className="primaryText" style={{ fontSize: "2.2rem" }}>{contentData.title}</h1>
//         <div>
//           <div className="flexCenter">
//             <h2 className="orangeText">{contentData.subtitle}</h2>
//           </div>
//           <p>{contentData.content}</p>
//         </div>
//       </div>
//     </section>
//   );
// };