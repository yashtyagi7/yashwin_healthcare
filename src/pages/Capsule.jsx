import React from 'react';
import '../capsule.css'; // Ensure this CSS file exists and is properly configured
import image from '../assets/images/cap2.png';
import pdfFile from '../assets/drysyrup.pdf'; // Ensure the PDF file is located here
import cardImage1 from '../assets/images/inj.png'; // Example image path for card 1
import cardImage2 from '../assets/images/inj2.png'; // Example image path for card 2
import cardImage3 from '../assets/images/inj2.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Capsule = () => {
  return (
    <div className="service-container">
      <div className="service-image-container">
        <img src={image} alt="Dry Powder Injections" className="service-image" />
        <div className="service-text-container">
          <div className="service-text">
          CAPSULE
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
                  <h3>Capsule Product List</h3>
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
          <h2 align='center'><b>Capsule Manufacturers</b></h2>
            <p>
            Yashwin Healthcare is a premier manufacturer of Capsules in India. Our focus on research and development allows us to create high-quality, affordable generic and innovative medicines, addressing a broad spectrum of health needs.

            </p>
            <p>
            We are a top-tier third-party Capsules manufacturer, renowned for our commitment to superior quality and timely delivery. Our dedication to customer satisfaction has resulted in a loyal and expanding client base.

            </p>
            <p>
            Yashwin Healthcare’s proficiency in Capsule manufacturing is backed by our advanced machinery and equipment, ensuring the achievement of our firm’s goals and objectives. Our rigorous quality control measures guarantee that every product meets the highest standards of excellence.

As a respected pharmaceutical group, Yashwin Healthcare is committed to pioneering advancements in Capsule production.
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





export default Capsule;





