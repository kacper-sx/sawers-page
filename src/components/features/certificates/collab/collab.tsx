"use client";
import { useIsClient } from "usehooks-ts";
import { Card } from "./card";
import { Typography } from "@/components/ui/typography/typography";

export function Collab() {
  const isClient = useIsClient();
  return (
    <div className="flex flex-col bg-gray-100 gap-8 lg:gap-16 px-5 lg:px-[100px] items-center py-8 lg:py-16">
      <Typography
        variant={"h2"}
        weight={"semibold"}
        className="text-sawers-blue"
      >
        Posiadamy szkolenia monterskie producentów
      </Typography>
      {isClient ? <Card /> : null}
    </div>
  );
}
