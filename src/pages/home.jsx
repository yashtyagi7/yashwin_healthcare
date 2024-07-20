import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Hero from '../components/hero';
import '../home.css';
import Gif from '../assets/images/pharma3.jpg';
import animatedVideo from '/smoke4.mp4';
import banner from '../assets/images/bann.jpeg';
import banner1 from '../assets/images/c5.webp';
import banner2 from '../assets/images/c11.jpeg';
import banner3 from '../assets/images/c15.webp';
import banner4 from '../assets/images/c13.jpeg';
import banner5 from '../assets/images/c14.jpeg';
import banner6 from '../assets/images/c4.jpeg';
import blog1 from '../assets/images/blog/blog-1.jpg';
import blog2 from '../assets/images/blog/blog-2.jpg';
import blog3 from '../assets/images/blog/blog-3.jpg';
import blog4 from '../assets/images/blog/blog-4.jpg';
import journeyImage from '../assets/images/j1.jpeg'; // Assuming this is the correct path
import i1 from '../assets/images/f2.jpeg';
import i2 from '../assets/images/f3.jpeg';
import i3 from '../assets/images/f5.jpeg';
import i4 from '../assets/images/f6.webp';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const members = [
    { img: i1 },
    {  img: i2 },
    {  img: i3 },
    {  img: i4 },
  ];

  return (
    <>
      <section className="welcome-section">
  <div className="banner-container">
    <img src={banner} className="banner" alt="Welcome Banner" />
    <div className="overlay">
      <h1 className="animated-text">
        <span>Welcome To</span><br />
        <span>Y</span>
        <span>a</span>
        <span>s</span>
        <span>h</span>
        <span>w</span>
        <span>i</span>
        <span>n</span>
        <span>&nbsp;</span>
        <span>H</span>
        <span>e</span>
        <span>a</span>
        <span>l</span>
        <span>t</span>
        <span>h</span>
        <span>c</span>
        <span>a</span>
        <span>r</span>
        <span>e</span>
      </h1>
    </div>
  </div>
</section>

      <section className="journey-section bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-container" data-aos="fade-up">
              <h2><b><hr/>Our Journey</b></h2>
              <p>
                Yashwin Healthcare, established in 2011 in Sonipat, Haryana (India), has steadily built a reputation as a premier pharmaceutical manufacturing unit. Initially recognized for its high-quality cough syrups and pharmaceutical ointments and creams, the company has diversified its offerings to include Tablets, Capsules, Dry Powder Injectables, Liquid Orals, Dry Syrups, and Nutritional Food Supplements. 
                <strong> Pharmaceuticals, Ayurvedic, Unani, Nutraceuticals, Protein Supplements & Cosmetic</strong>, etc.
              </p>
              <p>
                In 2020, Yashwin Healthcare expanded its services, becoming a
                <strong> leading provider of third-party pharmaceutical manufacturing in India.</strong>
                <strong>The WHO-GMP approved facilities</strong>,
                and dedicated workforce ensure stringent quality standards. Yashwin Healthcare’s commitment to affordable medicines, timely delivery, and leak-resistant packaging has earned the trust of millions, establishing it as a global leader in contract pharmaceutical manufacturing.
              </p>
            </div>
            <div className="col-md-6 image-container" data-aos="fade-left">
              <img src={journeyImage} className="journey-image" alt="Journey" />
            </div>
          </div>
        </div>
      </section>

      <Hero />

      <section className="carousel-section bg-white">
        <div className="container">
          <Carousel>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner5}
                alt="Sixth slide"
              />
              <div className="carousel-graphic">
                <Link to="/services/export-products" className="btn btn-primary">Know More</Link>
              </div>
              <Carousel.Caption>
                <h3>Export Products</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner6}
                alt="First slide"
              />
              <div className="carousel-graphic">
                <Link to="/services/dry-powder-injections" className="btn btn-primary">Know More</Link>
              </div>
              <Carousel.Caption>
                <h3>Dry Powder Injection </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner1}
                alt="Second slide"
              />
              <div className="carousel-graphic">
                <Link to="/services/veterinary-products" className="btn btn-primary">Know More</Link>
              </div>
              <Carousel.Caption>
                <h3>Veterinary Products</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner2}
                alt="Third slide"
              />
              <div className="carousel-graphic">
                <Link to="/services/capsule" className="btn btn-primary">Know More</Link>
              </div>
              <Carousel.Caption>
                <h3>Capsules</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner3}
                alt="Fourth slide"
              />
              <div className="carousel-graphic">
                <Link to="/services/dry-powder-suspension" className="btn btn-primary">Know More</Link>
              </div>
              <Carousel.Caption>
                <h3>Dry Powder Suspensions</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner4}
                alt="Fifth slide"
              />
              <div className="carousel-graphic">
                <Link to="/services/liquid-orals" className="btn btn-primary">Know More</Link>
              </div>
              <Carousel.Caption>
                <h3>Liquid Orals</h3>
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
        </div>
      </section>

      <section className="blogs p-5 bg-white">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="mb-3">What our customers say...</h1>
              <p className="mb-4">Our customers never miss a bit on providing feedback</p>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog1} className="card-img-top img-fluid" alt="Blog 1" />
                <div className="card-body">
                  <p className="card-text">Excellent service and high-quality products from Yashwin Healthcare. Very reliable.</p>
                  <Link to='about'>
                    <button className="mt-4 btn btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog2} className="card-img-top img-fluid" alt="Blog 2" />
                <div className="card-body">
                  <p className="card-text">Outstanding quality and timely delivery from Yashwin Healthcare. Highly recommended.</p>
                  <Link to='about'>
                    <button className="mt-4 btn btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog3} className="card-img-top img-fluid" alt="Blog 3" />
                <div className="card-body">
                  <p className="card-text">Yashwin Healthcare offers exceptional products and fantastic customer support.</p>
                  <Link to='about'>
                    <button className="mt-4 btn btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog4} className="card-img-top img-fluid" alt="Blog 4" />
                <div className="card-body">
                  <p className="card-text">Reliable and consistent quality. Always a pleasure working with Yashwin Healthcare..</p>
                  <Link to='about'>
                    <button className="mt-4 btn btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-section bg-white">
        <h1><b>Affiliated By ...</b></h1><br/><br/>
        <div className="team-container">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="team-member"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <img src={member.img} alt={member.text} className="member-photo" />
              <h4>{member.text}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;