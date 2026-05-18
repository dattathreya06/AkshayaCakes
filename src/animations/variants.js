// Framer Motion animation variants for Akshaya Cakes

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
  }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
  }
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
  }
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
}

export const imageZoom = {
  rest: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  }
}

export const cardHover = {
  rest: { y: 0, boxShadow: '0 4px 20px rgba(74,44,42,0.08)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 50px rgba(74,44,42,0.18)',
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  }
}

export const floatAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

export const heroHeading = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
  }
}

export const slideInDrawer = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  }
}

export const navbarVariant = {
  top: {
    background: 'rgba(255,253,249,0)',
    backdropFilter: 'blur(0px)',
    borderBottomColor: 'rgba(194,139,82,0)',
    boxShadow: 'none',
  },
  scrolled: {
    background: 'rgba(255,253,249,0.92)',
    backdropFilter: 'blur(20px)',
    borderBottomColor: 'rgba(194,139,82,0.15)',
    boxShadow: '0 4px 24px rgba(74,44,42,0.08)',
  }
}

export const overlayFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}
