import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md';
import './FAQs.css'; 
import data from '../../utils/accordion';


const FAQs = () => {
    return (
        <section className="v-wrapper">
            <div id="faqs" className="paddings innerWidth flexCenter v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src="./collage 3.jpg" alt="collage"/>
                    </div>
                </div>

            {/*right side*/}

                <div className="flexColStart v-right" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span className="orangeText" style={{ fontSize: "2.2rem" }}>Some FAQs</span>
                    <span className="primaryText" style={{ fontSize: "1.4rem" }}>About our place</span>
     
                

                    <Accordion
                    className="accordion"
                    allowMultipleExpanded={false}
                    preExpanded={[0]}>
                        {
                            data.map((item,i) => {

                                const [className, setClassName] = useState(null)
                                return (
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="flexCenter accordionButton">
                                            <AccordionItemState>
                                                {({expanded}) => 
                                                expanded 
                                                ? setClassName("expanded")
                                                : setClassName("collapsed")
                                                }
                                            </AccordionItemState>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText justifyAlignment" style={{color: "#1f3e72"} }>{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                )
                            })
                        }

                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default FAQs