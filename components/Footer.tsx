import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="trm-scroll-animation"
      data-scroll=""
      data-scroll-offset={50}
    >
      <div className="trm-label">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
      <div className="trm-label">
        Developed by:{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bijay Mishra
        </a>
      </div>
    </footer>
  );
};

export default Footer;

