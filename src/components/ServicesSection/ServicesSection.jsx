import React from 'react';
import './ServicesSection.css'; // Import your CSS for styling

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="card-group">
        <div className="card">
          <img src="https://static-00.iconduck.com/assets.00/google-ads-icon-2048x1837-4vbvpswm.png" alt="Google Ads Icon" className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title">Google Ads</h3>
            <p className="card-text">Reach your target audience through Google Ads campaigns that drive traffic, leads, and conversions.</p>
            <ul className="card-bullets">
              <li>Keyword-targeted ads</li>
              <li>Display and video ads</li>
              <li>Pay-per-click (PPC) model</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <img src="https://i.imgur.com/QQ89Rt3.jpeg" alt="Facebook Ads Icon" className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title">Facebook Ads</h3>
            <p className="card-text">Connect with potential customers on Facebook through strategic ad campaigns and audience targeting.</p>
            <ul className="card-bullets">
            <li>Target specific demographics</li>
            <li>Analyze ad performance</li>
            <li>Maximize ROI</li>
          </ul>
          </div>
        </div>
        <div className="card">
          <img src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg" alt="Instagram Ads Icon" className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title">Instagram Ads</h3>
            <p className="card-text">Utilize Instagram's visual platform to showcase your products or services and engage with your audience.</p>
            <ul className="card-bullets">
              <li>High-quality visual ads</li>
              <li>Story ads for immersive experiences</li>
              <li>Influencer partnerships</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
