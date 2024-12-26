"use client";
import { useContext, useEffect } from "react";
import { context } from "../context/context";
import TrueManLayout from "../layout/TrueManLayout";
import Counter from "../components/Counter";
import Story from "../components/Story";
import VideoResume from "../components/VideoResume";
import Services from "../components/Services";
import Price from "../components/Price";

import Publications from "../components/Publications";
import Testimonials from "components/Testimonials";
// import { AnimatedTestimonials } from "components/Testimonials";
// import { AnimatedTestimonials } from "components/Testimonials";


const Index: React.FC = () => {
  // const testimonialsData = [
  //   {
  //     quote: "This is the best product I've ever used!",
  //     name: "John Doe",
  //     designation: "CEO, ABC Corp",
  //     src: "https://via.placeholder.com/500",
  //   },
  //   {
  //     quote: "Amazing service and support. Highly recommend!",
  //     name: "Jane Smith",
  //     designation: "CTO, XYZ Ltd",
  //     src: "https://via.placeholder.com/500",
  //   },
  //   {
  //     quote: "A great experience from start to finish.",
  //     name: "Samuel Jackson",
  //     designation: "Manager, 123 Industries",
  //     src: "https://via.placeholder.com/500",
  //   },
  // ];
  const { banner_image_function, banner_type_function } = useContext(context);

  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    banner_type_function("image");
  }, [banner_image_function, banner_type_function]);

  return (
    <TrueManLayout>
      {/* stats */}
      <Counter />
      {/* stats end */}
      {/* text */}
      <Story/>
      {/* text end */}
      {/* video resume */}
      <VideoResume />
      {/* video resume end */}
      {/* services */}
      <Services/>
      {/* services end */}
      {/* price plans */}
      <Price/>
      {/* price plans end */}
    
      <Testimonials/>
      {/* <AnimatedTestimonials testimonials={testimonialsData} autoplay/> */}
      <Publications />
    </TrueManLayout>
  );
};

export default Index;