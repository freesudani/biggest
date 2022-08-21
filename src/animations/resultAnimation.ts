export const resultVariant = {
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
      staggerChildren: 1,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const imageVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      ease: "easeIn",
    },
  },
};

export const paragraphVariant = {
  hidden: {
    opacity: 0,
    x: "10px",
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
};
