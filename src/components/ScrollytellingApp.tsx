"use client";

import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { scenes } from "@/data/scenes";
import { Hero } from "./Hero";
import { Scene } from "./Scene";
import { Credits } from "./Credits";

export function ScrollytellingApp() {
  useScrollAnimations();

  return (
    <div>
      <Hero />
      {scenes.map((scene) => (
        <Scene key={scene.id} scene={scene} />
      ))}
      <Credits />
    </div>
  );
}
