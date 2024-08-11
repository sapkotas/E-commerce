import React, { useState } from 'react';
import './AboutUs.css'; // Assuming you have a CSS file for styling

const teamMembers = [
  { name: 'Rohan Pokhrel', role: '  CEO & Founder ', img: 'https://via.placeholder.com/150', description: 'Rohan ensures our operations run smoothly and efficiently.' },
  { name: 'Shashank Katwal', role: 'Chief Operating Officer', img: 'https://via.placeholder.com/150', description: 'Shashank is the visionary behind our company with over 20 years of experience.' },
  
  { name: 'Sunav Sapkota', role: 'Lead Developer', img: 'https://via.placeholder.com/150', description: 'Sunav is the brain behind our technology and software.' }
];

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="about-us">
      <section className="hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Discover our story, mission, and the dedicated team that drives our success.</p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To provide the best products and exceptional service to our customers, ensuring a delightful shopping experience.</p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>To be a global leader in e-commerce, recognized for our innovation, customer satisfaction, and social responsibility.</p>
        </div>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Customer Commitment: We develop relationships that make a positive difference in our customers' lives.</li>
          <li>Quality: We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</li>
          <li>Integrity: We uphold the highest standards of integrity in all of our actions.</li>
          <li>Teamwork: We work together, across boundaries, to meet the needs of our customers and to help our Company win.</li>
          <li>Respect for People: We value our people, encourage their development, and reward their performance.</li>
          <li>Good Citizenship: We are good citizens in the communities in which we live and work.</li>
          <li>A Will to Win: We exhibit a strong will to win in the marketplace and in every aspect of our business.</li>
          <li>Personal Accountability: We are personally accountable for delivering on our commitments.</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {teamMembers.map(member => (
            <div key={member.name} className="team-member" onClick={() => setSelectedMember(member)}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedMember && (
        <div className="modal" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedMember(null)}>&times;</span>
            <img src={selectedMember.img} alt={selectedMember.name} />
            <h3>{selectedMember.name}</h3>
            <p>{selectedMember.role}</p>
            <p>{selectedMember.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
