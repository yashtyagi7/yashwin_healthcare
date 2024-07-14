import React from 'react';
import '../contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const contact = () => {
  return (
    <section class = 'abc'>
    <section class='scontact'>
      <div className="scontact-header">
        <div className="container3">
          <h2>Contact Us</h2>
          <p>
          Yashwin healthcare is a pharmaceutical manufacturing unit based at Sonipat,Haryana (India). The plant is well equipped with instruments and machinery as per CGMP , and the facility is WHO-GMP Compliant. The product portfolio comprises formulation of Tablets , Capsules, Dry powder injectable , Liquid orals , Dry syrups & Nutritional food supplements.
          </p>
        </div>
      </div>
      <div className="container3">
        <div className="row3">
          <div className="contact-info">
            <div className="contact-info-item">
            <a href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KfPe1jtAtg05MWhNYhcssftW&daddr=Village+Shahpur+Taga,+ganaur,+Sonipat,+Haryana+131001" target="_blank" rel="noopener noreferrer">
              <div className="contact-info-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="1x"/>
              </div>
              </a>

              <div className="contact-info-content">
                <h4>Address</h4>
                <p>
                Gram Shahpur Taga, <br /> Ganaur Distt Sonipat 131001,<br /> Haryana, India
                </p>
              </div>
            </div>

            <div className="contact-info-item">
            <a href="https://www.instagram.com/amityashwin/?igsh=MTVkeWZuYnl1d2p6OA%3D%3D" target="_blank" rel="noopener noreferrer">
              <div className="contact-info-icon">
              <FontAwesomeIcon icon={faInstagram} />
              </div>
              </a>

              <div className="contact-info-content">
                <h4>Instagram</h4>
                <p>@amityashwin</p>
              </div>
            </div>

            <div className="contact-info-item">
            <a href="https://www.linkedin.com/in/amit-tyagi-396ab9a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bc8aFLy63TF6svYBQS0ujzw%3D%3D" target="_blank" rel="noopener noreferrer">
              <div className="contact-info-icon">
              <FontAwesomeIcon icon={faLinkedin} />
              </div>
              </a>

              <div className="contact-info-content">
                <h4>LinkedIn</h4>
                <p>@AmitTyagi</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form action="https://formspree.io/f/mnnaaelr" method="POST" id="contact-form">
              <h2>Send Enquiry</h2>
              <div className="input-box">
                <input name="name" type="text" required={true} placeholder='Full Name'/>
              </div>

              <div className="input-box">
                <input type="email" required={true} name="email" placeholder='john@gmail.com' />
              </div>

              <div className="input-box">
                <input name="mob" type="text" required={true} placeholder='+91 XXXXXXXXXX'/>
              </div>

              <div className="input-box">
                <textarea required={true} name="message" placeholder='Message ....... :)'></textarea>
                
              </div>

              <div className="input-box">
                <input type="submit" value="Send" name="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default contact;
