import React from 'react';

const Footer = () => {
  const footerContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    color: '#333',
  };

  const mapContainerStyle = {
    flex: 1,
    marginRight: '20px',
  };

  const contactInfoStyle = {
    flex: 1,
    backgroundColor: '#e9f5f8',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    marginTop: 0,
    fontSize: '24px',
  };

  const paragraphStyle = {
    margin: '10px 0',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  return (
    <div style={footerContainerStyle}>
      <div style={mapContainerStyle}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.293945666707!2d76.9895703!3d29.1347483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db6403bd6def3%3A0x56fbb12c17624d68!2sVillage%20Shahpur%20Taga%2C%20Ganaur%2C%20Sonipat%2C%20Haryana%20131001!5e0!3m2!1sen!2sin!4v1689797682648!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      <div style={contactInfoStyle}>
        <h2 style={headingStyle}>Reach Us Out At!!</h2>
        <p style={paragraphStyle}><strong>Address:</strong> Gram Shahpur taga, Ganaur, Distt Sonepat 131001,Haryana,India</p>
        <p style={paragraphStyle}><strong>Phone:</strong> <a href="tel:+919896598755" style={linkStyle}>Call us at +919896598755</a></p>
        <p style={paragraphStyle}><strong>Hours:</strong> From 10 a.m To 6 p.m</p>
        <p style={paragraphStyle}>
        Experience excellence in healthcare with Yashwin Healthcare. Our global presence ensures premium quality in contract manufacturing, private labeling, and finished formulations. Trust us for innovative and reliable healthcare solutions. Connect with us at yashwin.healthcare@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default Footer;