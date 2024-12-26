const Services: React.FC = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-mt-40 trm-title-with-divider">
          My Services <span data-number={3} />
        </h5>
      </div>
      <div className="col-lg-6">
        {/* service */}
        <div
          className="trm-service-icon-box trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="/img/icons/icon-1.svg"
                alt="icon"
                className="trm-black-icon"
              />
              <img
                src="/img/icons/icon-1w.svg"
                alt="icon"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Web Application</h6>
            <div className="trm-mb-20">
            Build dynamic and scalable web applications tailored to meet your business needs.
            </div>
            <a
              data-fancybox=""
              href="#trm-order"
              className="trm-label trm-label-color"
            >
              Order now <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* service end */}
      </div>
      <div className="col-lg-6">
        {/* service */}
        <div
          className="trm-service-icon-box trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="/img/icons/icon-2.svg"
                alt="icon"
                className="trm-black-icon"
              />
              <img
                src="/img/icons/icon-2w.svg"
                alt="icon"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Website Design</h6>
            <div className="trm-mb-20">
            Create visually appealing and responsive website designs that captivate users.
            </div>
            <a
              data-fancybox=""
              href="#trm-order"
              className="trm-label trm-label-color"
            >
              Order now <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* service end */}
      </div>
      <div className="col-lg-6">
        {/* service */}
        <div
          className="trm-service-icon-box trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="/img/icons/icon-3.svg"
                alt="icon"
                className="trm-black-icon"
              />
              <img
                src="/img/icons/icon-3w.svg"
                alt="icon"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">UI/UX Design</h6>
            <div className="trm-mb-20">
            Design intuitive user interfaces and experiences that prioritize functionality and user engagement.
            </div>
            <a
              data-fancybox=""
              href="#trm-order"
              className="trm-label trm-label-color"
            >
              Order now <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* service end */}
      </div>
      <div className="col-lg-6">
        {/* service */}
        <div
          className="trm-service-icon-box trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="/img/icons/icon-4.svg"
                alt="icon"
                className="trm-black-icon"
              />
              <img
                src="/img/icons/icon-4w.svg"
                alt="icon"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Frontend Architecture</h6>
            <div className="trm-mb-20">
            Develop robust and scalable frontend architecture for seamless application performance.
            </div>
            <a
              data-fancybox=""
              href="#trm-order"
              className="trm-label trm-label-color"
            >
              Order now <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* service end */}
      </div>
    </div>
  );
};
export default Services;