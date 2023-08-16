import React from 'react';
import './ResultsPage.css';

function ResultsPage() {
  return (
    <section id="results" className="results-section">
      <div className="container mt-4">
        <h2>Results</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-container">
                <img
                  src="https://i.imgur.com/tVbnztX.png"
                  className="card-img-top"
                  alt="Card 1 Placeholder"
                />
                <div className="card-body">
                  <p className="card-text">7x increased conversions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-container">
                <img
                  src="https://i.imgur.com/Csu7LKK.png"
                  className="card-img-top"
                  alt="Card 2 Placeholder"
                />
                <div className="card-body">
                  <p className="card-text">60% reduced conversion costs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-container">
                <img
                  src="https://i.imgur.com/c5grWGb.png"
                  className="card-img-top"
                  alt="Card 3 Placeholder"
                />
                <div className="card-body">
                  <p className="card-text">3x conversion volume growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-container">
                <img
                  src="https://i.imgur.com/NjsnChi.png"
                  className="card-img-top"
                  alt="Card 4 Placeholder"
                />
                <div className="card-body">
                  <p className="card-text">4,000 page 1 keyword rankings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-container">
                <img
                  src="https://i.imgur.com/pqnGyHl.png"
                  className="card-img-top"
                  alt="Card 5 Placeholder"
                  style={{
                    maxHeight:"85px"
                }} 
                />
                <div className="card-body">
                  <p className="card-text">60% reduced conversion costs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-container">
                <img
                  src="https://i.imgur.com/2q34aCG.png"
                  className="card-img-top"
                  alt="Card 6 Placeholder"
                />
                <div className="card-body">
                  <p className="card-text">800% increase in conversions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResultsPage;
