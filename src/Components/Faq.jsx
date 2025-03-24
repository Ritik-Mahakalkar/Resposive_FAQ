import { useState } from "react";
import './Faq.css'
import { faqData } from "../assets/assets";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>FAQ's</h2>
      {faqData.map((item, index) => (
        <div key={index}   className={`faq-item ${openIndex === index ? "active" : ""}`} onClick={() => toggleFAQ(index)} >
          <div className="faq-question">
            <span>{item.question}</span>
            <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
          </div>
          <div
            className="faq-answer"
            style={{ maxHeight: openIndex === index ? "150px" : "0", opacity: openIndex === index ? 1 : 0, transition: "max-height 0.4s ease-out, opacity 0.3s ease-in",  }}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
