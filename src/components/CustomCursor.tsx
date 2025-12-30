import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const evaluateIsMobile = () => {
      const byWidth = window.matchMedia("(max-width: 767px)").matches;
      const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
      setIsMobile(byWidth || coarsePointer);
    };

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[data-hoverable]') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(!!isInteractive);
    };

    evaluateIsMobile();
    window.addEventListener('resize', evaluateIsMobile);
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', evaluateIsMobile);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-accent/80 mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovering ? 20 : 10),
          y: mousePosition.y - (isHovering ? 20 : 10),
          width: isHovering ? 40 : 20,
          height: isHovering ? 40 : 20,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-2 border-accent/50"
        animate={{
          x: mousePosition.x - (isHovering ? 30 : 20),
          y: mousePosition.y - (isHovering ? 30 : 20),
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          opacity: isHovering ? 1 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  );
};

export default CustomCursor;
