// Animation variants for sections, cards, buttons, etc.
export const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.4, 0.0, 0.2, 1],
    },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

export const buttonHover = {
  hover: {
    scale: 1.06,
    boxShadow: "0 4px 24px 0 rgba(255, 183, 153, 0.18)",
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

export const cardHover = {
  rest: { scale: 1, boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)" },
  hover: {
    scale: 1.025,
    boxShadow: "0 8px 32px 0 rgba(255, 183, 153, 0.10)",
    transition: { type: "spring", stiffness: 220, damping: 16 },
  },
};

export const navbarSlide = {
  hidden: { y: -32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const floatingElement = {
  animate: {
    y: [0, -15, 0],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}; 