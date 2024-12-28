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
  { id: 1, img: "/img/portfolio/11.jpg", title: "IES website" },
  { id: 2, img: "/img/portfolio/22.jpg", title: "Bank Website" },
  { id: 3, img: "/img/portfolio/33.jpg", title: "Company Website" },
  { id: 4, img: "/img/portfolio/44.jpg", title: "Super Market" },
  { id: 5, img: "/img/portfolio/55.jpg", title: "Music Player" },
  { id: 6, img: "/img/portfolio/66.jpg", title: "Big Basket" },
  { id: 5, img: "/img/portfolio/77.jpg", title: "Food Delivery" },
  { id: 6, img: "/img/portfolio/88.jpg", title: "Dashboard" },
];

const Index: FC = () => {
  const { banner_image_function, page_info_function } = useContext<any>(context||null);
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