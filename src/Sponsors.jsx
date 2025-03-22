import React from 'react';
import './Sponsors.css';
import Sponsor1 from './assets/nordvpn.png';
import Sponsor2 from './assets/nordpass.png';
import Sponsor3 from './assets/icogni.png';
import Sponsor4 from './assets/saily.png';
import Sponsor5 from './assets/warp.png';

const Sponsors = () => {
  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="card">
            <a href="https://nordvpn.com" target="_blank" rel="noopener noreferrer">
              <img src={Sponsor1} alt="Sponsor 1" className="icon" />
            </a>
          </div>
          <div className="card">
            <a href="https://nordpass.com" target="_blank" rel="noopener noreferrer">
              <img src={Sponsor2} alt="Sponsor 2" className="icon" />
            </a>
          </div>
          <div className="card">
            <a href="https://incogni.com" target="_blank" rel="noopener noreferrer">
              <img src={Sponsor3} alt="Sponsor 3" className="icon" />
            </a>
          </div>
          <div className="card">
            <a href="https://saily.com" target="_blank" rel="noopener noreferrer">
              <img src={Sponsor4} alt="Sponsor 4" className="icon" />
            </a>
          </div>
          <div className="card">
            <a href="https://warp.dev" target="_blank" rel="noopener noreferrer">
              <img src={Sponsor5} alt="Sponsor 5" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
