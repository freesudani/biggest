export const NavbarImageVariant = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.7,
      damping: 9,
      ease: "easeIn",
      delay: 1.5,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};
