import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "SaaS-First Approach",
    description: "We build products, not just projects. Our experience running our own SaaS means we think long-term.",
  },
  {
    title: "Real Products Shipped",
    description: "MemberBook.io and IdeaStash.app aren't concepts—they're live, monetized products serving real users.",
  },
  {
    title: "Technology as a Service",
    description: "We're not an agency. We're your technology partner, invested in building software that generates revenue.",
  },
  {
    title: "Revenue-Focused Builds",
    description: "Every line of code is written with one goal: helping your business make money. No fluff, no waste.",
  },
  {
    title: "Production-Ready Speed",
    description: "We move fast without breaking things. Rapid iterations, solid architecture, deployed in weeks.",
  },
  {
    title: "Builder-Driven Team",
    description: "Our team has shipped products across industries. We understand the grind and we love the craft.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="section-label mb-6">WHY BYTE GENIE</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We bring{" "}
              <span className="font-serif italic font-normal text-accent">
                engineering
              </span>{" "}
              &{" "}
              <span className="font-serif italic font-normal text-muted-foreground">
                product
              </span>{" "}
              expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Each problem is looked at from a fresh lens to provide you with a solution 
              that solves your specific requirements and integrates with your existing infrastructure.
            </p>
          </motion.div>

          {/* Right column - Reasons */}
          <div className="space-y-0">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group py-8 border-b border-border first:pt-0 last:border-none"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
