import React from 'react';
import Header from './header';
import Slider from './slider';
import Articles3 from './articles3';
import FourCol from './fourCol';
import TwoCol from './twocol';
import Footer from './footer';


const Home = function() {
  return (	
  <div>
       <Header />
       <Slider />
       <Articles3 />
       <FourCol />
       <TwoCol />
       <Footer />
  </div>
  );
};

export default Home;