import React, {useEffect, useState} from 'react';

import Header from './partials/Header';
import HeroHome from './partials/HeroHome';
import FeaturesHome from './partials/Features';
import FeaturesBlocks from './partials/FeaturesBlocks';
import Testimonials from './partials/Testimonials';
import Newsletter from './partials/Newsletter';
import Footer from './partials/Footer';
import Banner from './partials/Banner';

import 'aos/dist/aos.css';
import './App.css';
import AOS from 'aos';



function Home() {

  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedQuarkappUser");
    const user = JSON.parse(loggedUserJSON);
    console.log('5',user)
    if (user !== null) {
      setSignedIn(true)
    }
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header signedIn={signedIn}/>

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome signedIn={signedIn} />
        <FeaturesHome />
       {<FeaturesBlocks />}
        <Testimonials />
       {/*<Newsletter />*/}

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;