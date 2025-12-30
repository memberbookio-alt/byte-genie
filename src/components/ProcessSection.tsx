import { motion, useScroll, useTransform } from "framer-motion";
import { Telescope, Lightbulb, Wrench } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    label: "Step 1",
    title: "Discovery",
    description: "Together, we dive into your world. A brainstorming session where your challenges meet our creative thinking",
    subtext: "We learn from you",
    icon: Telescope,
  },
  {
    number: "02",
    label: "Step 2",
    title: "Analysis",
    description: "We craft a tailored action plan that aligns with your budget and requirements — no guesswork, just solutions.",
    subtext: "We build for you",
    icon: Lightbulb,
  },
  {
    number: "03",
    label: "Step 3",
    title: "Execution",
    description: "It's go time. Our team gets to work, setting plans into motion, turning ideas into real-world impact.",
    subtext: "We keep you looped",
    icon: Wrench,
  },
];

const ProcessStep = ({ step, index, totalSteps }: { step: typeof steps[0]; index: number; totalSteps: number }) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const Icon = step.icon;

  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);

  return (
    <motion.div
      ref={stepRef}
      style={{ opacity, scale }}
      className="min-h-[70vh] flex items-center relative"
    >
      {/* Vertical timeline line */}
      <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border">
        {/* Animated progress line */}
        <motion.div 
          className="w-full bg-accent"
          style={{ 
            height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
            boxShadow: '0 0 10px hsl(var(--accent)), 0 0 20px hsl(var(--accent) / 0.5)'
          }}
        />
      </div>

      {/* Step indicator dot */}
      <motion.div 
        className="absolute left-[-8px] md:left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-accent bg-background z-10"
        style={{
          boxShadow: useTransform(scrollYProgress, [0, 0.5, 1], [
            'none',
            '0 0 20px hsl(var(--accent)), 0 0 40px hsl(var(--accent) / 0.5)',
            '0 0 20px hsl(var(--accent)), 0 0 40px hsl(var(--accent) / 0.5)'
          ])
        }}
      >
        <motion.div
          className="absolute inset-1 rounded-full bg-accent"
          style={{
            scale: useTransform(scrollYProgress, [0, 0.5], [0, 1])
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="ml-8 md:ml-24 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Step info */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl md:text-7xl font-bold text-accent/20">{step.number}</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">{step.label}</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {step.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Right - Icon and subtext */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            <motion.div 
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.05, borderColor: 'hsl(var(--accent))' }}
            >
              <Icon className="w-10 h-10 md:w-12 md:h-12 text-accent" strokeWidth={1.5} />
            </motion.div>
            <p className="text-lg text-foreground font-medium">{step.subtext}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="process" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left column - Sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:h-fit"
          >
            <div className="section-label mb-6">HOW WE SHIP</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our{" "}
              <span className="font-serif italic font-normal text-muted-foreground">
                Process
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A streamlined approach that gets you from idea to shipped product.
            </p>

            {/* Progress indicator */}
            <div className="hidden lg:block">
              <div className="flex flex-col gap-4">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    className="flex items-center gap-3 group cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-sm font-medium group-hover:border-accent group-hover:text-accent transition-colors">
                      {step.number}
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {step.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - Steps */}
          <div className="lg:col-span-8 relative">
            {steps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} totalSteps={steps.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
