import Head from "next/head";

export default function SEOHeader() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Spencer Lepine - Software Engineer Portfolio</title>
      <meta
        name="title"
        content="Spencer Lepine - Software Engineer Portfolio"
      />
      <meta
        name="description"
        content="Spencer Lepine is a professional full stack software engineer specializing in TypeScript, JavaScript, React, and Node.js. Explore innovative projects and get in touch to collaborate."
      />

      {/* SEO Keywords */}
      <meta
        name="keywords"
        content="Spencer Lepine, Software Engineer, Portfolio, AWS, Node.js, React, JavaScript, Frontend, Developer"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Spencer Lepine" />

      {/* Open Graph / Facebook - TODO */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://spencerlepine.com/" />
      <meta
        property="og:title"
        content="Spencer Lepine - Software Engineer Portfolio"
      />
      <meta
        property="og:description"
        content="Explore the portfolio of Spencer Lepine, a web developer proficient in Next.js, React, and modern web technologies."
      />
      <meta
        property="og:image"
        content="https://spencerlepine.com/images/portfolio-preview.jpg"
      />

      {/* Twitter - TODO */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://spencerlepine.com/" />
      <meta
        property="twitter:title"
        content="Spencer Lepine - Software Engineer Portfolio"
      />
      <meta
        property="twitter:description"
        content="Check out the projects and skills of Spencer Lepine, a web developer who specializes in Next.js and React."
      />
      <meta
        property="twitter:image"
        content="https://spencerlepine.com/images/portfolio-preview.jpg"
      />

      {/* Favicon - TODO */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
