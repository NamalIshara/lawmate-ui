import React from 'react';
import Header from '../components/main/header.tsx';
import Hero from '../components/main/hero.tsx';
// import Features from '../components/main/features.tsx';
// import HowItWorks from '../components/main/howItWorks.tsx';
// import AboutUs from '../components/main/aboutUs.tsx';
// import ContactUs from '../components/main/contactUs.tsx';
import Footer from '../components/main/footer.tsx';
import '../styles/global.css';
import AboutUs from '../components/main/aboutUs.tsx';

const Landing: React.FC = () => {
  return (
      <div className="lawmate-container">
        <Header />
        <Hero />
        <AboutUs />
        {/*<Features />*/}
        {/*<HowItWorks />*/}
        {/*<ContactUs />*/}
        <Footer />
      </div>
  );
};

export default Landing;