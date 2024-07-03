import React from 'react';
import '../capsule.css'; // Ensure this CSS file exists and is properly configured
import image from '../assets/images/oral.jpg';
import pdfFile from '../assets/liquid.pdf';
import cardImage1 from '../assets/images/inj.png'; // Example image path for card 1
import cardImage2 from '../assets/images/inj2.png'; // Example image path for card 2
import cardImage3 from '../assets/images/inj2.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const LiquidOrals = () => {
  return (
    <div className="service-container">
      <div className="service-image-container">
        <img src={image} alt="Dry Powder Injections" className="service-image" />
        <div className="service-text-container">
          <div className="service-text">
          LIQUID ORALS
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
                  <h3>Liquid Orals Product List</h3>
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
          <h2 align='center'><b>Liquid Orals Manufacturers</b></h2>
            <p>
            Yashwin Healthcare is a leading name in the manufacturing of Liquid Orals in India. With a strong emphasis on research and development, we produce high-quality, affordable generic and innovative medicines that meet the diverse requirements of our clients.
            </p>
            <p>
            Our distinction as a premier third-party Liquid Orals manufacturer is built on our superior quality and reliable delivery schedule, which have established us as a preferred partner for many clients.

            </p>
            <p>
            Yashwin Healthcare’s success in the Liquid Orals segment is supported by our modern machinery and equipment, crucial for realizing the firm’s strategic goals. Our steadfast commitment to quality ensures that our products consistently meet stringent standards.

As a prominent pharmaceutical group, Yashwin Healthcare continues to lead the way in Liquid Orals manufacturing, ensuring excellence in every product we deliver.
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

export default LiquidOrals;







