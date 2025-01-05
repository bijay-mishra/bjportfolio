"use client";
import React, { FC, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TrueManLayout from "../../layout/TrueManLayout";
import { context } from "context/context";

const Index: FC = () => {
  const { page_info_function } = useContext(context);

  const [formData, setFormData] = useState({ name: "", email: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    page_info_function(
      "Have a question?    <br>Let's Get in Touch    ",
      "contact",
      "contact"
    );
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, text } = formData;

    // Basic validation
    if (!name || !email || !text) {
      toast.error("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulating a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", text: "" }); // Reset the form
      toast.success("Your message has been sent successfully!");
    }, 2000);
  };

  return (
    <TrueManLayout>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="row">
        <div className="col-lg-6">
          <div className="trm-service-icon-box trm-scroll-animation trm-active-el" data-scroll data-scroll-offset={40}>
            <div className="trm-service-content">
              <div className="trm-icon">
                <img src="img/icons/icon-5.svg" alt="icon" className="trm-black-icon" />
                <img src="img/icons/icon-5w.svg" alt="icon" className="trm-white-icon" />
              </div>
              <h6 className="trm-mb-20">Call</h6>
              <div className="trm-mb-15">
                <span className="trm-label">Work:</span> <span className="trm-text-sm">+977-9823277720</span>
              </div>
              <div>
                <span className="trm-label">Personal:</span> <span className="trm-text-sm">+977-9864337242</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="trm-service-icon-box trm-scroll-animation trm-active-el" data-scroll data-scroll-offset={40}>
            <div className="trm-service-content">
              <div className="trm-icon">
                <img src="img/icons/icon-6.svg" alt="icon" className="trm-black-icon" />
                <img src="img/icons/icon-6w.svg" alt="icon" className="trm-white-icon" />
              </div>
              <h6 className="trm-mb-20">Write</h6>
              <div className="trm-mb-15">
                <span className="trm-label">Email:</span> <span className="trm-text-sm">bijaymishra276@gmail.com</span>
              </div>
              <div>
                <span className="trm-label">Facebook:</span> <span className="trm-text-sm">Bijay Mishra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h5 className="trm-mb-40 trm-title-with-divider">
            Get in touch <span data-number={2} />
          </h5>
        </div>
        <div className="col-lg-12">
          <div className="trm-contact-card">
            <form id="form2" onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleInputChange} />
              <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
              <textarea name="text" rows={6} placeholder="Message" value={formData.text} onChange={handleInputChange} />
              <div className="trm-form-bottom">
                <button type="submit" className="trm-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send"} <i className="fas fa-arrow-right" />
                </button>
                <div className="trm-text-sm">
                  * I promise the confidentiality of your personal information
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </TrueManLayout>
  );
};

export default Index;