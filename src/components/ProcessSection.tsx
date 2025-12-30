import { motion } from "framer-motion";
import { Telescope, Lightbulb, Wrench } from "lucide-react";

const steps = [
  {
    number: "Step 1",
    title: "Discovery",
    description: "Together, we dive into your world. A brainstorming session where your challenges meet our creative thinking.",
    subtext: "We learn from you",
    icon: Telescope,
  },
  {
    number: "Step 2",
    title: "Analysis",
    description: "We craft a tailored action plan that aligns with your budget and requirements — no guesswork, just solutions.",
    subtext: "We build for you",
    icon: Lightbulb,
  },
  {
    number: "Step 3",
    title: "Execution",
    description: "It's go time. Our team gets to work, setting plans into motion, turning ideas into real-world impact.",
    subtext: "We keep you looped",
    icon: Wrench,
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 bg-card/30 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="section-label mb-6">HOW WE SHIP</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Our{" "}
            <span className="font-serif italic font-normal text-muted-foreground">
              Process
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-8 py-16 border-b border-border items-center">
                {/* Step number & title */}
                <div className="lg:col-span-3">
                  <p className="text-sm text-muted-foreground mb-2">({step.number})</p>
                  <h3 className="text-4xl md:text-5xl font-bold group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-6">
                  <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <p className="text-muted-foreground font-medium">{step.subtext}</p>
                  <div className="h-px bg-gradient-to-r from-accent to-transparent mt-4 w-24 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Icon */}
                <div className="lg:col-span-3 flex justify-end">
                  <div className="w-24 h-24 rounded-2xl border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <step.icon className="w-12 h-12 text-foreground/70 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accent dot */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <span className="accent-dot animate-glow-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
