"use client";
import { Typography } from "@/components/ui/typography/typography";
import { Banner } from "@/components/ui/custom/banner";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import { useEffect, useRef, useState } from "react";

type NumberData = {
  number: number;
  insideIcon: JSX.Element;
  content: string;
};

interface NumberProps {
  n: number;
}
function Number({ n }: NumberProps) {
  const [resetAnimation, setResetAnimation] = useState(false);
  const ref = useRef<number>(0);

  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    onRest: () => {
      ref.current = n; // Update ref after animation is complete
      setResetAnimation(false); // Reset the controlled reset flag
    },
    reset: resetAnimation, // Reset animation when the flag changes
    delay: 500,
    config: { duration: 2000 },
  });

  useEffect(() => {
    // Manually reset the animation by updating the ref
    ref.current = 0;
    setResetAnimation(true); // Trigger controlled reset
  }, [n]);

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
export function NumbersSection({ number, insideIcon, content }: NumberData) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Banner
      ref={ref}
      variant={"less-rounded"}
      className="flex flex-col gap-4 px-5 py-5 lg:max-w-card lg:h-[250px] border border-dark-foreground-35 shadow-xl items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
    >
      {insideIcon}
      <Typography
        variant={"h2"}
        weight={"semibold"}
        className="text-sawers-sun"
      >
        {inView && <Number n={number} />}
      </Typography>
      <Typography
        variant={"p"}
        weight={"regular"}
        className="text-dark-foreground-62 text-center"
      >
        {content}
      </Typography>
    </Banner>
  );
}
