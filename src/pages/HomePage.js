import React from 'react';
import Clients from '../components/Client/Clients';
import Content from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree, heroFour } from '../data/Herodata';
import { Heading } from '../GlobalStyles';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <Heading id="projects">Our Projects</Heading>
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Content {...heroFour} />
    </>
  );
}

export default HomePage;
