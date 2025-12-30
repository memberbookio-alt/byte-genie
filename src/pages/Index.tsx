import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Byte Genie Technologies | We Ship Software. All The Time.</title>
        <meta 
          name="description" 
          content="Technology as a Service. We build and ship our own SaaS products and craft custom revenue-generating software for D2C and B2B businesses. Real problems, real products, shipped fast." 
        />
        <meta name="keywords" content="SaaS development, custom software, D2C software, B2B applications, technology as a service, software development, MemberBook, IdeaStash" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Byte Genie Technologies | We Ship Software. All The Time." />
        <meta property="og:description" content="Technology as a Service. We build SaaS products and custom revenue-generating software for businesses." />
        <meta property="og:site_name" content="Byte Genie Technologies" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Byte Genie Technologies | We Ship Software" />
        <meta name="twitter:description" content="Technology as a Service. We build SaaS products and custom software that drives revenue." />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://bytegenie.tech" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <ProductsSection />
          <ProcessSection />
          <WhyUsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
