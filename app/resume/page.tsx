"use client";

import React, { FC, useContext, useEffect } from "react";
import { context } from "../../context/context";
import TrueManLayout from "../../layout/TrueManLayout";

const skills = [
  { title: "Nepali", level: "Native", progress: 100 },
  { title: "English", level: "90%", progress: 90 },
  { title: "Hindi", level: "80%", progress: 80 },
  { title: "Other", level: "60%", progress: 60 },
  { title: "Html", level: "100%", progress: 100 },
  { title: "CSS", level: "100%", progress: 100 },
  { title: "SCSS", level: "90%", progress: 80 },
  { title: "jQuery", level: "90%", progress: 90 },
  { title: "Vue js", level: "85%", progress: 90 },
  { title: "Js", level: "80%", progress: 80 },
];

const knowledge = [
  ["React.js", "Next.js", "HTML5","Git"],
  ["GitHub","CSS3", "Javascript", "Bootstrap"],
  ["Typescript", "Redux", "Material-UI","Netlify"],
  
];

const employmentHistory = [
  {
    position: "Thalchour Sec. School",
    duration: "2005 - 2015",
    description:
      "Completed my high school education and successfully achieved my SLC (School Leaving Certificate). This phase laid the foundation for my academic and professional growth.",
    // diploma: "files/diploma.jpg",
  },
  {
    position: "Takshashila Academy",
    duration: "2016 - 2018",
    description:
      "Completed my +2 education in Science, focusing on preparing me for a career in technology and engineering.",
    // diploma: "files/diploma.jpg",
  },
  {
    position: "Universal Engineering College",
    duration: "2019 - 2024",
    description:
      "Pursuing a Bachelor's degree in Computer Engineering, specializing in software development, algorithms, and system design. Gained hands-on experience with modern technologies and completed several academic projects.",
  },
  {
    position: "Web Developer at Graycode Technology",
    duration: "Jan 2024 - Present",
    description:
      "Currently working as a Frontend Developer specializing in React.js, Next.js, JavaScript, and TypeScript. Contributing to building robust, scalable, and user-friendly web applications while collaborating with cross-functional teams.",
  },
];

const Index: FC = () => {
  const { banner_image_function, page_info_function } = useContext(context);

  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    page_info_function("My Skills<br>and History", "resume", "resume");
  }, []);

  return (
    <TrueManLayout>
      {/* Skills */}
      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-lg-6">
            <div
              className="trm-skill-card trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">{skill.title}</h6>
                <span className="trm-label trm-label-light">{skill.level}</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className={`trm-progressbar p${skill.progress}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Knowledge */}
      <div className="row">
        <div className="col-lg-12">
          <h5 className="trm-mb-40 trm-title-with-divider">
            Knowledge <span data-number={2} />
          </h5>
        </div>
        <div className="col-lg-12">
          <div className="trm-card">
            <div className="row">
              {knowledge.map((category, index) => (
                <div key={index} className="col-lg-4">
                  <ul className="trm-list">
                    {category.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Employment History */}
      <div className="row">
        <div className="col-lg-12">
          <h5 className="trm-mb-40 trm-title-with-divider">
            Employment History <span data-number={3} />
          </h5>
        </div>
        {employmentHistory.map((job, index) => (
          <div key={index} className="col-lg-6">
            <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">{job.position}</h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>{job.duration}</i>
                    </div>
                  </div>
                </div>
                <div className="trm-mb-20">{job.description}</div>
                {/* {job.diploma && (
                  <a
                    data-fancybox
                    href={job.diploma}
                    className="trm-label trm-label-color"
                  >
                    Diploma <i className="fas fa-arrow-right" />
                  </a>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </TrueManLayout>
  );
};

export default Index;