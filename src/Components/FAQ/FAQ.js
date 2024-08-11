import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
    {
        question: 'What is your return policy?',
        answer: 'Our return policy allows for returns within 30 days of purchase. Items must be in their original condition and packaging.',
      },
      {
        question: 'How do I track my order?',
        answer: 'You can track your order by logging into your account and visiting the "Order History" section.',
      },
      {
        question: 'Do you ship internationally?',
        answer: 'No, we will ship to most countries worldwide in future. Shipping fees and delivery times vary depending on the destination.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept Khalti. For more details, visit our Payment Methods page.',
      },
      {
        question: 'How can I contact customer service?',
        answer: 'You can contact our customer service via email at support@example.com or call us at 9864444444.',
      },
      {
        question: 'Can I cancel my order?',
        answer: 'Yes, you can cancel your order if it has not yet been shipped. Please contact customer service for assistance.',
      },
      {
        question: 'Is my personal information secure?',
        answer: 'Yes, we take the security of your personal information very seriously. We use encryption and other security measures to protect your data.',
      },
      {
        question: 'What if I receive a damaged item?',
        answer: 'If you receive a damaged item, please contact us immediately. We will arrange for a replacement or refund as needed.',
      },
      {
        question: 'How long does shipping take?',
        answer: 'Shipping times vary depending on your location and the shipping method chosen at checkout. Standard shipping typically takes 3-5 business days within the Nepal.',
      },
      {
        question: 'Do you offer gift wrapping?',
        answer: 'Yes, we offer gift wrapping services for an additional fee. You can select the gift wrapping option during checkout.',
      },
      {
        question: 'What is your loyalty program?',
        answer: 'Our loyalty program rewards customers with points for every purchase. Points can be redeemed for discounts on future orders.',
      },
      {
        question: 'Can I change or update my order?',
        answer: 'Once an order has been placed, changes or updates may not be possible. Please contact customer service for assistance.',
      },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className="faq-answer" style={{ display: activeIndex === index ? 'block' : 'none' }}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
