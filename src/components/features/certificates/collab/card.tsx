"use client";
import { Banner } from "@/components/ui/custom/banner";
import { BuildBrandIcons } from "@/data/brand-icons/brand-icons";

import { m } from "framer-motion";

import React, { Component } from "react";
import { Swiper as SwiperType } from "swiper";

import { useMediaQuery } from "usehooks-ts";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Card() {
  const isMobile = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  let sectionsPerSlide;
  if (isMobile) {
    sectionsPerSlide = 4; // One icon per slide on mobile
  } else if (isTablet) {
    sectionsPerSlide = 2; // 2x2 grid on tablets
  } else {
    sectionsPerSlide = 4; // 3 icons per slide on larger screens
  }

  // Grupowanie ikon na slajdy
  const groupedIcons = [];
  for (let i = 0; i < BuildBrandIcons.length; i += sectionsPerSlide) {
    groupedIcons.push(BuildBrandIcons.slice(i, i + sectionsPerSlide));
  }

  return (
    <Carousel
      autoPlay={true}
      showStatus={false}
      infiniteLoop={true}
      showThumbs={false}
      renderArrowPrev={() => null}
      renderArrowNext={() => null}
      showArrows={false}
      emulateTouch={true}
      showIndicators={!isTablet}
      className="bg-white rounded-32 shadow-xl max-w-5xl px-8 py-5"
    >
      {groupedIcons.map((group, index) => (
        <div
          key={`icon-group-${index}`}
          className="flex justify-center items-center gap-5"
        >
          {group.map((iconData, iconIndex) => (
            <div key={`icon-${iconIndex}`} className="flex w-2/5 md:w-1/3">
              {iconData.icon}
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
}
