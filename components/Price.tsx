const Price: React.FC = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Price plans <span data-number={8} />
        </h5>
      </div>
      <div className="col-lg-6">
        {/* price table */}
        <div
          className="trm-price trm-popular trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          {/* card header */}
          <div className="trm-price-header">
            <h6>Hourly Payment</h6>
          </div>
          {/* card header end */}
          {/* price */}
          <div className="trm-price-number">
            <sup>$</sup>35<sup>h</sup>
          </div>
          {/* price end */}
          <div className="trm-divider trm-mb-40 trm-mt-40" />
          {/* price list */}
          <ul className="trm-price-list">
            <li className="trm-label">Quick tasks or bug fixes.</li>
            <li className="trm-label">Small feature development.</li>
            <li className="trm-label trm-label-light">Code review and optimization.</li>
            <li className="trm-label trm-label-light">Flexible and scalable support.</li>
          </ul>
          {/* price list end */}
          <a data-fancybox="" href="#trm-order" className="trm-btn">
            Order now <i className="fas fa-arrow-right" />
          </a>
        </div>
        {/* price table */}
      </div>
      <div className="col-lg-6">
        {/* price table */}
        <div
          className="trm-price trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          {/* card header */}
          <div className="trm-price-header">
            <h6>Full Time</h6>
          </div>
          {/* card header end */}
          {/* price */}
          <div className="trm-price-number">
            <sup>$</sup>3999<sup>h</sup>
          </div>
          {/* price end */}
          <div className="trm-divider trm-mb-40 trm-mt-40" />
          {/* price list */}
          <ul className="trm-price-list">
            <li className="trm-label">Full project development.</li>
            <li className="trm-label">Ongoing maintenance.</li>
            <li className="trm-label">Continuous updates.</li>
            <li className="trm-label">Seamless collaboration.</li>
          </ul>
          {/* price list end */}
          <a data-fancybox="" href="#trm-order" className="trm-btn">
            Order now <i className="fas fa-arrow-right" />
          </a>
        </div>
        {/* price table end */}
      </div>
    </div>
  );
};
export default Price;