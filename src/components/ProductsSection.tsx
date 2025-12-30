import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Users, Lightbulb, Building2, Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Users,
    name: "MemberBook.io",
    type: "SaaS Product",
    tagline: "Membership Management Made Simple",
    problem: "Membership organizations struggle with scattered tools and manual processes.",
    solution: "An all-in-one membership management platform with automated billing, member portals, and engagement tools.",
    outcome: "Live & Active — Powering membership communities",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    year: "BUILT IN 2024",
    hasAppStore: true,
    status: "SHIPPED",
  },
  {
    icon: Lightbulb,
    name: "IdeaStash.app",
    type: "SaaS Product",
    tagline: "Where Great Ideas Take Shape",
    problem: "Great ideas get lost in notes apps, never seeing the light of day.",
    solution: "A beautiful idea management tool that helps you capture, develop, and prioritize your best ideas.",
    outcome: "Live & Active — Helping builders ship",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    year: "BUILT IN 2024",
    hasAppStore: true,
    status: "SHIPPED",
  },
  {
    icon: Building2,
    name: "Client Projects",
    type: "Custom Builds",
    tagline: "Bespoke Software Solutions",
    problem: "D2C and B2B businesses need custom software that drives revenue, not generic templates.",
    solution: "Bespoke applications tailored to your exact business model, from e-commerce platforms to internal tools.",
    outcome: "Multiple shipped projects generating revenue for clients",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    year: "ONGOING",
    hasAppStore: false,
    status: "ONGOING",
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative h-[500px] w-full rounded-3xl overflow-hidden cursor-pointer border border-border/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />

      {/* Content container */}
      <div className="absolute inset-0 p-8 flex flex-col">
        {/* Top area - can add decorative elements */}
        <div className="flex-1" />

        {/* Bottom content */}
        <div className="relative">
          {/* Glowing title */}
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-2 transition-all duration-300"
            style={{
              textShadow: isHovered ? '0 0 30px hsl(var(--accent)), 0 0 60px hsl(var(--accent) / 0.5)' : 'none',
              color: isHovered ? 'hsl(var(--accent))' : 'hsl(var(--foreground))'
            }}
          >
            {product.name}
          </motion.h3>
          
          {/* Year badge - always visible */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-muted-foreground">{product.year}</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Hover reveal content with yellow background */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              height: isHovered ? 'auto' : 0 
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-accent rounded-2xl p-5 text-accent-foreground">
              <p className="text-sm mb-2">
                <span className="font-bold">Problem: </span>
                {product.problem}
              </p>
              <p className="text-sm mb-4">
                <span className="font-bold">Solution: </span>
                {product.solution}
              </p>

              {/* App store buttons */}
              {product.hasAppStore && (
                <div className="flex gap-3">
                  <Button variant="secondary" size="sm" className="gap-2 bg-background text-foreground hover:bg-background/90">
                    <Apple className="w-4 h-4" />
                    App Store
                  </Button>
                  <Button variant="secondary" size="sm" className="gap-2 bg-background text-foreground hover:bg-background/90">
                    <Play className="w-4 h-4" />
                    Play Store
                  </Button>
                </div>
              )}

              {!product.hasAppStore && (
                <Button variant="secondary" size="sm" className="gap-2 bg-background text-foreground hover:bg-background/90">
                  Learn More
                  <ExternalLink className="w-4 h-4" />
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Border glow on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 rounded-3xl border-2 border-accent/50 pointer-events-none"
        style={{ boxShadow: '0 0 30px hsl(var(--accent) / 0.3)' }}
      />

      {/* Navigation dots */}
      <div className="absolute bottom-4 right-4 flex gap-1.5">
        {products.map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-foreground' : 'bg-muted-foreground/50'}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label mb-6">YOU'RE IN GOOD HANDS</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            We Ship.{" "}
            <span className="font-serif italic font-normal text-muted-foreground">
              All the time.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We work with teams across industries, we speak to experts, we do our research 
            and we are always experimenting all day, everyday. We've been building technology 
            for a long time and it shows.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
