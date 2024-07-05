import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import '../Style/Accordian.css'; // Make sure to create this CSS file
import Row from 'react-bootstrap/esm/Row';

const Accordion = ({ faq }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <div className="accordion">
      <Row>
      {faq.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-title" onClick={() => toggleAccordion(index)}>
            <button className="accordionButton">
              {item.question}
              <span style={{ marginLeft: '10px' }}>
                <FontAwesomeIcon icon={activeIndex === index ? faCircleMinus : faCirclePlus} />
              </span>
            </button>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
      </Row>
    </div>
  );
};

export default Accordion;
