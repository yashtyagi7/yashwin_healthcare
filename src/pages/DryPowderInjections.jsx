import React from 'react';
import '../injection.css';
import image from '../assets/images/inj2.png';
import pdfFile from '../assets/drysyrup.pdf'; // Ensure the PDF file is located here
import cardImage1 from '../assets/images/inj.png'; // Example image path for card 1
import cardImage2 from '../assets/images/inj2.png'; // Example image path for card 2
import cardImage3 from '../assets/images/inj2.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const DryPowderInjections = () => {
  return (
    <div className="service-container">
      <div className="service-image-container">
        <img src={image} alt="Dry Powder Injections" className="service-image" />
        <div className="service-text-container">
          <div className="service-text">
            DRY POWDER INJECTIONS
          </div>
          <div className="underline"></div>
        </div>
      </div>
      <div className="service-content-wrapper">
        <div className="enquiry-form-wrapper">
          <div className="form-container">
            <h2>Send Enquiry</h2>
            <form action="https://formspree.io/f/mnnaaelr" method="POST" id="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5"></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-content">
                  <h3>Dry Powder Injection Product List</h3>
                  <p>
                    View our Latest Product Range with Indication and pack size.
                  </p>
                  <a href={pdfFile} download className="download-button">
                    <FontAwesomeIcon icon={faDownload} /> DOWNLOAD NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="description-container">
            <h2 align='center'><b>Dry Powder Injections Manufacturers</b></h2>
            <p>
            Yashwin Healthcare is at the forefront of manufacturing Dry Powder Injections in India. Our robust research and development capabilities enable us to produce high-quality, affordable generic and innovative medicines tailored to meet the diverse needs of our clients.
            </p>
            <p>
            Our reputation as a premier third-party Dry Powder Injections manufacturer stems from our unwavering commitment to superior quality and timely delivery, ensuring customer satisfaction across a wide client base.
            </p>
            <p>
            Equipped with state-of-the-art machinery and equipment, Yashwin Healthcare excels in achieving the firm’s ambitious goals and objectives. Our adherence to stringent quality standards makes us a trusted name in the industry.
            As a renowned pharmaceutical group, Yashwin Healthcare is dedicated to setting new benchmarks in the production of Dry Powder Injections.
            </p>
      
          </div>
        </div>
      </div>
      <div className="cards-container">
        <div className="card">
          <img src={cardImage1} alt="Card 1" className="card-image" />
          <div className="card-body">
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Learn more</a>
          </div>
        </div>
        <div className="card">
          <img src={cardImage2} alt="Card 2" className="card-image" />
          <div className="card-body">
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Learn more</a>
          </div>
        </div>
        <div className="card">
          <img src={cardImage3} alt="Card 3" className="card-image" />
          <div className="card-body">
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DryPowderInjections;
