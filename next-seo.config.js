const title =
  "Ali Yaghuti is a web developer and this is my official website intorducing me to this amazing world.";
const description = "Ali Yaghuti is an electronic engineer who loves coding.";

const SEO = {
  title,
  description,
  canonical: "https://aliyaghuti.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://aliyaghuti.com",
    title,
    description,
    images: [
      {
        url: "https://aliyaghuti.com/og.png",
        alt: title,
        width: 221,
        height: 261,
      },
    ],
  },
};

export default SEO;
