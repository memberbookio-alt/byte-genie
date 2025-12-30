import { motion, useScroll, useTransform } from "framer-motion";
import { Telescope, Lightbulb, Wrench } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Together, we dive into your world. A brainstorming session where your challenges meet our creative thinking.",
    subtext: "We learn from you",
    icon: Telescope,
  },
  {
    number: "02",
    title: "Analysis",
    description: "We craft a tailored action plan that aligns with your budget and requirements — no guesswork, just solutions.",
    subtext: "We build for you",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Execution",
    description: "It's go time. Our team gets to work, setting plans into motion, turning ideas into real-world impact.",
    subtext: "We keep you looped",
    icon: Wrench,
  },
];

const ProcessStep = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const Icon = step.icon;

  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={stepRef}
      style={{ opacity, x }}
      className="group py-10 border-b border-border last:border-none"
    >
      <div className="flex items-start gap-6 md:gap-10">
        {/* Left - Number */}
        <div className="flex-shrink-0">
          <span className="text-6xl md:text-8xl font-bold text-muted-foreground/20 group-hover:text-accent/30 transition-colors duration-500">
            {step.number}
          </span>
        </div>

        {/* Right - Content */}
        <div className="flex-1 pt-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
              <Icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold group-hover:text-accent transition-colors duration-300">
              {step.title}
            </h3>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-3 max-w-2xl">
            {step.description}
          </p>

          <span className="text-accent font-medium">{step.subtext}</span>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="process" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Heading (sticky) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="section-label mb-6">HOW WE SHIP</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our{" "}
              <span className="font-serif italic font-normal text-muted-foreground">
                Process
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined approach that transforms your vision into reality. 
              We keep it simple, focused, and effective.
            </p>
          </motion.div>

          {/* Right column - Steps */}
          <div>
            {steps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
