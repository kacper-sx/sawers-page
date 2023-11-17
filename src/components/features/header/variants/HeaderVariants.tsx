export const headerVariants = {
  hidden: {
    y: -69.5,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: 'easeInOut', duration: 0.4 },
  },
}

export const navVariants = {
  hidden: { y: '100dvh' },
  visible: { y: 0, transition: { duration: 0.4 } },
  exit: { y: '100dvh', transition: { duration: 0.4 } },
}

export const navListVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
  exit: { opacity: 0 },
}

export const navListItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { bounce: 0 } },
}

export const navLinkVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
}
