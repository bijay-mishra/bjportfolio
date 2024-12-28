"use client"
import React, { FC, useContext, useEffect } from 'react';
import TrueManLayout from '../../layout/TrueManLayout';
import Counter from '../../components/Counter';
import Story from '../../components/Story';
import VideoResume from '../../components/VideoResume';
import Services from '../../components/Services';
import Price from '../../components/Price';
import Testimonials from '../../components/Testimonials';
import Publications from '../../components/Publications';
import { context } from '../../context/context';
import Seo from 'components/Seo';

const Index: FC = () => {
  const { banner_type_function }: { banner_type_function: (type: string) => void } = useContext<any>(context||null);
  
  useEffect(() => {
    banner_type_function("slider");
  }, [banner_type_function]);
  
  return (
    <TrueManLayout>
       {/* <Seo
        title="Bijaya Mishra - Home"
        description="Welcome to Bijaya Mishra's portfolio. Discover my skills, projects, and experience in web development."
        url="https://bijayamishra.com.np"
      /> */}
      <Counter />
      <Story />
      <VideoResume />
      <Services />
      <Price />
      <Testimonials />
      <Publications />
    </TrueManLayout>
  );
};

export default Index;