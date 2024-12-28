"use client"
import React, { FC, useContext, useEffect } from 'react';
import { context } from '../../context/context';
import TrueManLayout from '../../layout/TrueManLayout';
import Counter from '../../components/Counter';
import Story from '../../components/Story';
import VideoResume from '../../components/VideoResume';
import Services from '../../components/Services';
import Portfolio from '../../components/Portfolio';
import Skills from '../../components/Skills';
import Price from '../../components/Price';
import History from '../../components/History';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';
import Seo from 'components/Seo';

const Index: FC = () => {
  const { banner_type_function }: { banner_type_function: (type: string) => void } = useContext<any>(context||null);
  
  useEffect(() => {
    banner_type_function("slider");
  }, [banner_type_function]);
  
  return (
    <TrueManLayout onePage={true}>
       {/* <Seo
        title="Bijaya Mishra - Home"
        description="Welcome to Bijaya Mishra's portfolio. Discover my skills, projects, and experience in web development."
        url="https://bijayamishra.com.np"
      /> */}
      <Counter/>
      <Story />
      <VideoResume/>
      <Services/>
      <div
        data-scroll
        data-scroll-repeat
        data-scroll-offset={500}
        id="portfolio-triger"
      />
      <Portfolio />
      <div
        data-scroll
        data-scroll-repeat
        data-scroll-offset={500}
        id="resume-triger"
      />
      <Skills/>
      <History />
      <Price/>
      <Testimonials />
      <div
        data-scroll
        data-scroll-repeat
        data-scroll-offset={500}
        id="contact-triger"
      />
      <Contact />
    </TrueManLayout>
  );
};

export default Index;