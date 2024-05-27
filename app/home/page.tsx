import FeaturesBlocks from "./ui/feature-blocks/features-blocks";
import Features from "./ui/features/features";
import Hero from "./ui/hero";
import Newsletter from "./ui/newsletter/newsletter";
import Testimonials from "./ui/testimonials/testimonials";
import Head from 'next/head';

export const metadata = {
  title: "Primavera AI | Revolutionizing Customer Behavior with AI",
  description: "Discover a revolutionary platform using AI to understand and anticipate customer behavior. Centralize, integrate, and innovate with Primavera AI.",
};

export default function Home() {
  return (
      <>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="canonical" href="https://www.primavera-ai.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:url" content="https://www.primavera-ai.com" />
          <meta property="og:image" content="https://www.primavera-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconnectors.cc5c5b82.png&w=1200&q=75" />
          <meta property="twitter:title" content={metadata.title} />
          <meta property="twitter:description" content={metadata.description} />
          <meta property="twitter:image" content="https://www.primavera-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconnectors.cc5c5b82.png&w=1200&q=75" />
          <meta property="twitter:card" content="summary_large_image" />
        </Head>
        <Hero />
        <Features />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </>
  );
}
