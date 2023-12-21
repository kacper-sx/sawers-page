import { opacityVariant } from "@/lib/framer-variants";
import { cn } from "@/lib/utils";
import { m } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  photosPaths: string[];
  isAnimated?: boolean;
  isLeft?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

export function PhotoGrid({
  photosPaths,
  isAnimated = true,
  className,
  isLeft = false,
}: Props) {
  const Comp = isAnimated ? m.div : "div";

  return (
    <div className={cn("grid grid-cols-2 gap-2.5 lg:gap-5", className)}>
      {photosPaths.map((path, index) => (
        <Comp
          initial="hidden"
          whileInView="visible"
          variants={opacityVariant({ delay: 0.5 + 0.1 * index })}
          className="relative"
          key={index}
        >
          <Image
            src={path}
            alt="IPL"
            fill
            sizes="50vw"
            className={
              isLeft
                ? cn(
                    "left-0 top-0 h-full w-full object-cover",
                    photosPaths[0] == path && "rounded-tl-2xl lg:rounded-tl-32",
                    photosPaths[2] == path && "rounded-bl-2xl lg:rounded-bl-32"
                  )
                : cn(
                    "right-0 top-0 h-full w-full object-cover",
                    photosPaths[1] == path && "rounded-tr-2xl lg:rounded-tr-32",
                    photosPaths[3] == path && "rounded-br-2xl lg:rounded-br-32"
                  )
            }
            priority
          />
        </Comp>
      ))}
    </div>
  );
}
