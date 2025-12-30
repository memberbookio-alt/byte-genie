import { motion, useScroll, useTransform } from "framer-motion";
import { Telescope, Lightbulb, Wrench, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Together, we dive into your world. A brainstorming session where your challenges meet our creative thinking.",
    subtext: "We learn from you",
    icon: Telescope,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    number: "02",
    title: "Analysis",
    description: "We craft a tailored action plan that aligns with your budget and requirements — no guesswork, just solutions.",
    subtext: "We build for you",
    icon: Lightbulb,
    color: "from-accent/20 to-yellow-500/20",
  },
  {
    number: "03",
    title: "Execution",
    description: "It's go time. Our team gets to work, setting plans into motion, turning ideas into real-world impact.",
    subtext: "We keep you looped",
    icon: Wrench,
    color: "from-green-500/20 to-emerald-500/20",
  },
];

const ProcessCard = ({ step, index, activeIndex, setActiveIndex }: { 
  step: typeof steps[0]; 
  index: number; 
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) => {
  const isActive = activeIndex === index;
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setActiveIndex(index)}
      className={`group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
        isActive 
          ? 'bg-card border-accent/50 shadow-[0_0_40px_hsl(var(--accent)/0.15)]' 
          : 'bg-card/50 border-border hover:border-accent/30'
      }`}
    >
      {/* Glow background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} blur-xl -z-10`}
      />

      <div className="flex items-start gap-6">
        {/* Number */}
        <motion.div 
          className={`text-6xl md:text-7xl font-bold transition-colors duration-300 ${
            isActive ? 'text-accent' : 'text-muted-foreground/30'
          }`}
          animate={{ scale: isActive ? 1.05 : 1 }}
        >
          {step.number}
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isActive ? 'bg-accent text-accent-foreground' : 'bg-secondary text-foreground'
              }`}
              animate={{ rotate: isActive ? 360 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
            <h3 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${
              isActive ? 'text-accent' : 'text-foreground'
            }`}>
              {step.title}
            </h3>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isActive ? 'auto' : 0, 
              opacity: isActive ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              {step.description}
            </p>
            <div className="flex items-center gap-2 text-accent">
              <span className="font-medium">{step.subtext}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {!isActive && (
            <p className="text-muted-foreground mt-2">{step.subtext}</p>
          )}
        </div>
      </div>

      {/* Connecting line */}
      {index < steps.length - 1 && (
        <div className="absolute -bottom-8 left-12 w-px h-8 bg-gradient-to-b from-border to-transparent" />
      )}
    </motion.div>
  );
};

const ProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const progressWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section id="process" className="py-32 bg-card/30 relative" ref={sectionRef}>
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-border">
        <motion.div 
          className="h-full bg-accent"
          style={{ width: progressWidth }}
        />
      </div>

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

        {/* Interactive steps */}
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <ProcessCard 
              key={step.title} 
              step={step} 
              index={index} 
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>

        {/* Step indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mt-12"
        >
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-accent w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
