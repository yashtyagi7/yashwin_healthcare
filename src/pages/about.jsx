import React, { useState, useEffect } from 'react';
import '../aboutcss.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import i1 from '../assets/images/i5.jpg';
import i2 from '../assets/images/i2.jpg';
import i3 from '../assets/images/i3.jpeg';
import i4 from '../assets/images/i4.jpg';
import banner from '../assets/images/ban.jpeg';
import c1 from '../assets/images/a1.jpg';
import visionIcon from '../assets/images/a1.png';
import missionIcon from '../assets/images/a3.jpeg';
import valuesIcon from '../assets/images/a2.jpg';
import journeyImage from '../assets/images/inj.png'; // Add the appropriate path for the journey image

const About = () => {
  const members = [
    { text: 'Cleanroom Environment', img: i1 },
    { text: 'Quality Control', img: i2 },
    { text: 'Experienced Workforce', img: i3 },
    { text: 'Continuous Improvement', img: i4 },
  ];

  const stats = [
    { number: 500, text: 'Happy Clients :)' },
    { number: 300, text: 'Products'},
    { number: 15, text: 'Years of Experience' },
  ];

  const Stat = ({ number, text }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        let start = 0;
        const end = number;
        if (start === end) return;
        let totalDuration = 2000; // total duration of animation in milliseconds
        let incrementTime = (totalDuration / end) * 2; // time per increment

        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
      }
    }, [inView, number]);

    return (
      <div className="col-md-4">
        <motion.div
          className="number-card"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2>{count}+</h2>
          <p>{text}</p>
        </motion.div>
      </div>
    );
  };

  return (
    <section>
      {/* Banner Section */}
      <div
        className="banner"
        style={{
          backgroundImage: 'url(${banner})',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div className="banner-content">
          <h1>ABOUT US</h1>
        </div>
      </div>

      {/* Text Card Section */}
      <section className="text-card-section">
        <div className="text-card">
          <div className="card-text">
            <h1 align='center'>What We Provide ?</h1>
            <p>
              Yashwin Healthcare offers several benefits to those who choose to
              work with them. Firstly, they provide access to state-of-the-art
              equipment, which is essential for high-quality work in the
              healthcare industry. Additionally, their delivery networks span
              across India, giving them a significant advantage in terms of
              operational services. Another advantage of working with Yashwin
              Healthcare is their national recognition, which can help to boost
              the reputation of your business. They also offer their services at
              a low budget, allowing you to nurture your business without
              breaking the bank. Their team consists of highly trained
              professionals who are well-equipped to handle any challenge that
              may arise. By working with them, you can save time and effort
              while receiving the best service possible. Moreover, Yashwin
              Healthcare is DCGI and WHO-GMP certified, ensuring that their
              services meet the highest standards. Overall, they are an
              excellent choice for anyone looking to partner with a reliable and
              reputable healthcare provider.
            </p>
          </div>
          <motion.img
            src={c1}
            alt="Animated"
            className="card-image"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </div>
      </section>

      {/* Vision, Mission, and Values Section */}
      <section className="vmv-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src={visionIcon} className="card-img-top" alt="Vision" />
                <div className="card-body">
                  <h5 className="card-title">Vision</h5>
                  <p className="card-text">
                    Our vision is to lead the pharmaceutical manufacturing
                    industry in India, offering innovative and affordable
                    healthcare solutions to enhance community well-being.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={missionIcon} className="card-img-top" alt="Mission" />
                <div className="card-body">
                  <h5 className="card-title">Mission</h5>
                  <p className="card-text">
                    advance pharmaceutical excellence through innovation to
                    ensure safe, effective, and affordable medications,
                    enhancing quality of life.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={valuesIcon} className="card-img-top" alt="Values" />
                <div className="card-body">
                  <h5 className="card-title">Values</h5>
                  <p className="card-text">
                    Uphold the highest standards of honesty and ethics,
                    prioritizing patient safety and well-being in all endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-section">
        <h1><b>Why Choose Us?</b></h1><br/><br/>
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

      {/* Animated Numbers Section */}
      <section className="numbers-section">
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <Stat key={index} number={stat.number} text={stat.text} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
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
              <motion.img
                src={journeyImage} 
                className="journey-image2" 
                alt="Journey" 
                // animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </div>
      </section>    

    </section>
  );
};

export default About;