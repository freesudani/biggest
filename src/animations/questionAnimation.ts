export const questionOption1Variant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.6,
      type: "spring",
      ease: "easeIn",
      stiffness: 50,
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    x: "-100vw",
    transition: {
      ease: "easeOut",
    },
  },
};

export const questionOption2Variant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.6,
      type: "spring",
      ease: "easeIn",
      stiffness: 50,
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transition: {
      ease: "easeOut",
    },
  },
};

export const dividerVariant = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: "-100vh",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const tickVariant = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
