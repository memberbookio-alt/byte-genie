import { motion } from "framer-motion";
import { ExternalLink, Users, Lightbulb, Building2 } from "lucide-react";

const products = [
  {
    icon: Users,
    name: "MemberBook.io",
    type: "SaaS Product",
    problem: "Membership organizations struggle with scattered tools and manual processes.",
    solution: "An all-in-one membership management platform with automated billing, member portals, and engagement tools.",
    outcome: "Live & Active — Powering membership communities",
    link: "#",
    status: "SHIPPED",
  },
  {
    icon: Lightbulb,
    name: "IdeaStash.app",
    type: "SaaS Product",
    problem: "Great ideas get lost in notes apps, never seeing the light of day.",
    solution: "A beautiful idea management tool that helps you capture, develop, and prioritize your best ideas.",
    outcome: "Live & Active — Helping builders ship",
    link: "#",
    status: "SHIPPED",
  },
  {
    icon: Building2,
    name: "Client Projects",
    type: "Custom Builds",
    problem: "D2C and B2B businesses need custom software that drives revenue, not generic templates.",
    solution: "Bespoke applications tailored to your exact business model, from e-commerce platforms to internal tools.",
    outcome: "Multiple shipped projects generating revenue for clients",
    link: "#",
    status: "ONGOING",
  },
];

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

        {/* Accent dot */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <span className="accent-dot animate-glow-pulse" />
        </motion.div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-card border border-border rounded-2xl p-8 card-hover"
            >
              {/* Status badge */}
              <div className="absolute top-6 right-6">
                <span className={`text-xs font-semibold tracking-wider px-3 py-1 rounded-full ${
                  product.status === "SHIPPED" 
                    ? "bg-accent/10 text-accent" 
                    : "bg-secondary text-muted-foreground"
                }`}>
                  {product.status}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <product.icon className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-xs text-muted-foreground tracking-wider uppercase mb-2">
                  {product.type}
                </p>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
              </div>

              {/* Details */}
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-muted-foreground font-medium mb-1">Problem</p>
                  <p className="text-foreground/80">{product.problem}</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium mb-1">Solution</p>
                  <p className="text-foreground/80">{product.solution}</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-accent font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    {product.outcome}
                  </p>
                </div>
              </div>

              {/* Link */}
              <a 
                href={product.link}
                className="absolute inset-0 rounded-2xl"
                aria-label={`Learn more about ${product.name}`}
              />
              <ExternalLink className="absolute bottom-8 right-8 w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
