"use client"
import React, { FC, useContext, useEffect } from 'react';
import Link from "next/link";
import { context } from '../../context/context';
import TrueManLayout from '../../layout/TrueManLayout';
import Seo from 'components/Seo';

const Index: FC = () => {
  const { banner_image_function, page_info_function } = useContext(context);

  useEffect(() => {
    banner_image_function("/img/blog/b6.jpg");
    page_info_function(
      "Create your blog<br>with Trueman",
      "Newsletter",
      "publication"
    );
  }, []);

  return (
    <TrueManLayout>
       {/* <Seo
        title="Bijaya Mishra - Home"
        description="Welcome to Bijaya Mishra's portfolio. Discover my skills, projects, and experience in web development."
        url="https://bijayamishra.com.np"
      /> */}
      <div className="row">
        <div className="col-lg-4">
          <div className="trm-card trm-label trm-label-light text-center">
            <i className="far fa-calendar-alt trm-icon" />
            <br />
           7 DECEMBER
          </div>
        </div>
        <div className="col-lg-4">
          <div className="trm-card trm-label trm-label-light text-center">
            <i className="far fa-clock trm-icon" />
            <br />
            14:32
          </div>
        </div>
        <div className="col-lg-4">
          <div className="trm-card trm-label trm-label-light text-center">
            <i className="far fa-user trm-icon" />
            <br />
            Bijay
          </div>
        </div>
      </div>
      <div className="trm-card trm-publication">
        <p className="trm-text-lg trm-contrast trm-mb-40">
        The web development landscape is constantly evolving, and staying ahead means adopting frameworks that offer flexibility and performance. Next.js has risen to prominence as the go-to framework for modern web development. With features like server-side rendering, static site generation, and seamless routing, it’s easy to see why developers love it.


        </p>
        <p className="trm-mb-40">
        The web development industry is evolving faster than ever, with developers seeking frameworks that combine simplicity, performance, and flexibility. Among these, Next.js stands out as a revolutionary tool that has reshaped how we approach building modern web applications. Next.js offers server-side rendering and static site generation, which make websites faster, more efficient, and incredibly SEO-friendly. This means that pages load quickly and rank better on search engines, ensuring a seamless experience for both users and developers.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <a href="img/blog/b5.jpg" data-fancybox="gallery">
              <img
                src="img/blog/b5.jpg"
                alt="img"
                className="trm-just-img trm-mb-40"
              />
            </a>
          </div>
          <div className="col-lg-6">
            <a href="img/blog/b4.jpg" data-fancybox="gallery">
              <img
                src="img/blog/b4.jpg"
                alt="img"
                className="trm-just-img trm-mb-40"
              />
            </a>
          </div>
        </div>
        <p className="trm-mb-40">
        One of the most significant advantages of Next.js is its ability to eliminate complex setups. Developers no longer have to spend hours configuring routing, API calls, or performance optimizations. Instead, the framework provides built-in solutions for routing, code-splitting, and API handling. Whether you’re building an e-commerce platform, a content-heavy blog, or a dynamic web application, Next.js offers the flexibility and tools required for projects of all sizes.
        </p>
        <blockquote className="trm-color-quote trm-mb-40">
        Next.js isn’t just a framework; it’s a complete toolkit for building the future of web apps.
        </blockquote>
        <p className="trm-mb-40">
        As more businesses and developers prioritize scalability and performance, Next.js is becoming the framework of choice for its robust capabilities and developer-friendly approach. If you're aiming to stay ahead in the competitive world of web development, adopting Next.js is not just an option—it’s a necessity.
        </p>
        <div className="row">
          {/* <div className="col-lg-6">
            <ul className="trm-list trm-mb-40">
              <li>Voluptate reprehenderit omnis</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Quisquam temporibus repudiandae</li>
            </ul>
          </div> */}
          {/* <div className="col-lg-6">
            <ul className="trm-list trm-mb-40">
              <li>Fugit facilis temporibus fuga</li>
              <li>Nulla culpa dolor</li>
              <li>Consectetur adipisicing elit</li>
            </ul>
          </div> */}
        </div>
        {/* <p className="trm-mb-40">
          Quaerat quia provident officiis delectus. Fugit facilis temporibus
          fuga nobis aut recusandae temporibus fuga nobis aut recusandae
          nesciunt, animi facere blanditiis tenetur tempora mollitia enim ea
          sapiente at eos minus dignissimos consectetur adipisicing elit
          veritatis modi voluptatem harum saepe, id qui adipisci!
        </p> */}
        {/* <span className="trm-text-sm">
          * Mollitia - Consectetur adipisicing dolor sit amet, consectetur
          adipisicing elit.
        </span> */}
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h5 className="trm-mb-40 trm-title-with-divider">
            Similar Publications <span data-number={2} />
          </h5>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-blog-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <Link legacyBehavior href="/publication">
              <a className="trm-cover-frame trm-anima-link">
                <img src="img/blog/b2.jpg" alt="cover" />
              </a>
            </Link>
            <div className="trm-card-descr">
              <div className="trm-label trm-category trm-mb-20">
                <a href="#.">Technology</a>
              </div>
              <h5 className="trm-mb-20">
                <Link legacyBehavior href="/publication">
                  <a className="trm-anima-link">
                  Why Next.js is the Future of Web Development
                  </a>
                </Link>
              </h5>
              <div className="trm-divider trm-mb-20 trm-mt-20" />
              <ul className="trm-card-data trm-label">
                <li>7 DECEMBER</li>
                <li>14:32</li>
                {/* <li>Emma T.</li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-blog-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <Link legacyBehavior href="/publication">
              <a className="trm-cover-frame trm-anima-link">
                <img src="img/blog/b7.jpg" alt="cover" />
              </a>
            </Link>
            <div className="trm-card-descr">
              <div className="trm-label trm-category trm-mb-20">
                <a href="#.">Productivity</a>
              </div>
              <h5 className="trm-mb-20">
                <Link legacyBehavior href="/publication">
                  <a className="trm-anima-link">
                  How TypeScript Simplifies Complex Development Projects
                  </a>
                </Link>
              </h5>
              <div className="trm-divider trm-mb-20 trm-mt-20" />
              <ul className="trm-card-data trm-label">
                <li>7 DECEMBER</li>
                <li>14:32</li>
                {/* <li>Emma T.</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="trm-divider trm-mb-40" />
      <div
        className="trm-subscribe-card trm-scroll-animation trm-active-el"
        data-scroll
        data-scroll-offset={40}
      >
        <div className="row">
          <div className="col-lg-4 align-self-center">
            <h5>Subscribe to my newsletter</h5>
          </div>
          <div className="col-lg-8">
            <form>
              <input type="email" placeholder="Email" />
              <button className="trm-btn" type="submit">
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </TrueManLayout>
  );
};

export default Index;