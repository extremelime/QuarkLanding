import React, {useEffect, useState} from 'react';

import Header from './partials/Header';
import HeroHome from './partials/HeroHome';
import FeaturesHome from './partials/Features';
import OurTeam from './partials/OurTeam';
import GetStarted from './partials/GetStarted';
import Tutorial from './partials/Tutorial';
import Footer from './partials/Footer';

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
        <OurTeam />
        <GetStarted />
        <Tutorial />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;