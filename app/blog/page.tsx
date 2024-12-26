"use client"
import React, { FC, useContext, useEffect } from 'react';
import Link from "next/link";
import { context } from '../../context/context';
import TrueManLayout from '../../layout/TrueManLayout';

const Index: FC = () => {
  const { banner_image_function, page_info_function } = useContext(context);

  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    page_info_function(
      "Welcome to<br>my personal blog",
      "Newsletter",
      "blog",
      false
    );
  }, [banner_image_function, page_info_function]);

  return (
    <TrueManLayout>
      <div className="row">
        <div className="col-lg-6">
          <div
            className="trm-blog-categories trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <h6>
              Design <span className="trm-number">296</span>
            </h6>
            <div className="trm-divider trm-mb-20 trm-mt-20" />
            <a href="#." className="trm-label">
              Read publications <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-blog-categories trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <h6>
              Lifestyle <span className="trm-number">22</span>
            </h6>
            <div className="trm-divider trm-mb-20 trm-mt-20" />
            <a href="#." className="trm-label">
              Read publications <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-blog-categories trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <h6>
              Fashion <span className="trm-number">43</span>
            </h6>
            <div className="trm-divider trm-mb-20 trm-mt-20" />
            <a href="#." className="trm-label">
              Read publications <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-blog-categories trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <h6>
              Art <span className="trm-number">64</span>
            </h6>
            <div className="trm-divider trm-mb-20 trm-mt-20" />
            <a href="#." className="trm-label">
              Read publications <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h5 className="trm-mb-40 trm-title-with-divider">
            Newest Publications <span data-number={1} />
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
                <img src="img/blog/b1.jpg" alt="cover" />
              </a>
            </Link>
            <div className="trm-card-descr">
              <div className="trm-label trm-category trm-mb-20">
                <a href="#.">Lifestyle</a>
              </div>
              <h5 className="trm-mb-20">
                <Link legacyBehavior href="/publication">
                  <a className="trm-anima-link">
                  Server-Side Rendering (SSR) in Next.js
                  </a>
                </Link>
              </h5>
              <div className="trm-divider trm-mb-20 trm-mt-20" />
              <ul className="trm-card-data trm-label">
                <li>11 December</li>
                <li>15:32</li>
                <li>Bijay.</li>
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
                <img src="img/blog/b2.jpg" alt="cover" />
              </a>
            </Link>
            <div className="trm-card-descr">
              <div className="trm-label trm-category trm-mb-20">
                <a href="#.">Lifestyle</a>
              </div>
              <h5 className="trm-mb-20">
                <Link legacyBehavior href="/publication">
                  <a className="trm-anima-link">
                  Optimizing Web Performance with Next.js Toolkit
                  </a>
                </Link>
              </h5>
              <div className="trm-divider trm-mb-20 trm-mt-20" />
              <ul className="trm-card-data trm-label">
                <li>11 December</li>
                <li>08:32</li>
                <li>Bijay.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h5 className="trm-mb-40 trm-title-with-divider">
            Popular publications <span data-number={2} />
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
                <img src="img/blog/b3.jpg" alt="cover" />
              </a>
            </Link>
            <div className="trm-card-descr">
              <div className="trm-label trm-category trm-mb-20">
                <a href="#.">Lifestyle</a>
              </div>
              <h5 className="trm-mb-20">
                <Link legacyBehavior href="/publication">
                  <a className="trm-anima-link">
                  Real-Time Data Fetching in Next.js with getServerSideProps
                  </a>
                </Link>
              </h5>
              <div className="trm-divider trm-mb-20 trm-mt-20" />
              <ul className="trm-card-data trm-label">
                <li>11 December</li>
                <li>11:32</li>
                <li>Bijay.</li>
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
                <img src="img/blog/b4.jpg" alt="cover" />
              </a>
            </Link>
            <div className="trm-card-descr">
              <div className="trm-label trm-category trm-mb-20">
                <a href="#.">Lifestyle</a>
              </div>
              <h5 className="trm-mb-20">
                <Link legacyBehavior href="/publication">
                  <a className="trm-anima-link">
                  Migrating a Legacy Website to Next.js:
                  </a>
                </Link>
              </h5>
              <div className="trm-divider trm-mb-20 trm-mt-20" />
              <ul className="trm-card-data trm-label">
                <li>12 December</li>
                <li>12:32</li>
                <li>Emma T.</li>
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
                <img src="img/blog/b5.jpg" alt="cover" />
              </a>
            </Link>
            <div className="trm-card-descr">
              <div className="trm-label trm-category trm-mb-20">
                <a href="#.">Lifestyle</a>
              </div>
              <h5 className="trm-mb-20">
                <Link legacyBehavior href="/publication">
                  <a className="trm-anima-link">
                  Integrating GraphQL with Next.js for Modern APIs
                  </a>
                </Link>
              </h5>
              <div className="trm-divider trm-mb-20 trm-mt-20" />
              <ul className="trm-card-data trm-label">
                <li>13 December</li>
                <li>10:32</li>
                <li>Bijay.</li>
              </ul>
            </div>
          </div>
        </div>
       
      </div>
      <div className="trm-divider trm-mb-40" />
      <ul className="trm-pagination">
        <li>
          <span>1</span>
        </li>
        <li>
          <a href="#.">2</a>
        </li>
        <li>
          <a href="#.">3</a>
        </li>
        <li>
          <a href="#.">4</a>
        </li>
        <li>
          <a href="#.">5</a>
        </li>
      </ul>
      <div className="row">
        <div className="col-lg-12">
          <h5 className="trm-mb-40 trm-title-with-divider">
            Older publications <span data-number={3} />
          </h5>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-older-publications-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-older-publication trm-mb-20">
              <Link legacyBehavior href="/publication">
                <a className="trm-op-top trm-anima-link">
                  <span className="trm-op-cover">
                    <img src="img/blog/b4.jpg" alt="cover" />
                  </span>
                  <h6 className="trm-op-title">
                  How to Get Started with Next.js: A Beginner's Guide
                  </h6>
                </a>
              </Link>
              <div className="trm-divider trm-mb-15 trm-mt-20" />
              <ul className="trm-card-data trm-label">
                <li>11 July</li>
                <li>15:32</li>
                <li>Bijay.</li>
              </ul>
            </div>
            <div className="trm-older-publication">
              <Link legacyBehavior href="/publication">
                <a className="trm-op-top trm-anima-link">
                  <span className="trm-op-cover">
                    <img src="img/blog/b5.jpg" alt="cover" />
                  </span>
                  <h6 className="trm-op-title">
                  Using API Routes in Next.js 
                  </h6>
                </a>
              </Link>
              <div className="trm-divider trm-mb-15 trm-mt-20" />
              <ul className="trm-card-data trm-label">
                <li>11 July</li>
                <li>18:32</li>
                <li>Bijay.</li>
              </ul>
            </div>
           
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-older-publications-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-older-publication trm-mb-20">
              <Link legacyBehavior href="/publication">
                <a className="trm-op-top trm-anima-link">
                  <span className="trm-op-cover">
                    <img src="img/blog/b7.jpg" alt="cover" />
                  </span>
                  <h6 className="trm-op-title">
                  The Future of React Development:
                  </h6>
                </a>
              </Link>
              <div className="trm-divider trm-mb-15 trm-mt-20" />
              <ul className="trm-card-data trm-label">
                <li>17 JULYS</li>
                <li>12:32</li>
                <li>Bijay.</li>
              </ul>
            </div>
            
            <div className="trm-older-publication">
              <Link legacyBehavior href="/publication">
                <a className="trm-op-top trm-anima-link">
                  <span className="trm-op-cover">
                    <img src="img/blog/b5.jpg" alt="cover" />
                  </span>
                  <h6 className="trm-op-title">
                    Make a resume for yourself today
                  </h6>
                </a>
              </Link>
              <div className="trm-divider trm-mb-15 trm-mt-20" />
              <ul className="trm-card-data trm-label">
                <li>17 JULYS</li>
                <li>14:32</li>
                <li>Emma T.</li>
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