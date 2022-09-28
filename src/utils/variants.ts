export const fadeIn = {
  initial: {
    color: "#ffffff",
    y: -30,
    opacity: 0,
  },
  animate: {
    color: "#0D0D2B",
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: .5 },
  },
};
export const fadeInDown = {
  initial: {
    y: -70,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.7,
      delayChildren: 0.8,
    },
  },
};

export const staggerBtns = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      // delayChildren: 0.5,
    },
  },
};

export const fadeInLeft = {
  initial: {
    x: 70,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};

export const buttonFadeInLeft = {
  initial: {
    x: -70,
    opacity: 0,
    rotate: 15,
  },
  animate: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", duration: 1, bounce: 0.2 },
  },
};

export const buttonFadeInRight = {
  initial: {
    x: 70,
    opacity: 0,
    rotate: 45,
  },
  animate: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", duration: .5, bounce: 0.4 },
  },
};
export const subscribeFadeInRight = {
  initial: {
    x: 50,
    opacity: 0,
    rotate: 20,
  },
  animate: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", duration: 1.1, bounce: 0.4 },
  },
};

export const fadeInRight = {
  initial: {
    x: -70,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};

export const staggerTextContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.7,
      delayChildren: 0.5,
    },
  },
};

export const fadeInUp = {
  initial: {
    y: 70,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};

export const zoomOut = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", duration: 1.1 },
  },
};

export const headerButton = {
  initial: { y: -10, rotate: 20, opacity: 0 },
  animate: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", duration: 0.5 },
  },
};

export const rotateImage = {
  initial: { rotate: 180, opacity: 0 },
  animate: {
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1,},
  },
};
export const blueBtn = {
  initial: {
    borderColor: "#0099FF",
    background: "#ffffff",
    color: "#0099ff",
    opacity: 0,
    x: -70,
    rotate: 15,
  },
  animate: {
    borderColor: "none",
    background: "#0099FF",
    color: "#ffffff",
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", duration: 1.1 },
  },
};

export const whiteBtn = {
  initial: {
    borderColor: "#ffffff",
    background: "#0099FF",
    color: "#ffffff",
    opacity: 0,
    rotate: -15,
  },
  animate: {
    borderColor: "#0099FF",
    background: "#ffffff",
    color: "#0099ff",
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", duration: 1.1 },
  },
};
