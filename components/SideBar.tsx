import { useEffect } from "react";
import { typing } from "../utility/typing";

const SideBar: React.FC = () => {
  useEffect(() => {
    typing();
  }, []);
  const calculateAge = (dob: string | Date) => {
  const birthDate = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();

  // adjust if birthday hasn't occurred yet this year
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};
const dob = "2000-05-06";

  return (
    <div className="col-lg-4">
      <div className="trm-main-card-frame trm-sidebar">
        <div
          className="trm-main-card"
          data-scroll=""
          data-scroll-repeat=""
          data-scroll-sticky=""
          data-scroll-target="#content"
          data-scroll-offset={60}
        >
          <div className="trm-mc-header">
            <div className="trm-avatar-frame trm-mb-20">
              <img className="trm-avatar" src="/img/avatar.jpg" alt="Avatar" />
              <div className="trm-dot" />
            </div>
            <h5 className="trm-name trm-mb-15">Bijay Mishra</h5>
            <div className="trm-label">
              I`m{" "}
              <span className="trm-typed-text">
              </span>
            </div>
          </div>
          <div className="trm-divider trm-mb-40 trm-mt-40" />
          <div className="trm-social">
            <a href="https://www.linkedin.com/in/bijay-mishra-574863288/" target="_blank">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://www.facebook.com/bijay.mishra.1806253" target="_blank">
              <i className="fab fa-facebook" />
            </a>
            <a href="https://github.com/bijay-mishra" target="_blank">
              <i className="fab fa-github" />
            </a>
            <a href="https://x.com/?lang=en" target="_blank">
              <i className="fab fa-twitter" />
            </a>
          </div>
          <div className="trm-divider trm-mb-40 trm-mt-40" />
          <ul className="trm-table trm-mb-20">
            <li>
              <div className="trm-label">Residence:</div>
              <div className="trm-label trm-label-light">Kathmandu, Nepal</div>
            </li>
            <li>
              <div className="trm-label">Work:</div>
              <div className="trm-label trm-label-light">Riddhasoft Pvt. Ltd.</div>
            </li>
             <li>
              <div className="trm-label">Position:</div>
              <div className="trm-label trm-label-light">Software Developer</div>
            </li>
            <li>
              <div className="trm-label">Duration:</div>
              <div className="trm-label trm-label-light">Feb 2024-Present</div>
            </li>
           <li>
  <div className="trm-label">Age:</div>
  <div className="trm-label trm-label-light">
    {calculateAge(dob)}
  </div>
</li>
          </ul>
          {/* info end */}
          <div className="trm-divider trm-mb-40 trm-mt-40" />
          {/* action button */}
          <div className="text-center">
            <a data-fancybox="" href="#trm-order" className="trm-btn">
              Contact me <i className="far fa-envelope" />
            </a>
          </div>
          {/* action button end */}
        </div>
      </div>
      {/* main card end */}
    </div>
  );
};
export default SideBar;