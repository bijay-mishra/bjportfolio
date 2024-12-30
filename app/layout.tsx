import "@css/plugins/bootstrap.min.css";
import "@css/plugins/font-awesome.min.css";
import "@css/plugins/locomotive-scroll.css";
import "@css/plugins/swiper.min.css";
import "@css/style-light.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./globals.css";
import { DefaultSeo } from "next-seo";

import Preloader from "../components/Preloader";
import TrueManModeCss from "../layout/TrueManModeCss";
import StateProvider from "../context/context";
// import seoConfig from "@lib/seo.config";

export const metadata = {
  title: "Bijay",
  description: "Computer Engineer",
  image: "/img/avatar.jpg",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/* <head>
        <DefaultSeo {...seoConfig} />
      </head> */}
        <StateProvider>
          <TrueManModeCss />
      <body>
        {/* Wrap the app with StateProvider */}
          <div className="trm-app-frame">
            <Preloader />
            <div id="trm-dynamic-content" className="trm-swup-animation">
              <div
                id="trm-scroll-container"
                className="trm-scroll-container"
                style={{ opacity: 0 }}
              >
                {children}
              </div>
            </div>
          </div>
      </body>
        </StateProvider>
    </html>
  );
}