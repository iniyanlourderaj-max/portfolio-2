import { useEffect, useRef } from "react";

const STAR_COUNT = 120;

const createStars = () =>
  Array.from({ length: STAR_COUNT }, (_, index) => {
    const seed = index + 1;
    const x = (seed * 37) % 100;
    const y = (seed * 61) % 100;
    const size = index % 9 === 0 ? 2 : index % 4 === 0 ? 1.5 : 1;
    const depth = index % 3;
    const opacity = 0.58 + ((seed * 17) % 34) / 100;

    return { x, y, size, depth, opacity, delay: (seed % 12) * 0.35 };
  });

const STARS = createStars();

const SpaceBackground = ({ enabled }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const element = rootRef.current;
    if (!element || !enabled) return undefined;

    let animationFrame = 0;

    const updateMotion = (event) => {
      window.cancelAnimationFrame(animationFrame);

      animationFrame = window.requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;

        element.style.setProperty("--space-x", x.toFixed(3));
        element.style.setProperty("--space-y", y.toFixed(3));
      });
    };

    const updateScroll = () => {
      element.style.setProperty("--space-scroll", `${window.scrollY}`);
    };

    updateScroll();
    window.addEventListener("pointermove", updateMotion, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", updateMotion);
      window.removeEventListener("scroll", updateScroll);
    };
  }, [enabled]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="space-background"
      data-enabled={enabled ? "true" : "false"}
    >
      <div className="space-nebula space-nebula-hero" />
      <div className="space-nebula space-nebula-galaxy" />
      <div className="space-nebula space-nebula-depth" />

      <div className="star-layer star-layer-back">
        {STARS
          .filter((star) => star.depth === 0)
          .map((star, index) => (
            <span
              key={`back-${index}`}
              className="space-star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
      </div>

      <div className="star-layer star-layer-mid">
        {STARS
          .filter((star) => star.depth === 1)
          .map((star, index) => (
            <span
              key={`mid-${index}`}
              className="space-star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
      </div>

      <div className="star-layer star-layer-front">
        {STARS
          .filter((star) => star.depth === 2)
          .map((star, index) => (
            <span
              key={`front-${index}`}
              className="space-star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default SpaceBackground;
