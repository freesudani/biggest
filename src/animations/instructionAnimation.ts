export const instructionVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.7,
      damping: 7,
      ease: "easeIn",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const paragraphVariant = {
  hidden: {
    opacity: 0,
    x: "10hw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.7,
      damping: 7,
      ease: "easeIn",
    },
  },
  exit: {
    x: "-5hw",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
