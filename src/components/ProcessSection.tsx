import { motion, useScroll, useTransform } from "framer-motion";
import { Telescope, Lightbulb, Wrench, Plus } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    label: "(Step 1)",
    title: "Discovery",
    description: "Together, we dive into your world. A brainstorming session where your challenges meet our creative thinking",
    subtext: "We learn from you",
    icon: Telescope,
  },
  {
    number: "02",
    label: "(Step 2)",
    title: "Analysis",
    description: "We craft a tailored action plan that aligns with your budget and requirements — no guesswork, just solutions.",
    subtext: "We build for you",
    icon: Lightbulb,
  },
  {
    number: "03",
    label: "(Step 3)",
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

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div
      ref={stepRef}
      style={{ opacity }}
      className="min-h-[80vh] flex items-center justify-center"
    >
      <motion.div 
        style={{ y }}
        className="w-full py-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Step info */}
          <div>
            <span className="text-sm text-muted-foreground mb-3 block">{step.label}</span>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              {step.title}
            </h3>
          </div>

          {/* Right - Description and icon */}
          <div className="flex gap-8 items-start">
            <div className="flex-1">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {step.description}
              </p>
              
              {/* Expandable section */}
              <div className="border-t border-border pt-6">
                <div className="flex items-center justify-between cursor-pointer group">
                  <span className="text-lg text-foreground group-hover:text-accent transition-colors">
                    {step.subtext}
                  </span>
                  <Plus className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </div>
            </div>

            {/* Icon */}
            <div className="hidden md:flex flex-shrink-0">
              <Icon className="w-24 h-24 text-foreground" strokeWidth={1} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="process" className="py-16 relative" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="section-label mb-6">HOW WE SHIP</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our{" "}
            <span className="font-serif italic font-normal text-muted-foreground">
              Process
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div>
          {steps.map((step, index) => (
            <ProcessStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
