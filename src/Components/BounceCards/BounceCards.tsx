"use client";

import { JSX, useEffect } from "react";
import { gsap } from "gsap";

interface BounceCardsProps {
  className?: string;
  items: { icon: JSX.Element; name: string }[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export default function BounceCards({
  className = "",
  items = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)",
  ],
  enableHover = false,
}: BounceCardsProps) {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay,
      }
    );
  }, [animationDelay, animationStagger, easeType]);

  const getNoRotationTransform = (transformStr: string): string => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    return hasRotate
      ? transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)")
      : `${transformStr} rotate(0deg)`;
  };

  const getPushedTransform = (baseTransform: string, offsetX: number): string => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    const currentX = match ? parseFloat(match[1]) : 0;
    const newX = currentX + offsetX;

    return baseTransform.includes("translate")
      ? baseTransform.replace(translateRegex, `translate(${newX}px)`)
      : `${baseTransform} translate(${offsetX}px)`;
  };

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover) return;
    items.forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);
      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: "back.out(1.4)",
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);
        const delay = Math.abs(hoveredIdx - i) * 0.05;

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay,
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;
    items.forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);
      gsap.to(selector, {
        transform: transformStyles[i] || "none",
        duration: 0.4,
        ease: "back.out(1.4)",
      });
    });
  };

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: containerWidth, height: containerHeight }}
    >
      {items.map(({ icon, name }, idx) => (
        <div
          key={idx}
          className={`card card-${idx} absolute w-[160px] h-[160px] rounded-xl bg-slate-800 overflow-hidden flex flex-col items-center justify-center`}
          style={{
            transform: transformStyles[idx] || "none",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <div className="z-10">{icon}</div>
          <p className="text-white text-sm mt-2 font-semibold">{name}</p>
        </div>
      ))}
    </div>
  );
}
