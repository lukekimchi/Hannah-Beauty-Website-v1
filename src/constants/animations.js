export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 2, ease: "easeInOut" },
  viewport: { once: true },
};

export const fadeInUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeInOut" },
  viewport: { once: true },
});

export const fadeInDown = (delay) => ({
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeInOut" },
  viewport: { once: true },
});

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: "easeInOut" },
  viewport: { once: true },
};

export const fadeInLeftStagger = (delay) => ({
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1.2, delay, ease: "easeInOut" },
  viewport: { once: true },
});

export const fadeInDownStagger = (delay) => ({
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1.2, delay, ease: "easeInOut" },
  viewport: { once: true },
});

export const fadeInLeftUp = {
  initial: { opacity: 0, x: -20, y: -10 },
  whileInView: { opacity: 1, x: 0, y: 0 },
  transition: { duration: 1.2, ease: "easeInOut" },
  viewport: { once: true },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: "easeInOut" },
  viewport: { once: true },
};
