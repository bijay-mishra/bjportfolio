"use client";
import { useContext, useEffect, FC } from "react";
import { context } from "../../context/context";
import TrueManLayout from "../../layout/TrueManLayout";
import Seo from "components/Seo";

interface PortfolioItem {
  id: number;
  img: string;
  title: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, img: "/img/portfolio/pumori.jpg", title: "Pumori Enterprise- Core Banking" },
  { id: 2, img: "/img/portfolio/erp.jpeg", title: "ERP-Valley Cold Store" },
  { id: 3, img: "/img/portfolio/hms.jpg", title: "HMS-Hotel Management System" },
  { id: 4, img: "/img/portfolio/finmax.jpeg", title: "Finmax Salesapp" },
  { id: 5, img: "/img/portfolio/22.jpg", title: "Bank Website" },
  { id: 6, img: "/img/portfolio/11.jpg", title: "IES website" },
  { id: 7, img: "/img/portfolio/44.jpg", title: "Super Market" },
  { id: 8, img: "/img/portfolio/licence.jpeg", title: "Engineering Licence Nepal App" },
  { id: 9, img: "/img/portfolio/expense.jpeg", title: "Expense Tracker App" },
  
];

const Index: FC = () => {
  const { banner_image_function, page_info_function } = useContext(context);
  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    page_info_function("Recent work<br>performed", "portfolio", "portfolio");
  }, []);
  return (
    <TrueManLayout>
       {/* <Seo
        title="Bijaya Mishra - Home"
        description="Welcome to Bijaya Mishra's portfolio. Discover my skills, projects, and experience in web development."
        url="https://bijayamishra.com.np"
      /> */}
      <div className="row">
        {portfolioItems.map((item: PortfolioItem) => (
          <div className="col-lg-6" key={item.id}>
            <a
              data-fancybox="portfolio"
              href={item.img}
              className="trm-portfolio-item trm-scroll-animation"
              data-scroll
              data-scroll-offset={40}
              data-cat="icon"
            >
              <div className="trm-cover-frame">
                <img className="trm-cover" src={item.img} alt="item" />
              </div>
              <div className="trm-item-description">
                <h6>{item.title}</h6>
                <div className="trm-zoom-icon">
                  <i className="fas fa-search-plus" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </TrueManLayout>
  );
};

export default Index;