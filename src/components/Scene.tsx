import type { SceneData } from "@/data/scenes";

const sceneStyles: Record<
  number,
  { overlay: string; filter: string; position: string }
> = {
  // Scene 01: The Cabinet — child peering through darkness
  1: {
    overlay:
      "linear-gradient(to bottom, rgba(10,8,5,0.4), rgba(15,10,5,0.3), rgba(10,8,5,0.5))",
    filter: "brightness(0.55) contrast(1.3) saturate(0.6) sepia(0.2)",
    position: "center center",
  },
  // Scene 02: The House in Chaos — cluttered dim kitchen
  2: {
    overlay:
      "linear-gradient(to bottom, rgba(10,10,8,0.55), rgba(20,18,10,0.45), rgba(10,10,8,0.65))",
    filter: "brightness(0.35) contrast(1.2) saturate(0.5) sepia(0.25)",
    position: "center center",
  },
  // Scene 03: Uncles Arrive — imposing man in dark doorway
  3: {
    overlay:
      "linear-gradient(to bottom, rgba(10,5,5,0.25), rgba(10,5,5,0.15), rgba(10,10,15,0.4))",
    filter: "brightness(0.55) contrast(1.3) saturate(0.8)",
    position: "center 20%",
  },
  // Scene 04: The Dragging — red-tinted, violent, motion
  4: {
    overlay:
      "linear-gradient(to bottom, rgba(26,5,5,0.5), rgba(18,3,8,0.4), rgba(10,5,5,0.6))",
    filter: "brightness(0.4) contrast(1.3) saturate(0.8) sepia(0.15)",
    position: "center 40%",
  },
  // Scene 05: The Drum — metal basins with water, overhead, gritty
  5: {
    overlay:
      "linear-gradient(to bottom, rgba(10,10,15,0.45), rgba(10,15,20,0.35), rgba(10,10,15,0.55))",
    filter: "brightness(0.45) contrast(1.25) saturate(0.6) sepia(0.1)",
    position: "center center",
  },
  // Scene 06: Girl or Boy — deep underwater blue-green
  6: {
    overlay:
      "linear-gradient(to bottom, rgba(5,10,20,0.4), rgba(10,15,25,0.3), rgba(5,8,15,0.6))",
    filter: "brightness(0.45) contrast(1.2) saturate(0.8) hue-rotate(10deg)",
    position: "center center",
  },
  // Scene 07: Closing Holes — dark macro ear with gold earring
  7: {
    overlay:
      "linear-gradient(to bottom, rgba(10,8,5,0.4), rgba(10,8,5,0.25), rgba(10,8,5,0.5))",
    filter: "brightness(0.5) contrast(1.2) saturate(0.7) sepia(0.15)",
    position: "center center",
  },
  // Scene 08: Redeemed Man — shattered mirror, fragmented identity
  8: {
    overlay:
      "linear-gradient(to bottom, rgba(10,10,15,0.35), rgba(10,10,15,0.25), rgba(10,10,15,0.45))",
    filter: "brightness(0.5) contrast(1.3) saturate(0.4)",
    position: "center center",
  },
  // Scene 09: The Violence — dark reds, shattered
  9: {
    overlay:
      "linear-gradient(to bottom, rgba(26,5,5,0.5), rgba(15,3,3,0.4), rgba(10,5,5,0.6))",
    filter: "brightness(0.4) contrast(1.3) saturate(0.6) sepia(0.1)",
    position: "center center",
  },
  // Scene 10: The Haunting — deep indigo, dreamlike beauty
  10: {
    overlay:
      "linear-gradient(to bottom, rgba(10,15,30,0.4), rgba(15,20,40,0.3), rgba(5,8,20,0.5))",
    filter: "brightness(0.5) contrast(1.15) saturate(0.9) hue-rotate(15deg)",
    position: "center center",
  },
  // Scene 11: The Surface — near-black, diminishing light
  11: {
    overlay:
      "linear-gradient(to bottom, rgba(5,5,8,0.3), rgba(5,5,8,0.4), rgba(3,3,5,0.7))",
    filter: "brightness(0.4) contrast(1.2) saturate(0.6)",
    position: "center 30%",
  },
};

export function Scene({ scene }: { scene: SceneData }) {
  const style = sceneStyles[scene.sceneNumber] ?? sceneStyles[1];
  const imgSrc = `/images/scene-${String(scene.sceneNumber).padStart(2, "0")}.jpg`;

  return (
    <section className="scrolly" id={scene.id}>
      <figure className="scrolly__graphic">
        <div className="scene-graphic">
          {/* Real photo background */}
          <img
            src={imgSrc}
            alt={scene.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: style.position,
              filter: style.filter,
              position: "absolute",
              inset: 0,
            }}
          />
          {/* Dark overlay for mood + text readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: style.overlay,
              zIndex: 1,
            }}
          />
          {/* Film grain texture */}
          <div
            className="grain-overlay"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              opacity: 0.06,
              mixBlendMode: "overlay",
              pointerEvents: "none",
            }}
          />
        </div>
      </figure>
      <article className="scrolly__steps">
        <div className="step" data-step={scene.sceneNumber}>
          <div className="step-content">
            <p className="step-text">{scene.text}</p>
            <p className="step-caption">{scene.caption}</p>
            <p className="step-interpretation">{scene.interpretation}</p>
          </div>
        </div>
      </article>
    </section>
  );
}
