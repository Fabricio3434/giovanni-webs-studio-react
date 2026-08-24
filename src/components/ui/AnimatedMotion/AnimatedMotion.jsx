import { motion } from "motion/react";

const motionElements = {
  div: motion.div,
  dialog: motion.dialog,
};

export function AnimatedMotion({
  as = "div",
  children,
  className,
  isClosing = false,
  ...props
}) {
  const MotionElement = motionElements[as] ?? motion.div;

  return (
    <MotionElement
      className={className}
      initial={{ opacity: 0, y: 15 }}
      animate={isClosing ? { opacity: 0, y: -15 } : { opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={isClosing ? { pointerEvents: "none" } : undefined}
      {...props}
    >
      {children}
    </MotionElement>
  );
}
