import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Featuredproducts from '../components/featuredproducts';
import Newarrivals from '../components/newarrivals';
import Hero from '../components/hero';
import Newsletter from '../components/newsletter';
import '../home.css';
import Gif from '../assets/images/pharma3.gif';
import animatedVideo from '/public/smoke4.mp4';
import banner from '../assets/images/c4.jpeg';
import banner1 from '../assets/images/c5.webp';
import banner2 from '../assets/images/c11.jpeg';
import banner3 from '../assets/images/c15.webp';
import banner4 from '../assets/images/c13.jpeg';
import banner5 from '../assets/images/c14.jpeg';
import blog1 from '../assets/images/blog/blog-1.jpg';
import blog2 from '../assets/images/blog/blog-2.jpg';
import blog3 from '../assets/images/blog/blog-3.jpg';
import blog4 from '../assets/images/blog/blog-4.jpg';
import journeyImage from '../assets/images/j1.jpeg'; // Assuming this is the correct path

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <section className="welcome-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 gif-container">
              <img src={Gif} className="gif" alt="GIF" />
            </div>
            <div className="col-md-6 video-container">
              <div className="video-wrapper">
                <ReactPlayer
                  url={animatedVideo}
                  playing
                  loop
                  muted
                  width="100%"
                  height="100%"
                  className="video-player"
                />
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
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-container" data-aos="fade-up">
              <h2><b><hr/>Our Journey</b></h2>
              <p>
                Yashwin Healthcare, established in 1995 in Sonipat, Haryana (India), has steadily built a reputation as a premier pharmaceutical manufacturing unit. Initially recognized for its high-quality cough syrups and pharmaceutical ointments and creams, the company has diversified its offerings to include Tablets, Capsules, Dry Powder Injectables, Liquid Orals, Dry Syrups, and Nutritional Food Supplements. 
                <strong> Pharmaceuticals, Ayurvedic, Unani, Nutraceuticals, Protein Supplements & Cosmetic</strong>, etc.
              </p>
              <p>
                In 2020, Yashwin Healthcare expanded its services, becoming a
                <strong> leading provider of third-party pharmaceutical manufacturing in India.</strong>
                <strong>The GMP-WHO-approved facilities</strong>,
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

      <section className="carousel-section">
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
                src={banner}
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

      <section className="blogs p-5">
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
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to='about'>
                    <button className="mt-4 btn btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
