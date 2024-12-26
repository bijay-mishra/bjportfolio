import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../utility/sliderProps";

const testimonialsData = [
  {
    name: "Binit Lamichhane",
    title: "MERN Stack Developer",
    testimonial:
      "Bijay Mishra is a talented React.js and Next.js developer with a knack for solving complex problems efficiently. His commitment to clean code and delivering quality work makes him a true asset to any team. It’s always a pleasure collaborating with him!",
    imgSrc: "/img/testimonials/1.jpg",
  },
  
  {
    name: "Nabin Bhusal",
    title: "React Native Developer",
    testimonial:
      "Bijay is a skilled React.js and Next.js developer who delivers user-friendly, efficient solutions. His attention to detail and problem-solving abilities make him an invaluable team player!",
    imgSrc: "/img/testimonials/2.jpg",
  },
  {
    name: "Bhuvan Joshi",
    title: "Software Engineer",
    testimonial:
      "Bijay’s expertise in React.js and Next.js is remarkable. His ability to deliver dynamic, scalable solutions while maintaining a collaborative and professional approach is commendable. A highly dependable developer!",
    imgSrc: "/img/testimonials/3.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Testimonials <span data-number={9} />
        </h5>

      
        <Swiper
          {...sliderProps.testimonials}
          className="swiper-container trm-testimonials-slider trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div
                className="trm-testimonial-card"
                data-swiper-parallax=""
                data-swiper-parallax-scale=".8"
                data-swiper-parallax-opacity={0}
                data-swiper-parallax-duration={800}
              >
                <div className="trm-testimonial-author">
                  <img src={testimonial.imgSrc} alt="Client" />
                  <h6 className="trm-mb-15">{testimonial.name}</h6>
                  <div className="trm-text-sm trm-accent-color">
                    <i>{testimonial.title}</i>
                  </div>
                </div>
                <div className="trm-testimonial-text">
                  <p>{testimonial.testimonial}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="trm-slider-navigation">
            <div className="trm-testimonials-slider-prev trm-btn trm-btn-circle">
              <i className="fas fa-arrow-left" />
            </div>
            <div className="trm-testimonials-slider-next trm-btn trm-btn-circle">
              <i className="fas fa-arrow-right" />
            </div>
          </div>
        </Swiper>
        {/* testimonials slider end */}
      </div>
    </div>
  );
};

export default Testimonials;
// "use client";
// import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// type Testimonial = {
//   quote: string;
//   name: string;
//   designation: string;
//   src: string;
// };

// export const AnimatedTestimonials = ({
//   testimonials,
//   autoplay = false,
// }: {
//   testimonials: Testimonial[];
//   autoplay?: boolean;
// }) => {
//   const [active, setActive] = useState(0);

//   const handleNext = () => {
//     setActive((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const isActive = (index: number) => index === active;

//   useEffect(() => {
//     if (autoplay) {
//       const interval = setInterval(handleNext, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [autoplay]);

//   const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

//   return (
//     <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
//       <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
//         {/* Testimonial Image */}
//         <div>
//           <div className="relative h-80 w-full">
//             <AnimatePresence>
//               {testimonials.map((testimonial, index) => (
//                 <motion.div
//                   key={testimonial.src}
//                   initial={{
//                     opacity: 0,
//                     scale: 0.9,
//                     rotate: randomRotateY(),
//                   }}
//                   animate={{
//                     opacity: isActive(index) ? 1 : 0.7,
//                     scale: isActive(index) ? 1 : 0.95,
//                     rotate: isActive(index) ? 0 : randomRotateY(),
//                     zIndex: isActive(index) ? 999 : testimonials.length - index,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     scale: 0.9,
//                     rotate: randomRotateY(),
//                   }}
//                   transition={{
//                     duration: 0.4,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute inset-0"
//                 >
//                   <Image
//                     src={testimonial.src}
//                     alt={testimonial.name}
//                     width={500}
//                     height={500}
//                     draggable={false}
//                     className="h-full w-full rounded-3xl object-cover"
//                   />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Testimonial Text */}
//         <div className="flex flex-col justify-between py-4">
//           <motion.div
//             key={active}
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -20, opacity: 0 }}
//             transition={{ duration: 0.2, ease: "easeInOut" }}
//           >
//             <h3 className="text-2xl font-bold text-black dark:text-white">
//               {testimonials[active].name}
//             </h3>
//             <p className="text-sm text-gray-500 dark:text-neutral-400">
//               {testimonials[active].designation}
//             </p>
//             <motion.p className="text-lg text-gray-600 mt-8">
//               {testimonials[active].quote.split(" ").map((word, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
//                   animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
//                   transition={{ duration: 0.2, delay: index * 0.02 }}
//                   className="inline-block"
//                 >
//                   {word}&nbsp;
//                 </motion.span>
//               ))}
//             </motion.p>
//           </motion.div>

//           {/* Navigation Buttons */}
//           <div className="flex gap-4 pt-12">
//             <button
//               onClick={handlePrev}
//               className="h-7 w-7 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center group"
//             >
//               <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 transition-transform duration-300 group-hover:-rotate-12" />
//             </button>
//             <button
//               onClick={handleNext}
//               className="h-7 w-7 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center group"
//             >
//               <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 transition-transform duration-300 group-hover:rotate-12" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };