import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Users, Lightbulb, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Product = {
  icon: typeof Users;
  name: string;
  type: string;
  tagline: string;
  problem: string;
  solution: string;
  outcome: string;
  image: string;
  year: string;
  hasAppStore: boolean;
  status: string;
  ownership?: string;
  link?: string;
  ctaLabel?: string;
  website?: string;
  appStore?: string;
  playStore?: string;
};

const products: Product[] = [
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
    ownership: "Built & owned by Byte Genie",
    website: "https://memberbook.io/",
    playStore: "https://play.google.com/store/apps/details?id=com.memberbook",
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
    ownership: "Built & owned by Byte Genie",
  },
  {
    icon: Lightbulb,
    name: "Tech Deep Dives",
    type: "Company Owned",
    tagline: "Deep tech explorations and analysis",
    problem: "Founders and product teams need concise, trustworthy tech breakdowns before committing to solutions.",
    solution: "A Byte Genie-owned publication that turns complex tech topics into actionable, real-world guidance.",
    outcome: "Live — Helping teams make better technical bets",
    image: "https://images.unsplash.com/photo-1451186859696-371d9477be93?w=600&h=400&fit=crop",
    year: "BUILT IN 2023",
    hasAppStore: false,
    status: "LIVE",
    ownership: "Owned and operated by Byte Genie",
    link: "https://www.techdeepdives.in/",
    ctaLabel: "Visit Tech Deep Dives",
  },
  {
    icon: Building2,
    name: "The BCD Global",
    type: "Client Site",
    tagline: "Global logistics and supply chain partner",
    problem: "BCD Global needed a modern digital presence that showcases breadth of services while capturing leads.",
    solution: "Redesigned, performant site with clear service stories, calls-to-action, and conversion-focused flows.",
    outcome: "Live — Driving qualified leads for BCD Global",
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600&h=400&fit=crop",
    year: "SHIPPED IN 2024",
    hasAppStore: false,
    status: "LIVE",
    ownership: "Client delivery by Byte Genie",
    link: "https://www.thebcdglobal.com/",
    ctaLabel: "Visit BCD Global",
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
    ownership: "Built in partnership with clients",
  },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const tilt = index % 2 === 0 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative h-[640px] md:h-[660px] w-full min-w-[82vw] sm:min-w-[68vw] md:min-w-[52vw] lg:min-w-[45vw] xl:min-w-[40vw] rounded-[28px] overflow-hidden md:cursor-pointer border border-border/30 snap-center shadow-[0_24px_90px_rgba(0,0,0,0.5)] ${tilt}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--accent)/0.12),transparent_40%),linear-gradient(to_right,hsl(var(--border)/0.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.25)_1px,transparent_1px)] bg-[size:100%_100%,42px_42px,42px_42px]" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-45"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/75 to-background" />

      {/* Content container */}
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col">
        {/* Top content */}
        <div className="flex flex-col items-start gap-3 max-w-xl">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            {product.type}
          </p>
          <motion.h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
            style={{
              textShadow: isHovered ? '0 0 32px hsl(var(--accent)), 0 0 64px hsl(var(--accent) / 0.4)' : '0 0 18px rgba(0,0,0,0.45)',
              color: isHovered ? 'hsl(var(--accent))' : 'hsl(var(--foreground))'
            }}
          >
            {product.name}
          </motion.h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            {product.tagline}
          </p>
        </div>

        <div className="flex-1" />

        {/* Bottom content */}
        <div className="relative">
          <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider flex items-center gap-2">
            <span className="inline-block h-1.5 w-8 rounded-full bg-accent/80" />
            {product.ownership ?? "Built with Byte Genie"}
          </p>

          <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-foreground text-xs font-semibold">
              {product.status}
            </span>
            <span className="text-xs">{product.year}</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </div>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              height: isHovered ? 'auto' : 0 
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-accent rounded-2xl p-5 text-accent-foreground shadow-lg">
              <p className="text-sm mb-2">
                <span className="font-bold">Problem: </span>
                {product.problem}
              </p>
              <p className="text-sm mb-4">
                <span className="font-bold">Solution: </span>
                {product.solution}
              </p>

              <div className="flex flex-wrap gap-3">
                {product.website && (
                  <Button
                    asChild
                    variant="secondary"
                    size="sm"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    <a href={product.website} target="_blank" rel="noreferrer" data-hoverable>
                      Website
                    </a>
                  </Button>
                )}

                {product.appStore && (
                  <Button
                    asChild
                    variant="secondary"
                    size="sm"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    <a href={product.appStore} target="_blank" rel="noreferrer" data-hoverable>
                      App Store
                    </a>
                  </Button>
                )}

                {product.playStore && (
                  <Button
                    asChild
                    variant="secondary"
                    size="sm"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    <a href={product.playStore} target="_blank" rel="noreferrer" data-hoverable>
                      Play Store
                    </a>
                  </Button>
                )}

                {!product.website && !product.appStore && !product.playStore && product.link && (
                  <Button
                    asChild
                    variant="secondary"
                    size="sm"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    <a href={product.link} target="_blank" rel="noreferrer" data-hoverable>
                      {product.ctaLabel ?? "Visit Project"}
                    </a>
                  </Button>
                )}

                {!product.website && !product.appStore && !product.playStore && !product.link && (
                  <Button variant="secondary" size="sm" className="bg-background text-foreground hover:bg-background/90">
                    Learn More
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Border glow on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 rounded-[28px] border-2 border-accent/50 pointer-events-none"
        style={{ boxShadow: '0 0 40px hsl(var(--accent) / 0.35)' }}
      />

    </motion.div>
  );
};

const ProductsSection = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.75;
    const maxScroll = node.scrollWidth - node.clientWidth;
    const atEnd = node.scrollLeft >= maxScroll - 32;
    const atStart = node.scrollLeft <= 32;

    if (direction === "right" && atEnd) {
      node.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction === "left" && atStart) {
      node.scrollTo({ left: maxScroll, behavior: "smooth" });
      return;
    }

    node.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

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
            <span 
              className="font-serif italic font-normal"
              style={{
                textShadow: '0 0 40px hsl(var(--accent)), 0 0 80px hsl(var(--accent) / 0.5)',
                color: 'hsl(var(--accent))'
              }}
            >
              All the time.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We work with teams across industries, we speak to experts, we do our research 
            and we are always experimenting all day, everyday. We've been building technology 
            for a long time and it shows.
          </p>
        </motion.div>

        {/* Products horizontal scroll */}
        <div className="relative">
          <div
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory px-4 md:px-6 scrollbar-none"
            ref={scrollerRef}
            style={{ scrollSnapStop: "always", scrollPaddingLeft: "1.5rem", scrollPaddingRight: "1.5rem" }}
          >
            {products.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />

          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-4 pointer-events-none">
            <button
              aria-label="Previous project"
              onClick={() => scrollByCard("left")}
              className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-foreground hover:bg-white/10 transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              aria-label="Next project"
              onClick={() => scrollByCard("right")}
              className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-foreground hover:bg-white/10 transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
