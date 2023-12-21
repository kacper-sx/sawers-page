import { type Variants } from "framer-motion";

interface GetOpacityVariantConfig {
  duration?: number;
  delay?: number;
}
type GetOpacityVariantType = (config?: GetOpacityVariantConfig) => Variants;
interface GetBottomOpacityEntranceVariantConfig {
  delay?: number;
}
type GetBottomOpacityEntranceVariantType = (
  config: GetBottomOpacityEntranceVariantConfig
) => Variants;

export const bottomOpacityEntranceVariant: GetBottomOpacityEntranceVariantType =
  (config?) => {
    return {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delay: config?.delay ?? undefined,
        },
      },
    };
  };

export const opacityVariant: GetOpacityVariantType = (config) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: config?.duration ?? undefined,
        delay: config?.delay ?? undefined,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: config?.duration ?? undefined,
      },
    },
  };
};

export const WorkListVariants = {
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.4,
    },
  },
  exit: { opacity: 0 },
};

export const WorkListItemVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { bounce: 0 } },
};
