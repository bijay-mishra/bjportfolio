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

const Index: FC = () => {
  const { banner_type_function }: { banner_type_function: (type: string) => void } = useContext(context);
  
  useEffect(() => {
    banner_type_function("slider");
  }, [banner_type_function]);
  
  return (
    <TrueManLayout>
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