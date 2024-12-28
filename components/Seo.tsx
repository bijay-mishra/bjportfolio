import { NextSeo } from "next-seo";

interface SeoProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

const Seo = ({ title, description, url, image }: SeoProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: image || "https://bijayamishra.com.np/og-image.jpg",
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }}
    />
  );
};

export default Seo;