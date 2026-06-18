const HeroHelmet = () => {
  return (
    <div className="hero-helmet" aria-hidden="true">
      <svg viewBox="0 0 760 760" role="presentation">
        <defs>
          <radialGradient id="helmetDome" cx="45%" cy="16%" r="72%">
            <stop offset="0%" stopColor="#4a5566" />
            <stop offset="18%" stopColor="#151923" />
            <stop offset="62%" stopColor="#050505" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
          <linearGradient id="helmetRim" x1="18%" x2="84%" y1="18%" y2="86%">
            <stop offset="0%" stopColor="#6d7888" />
            <stop offset="18%" stopColor="#0d1118" />
            <stop offset="54%" stopColor="#020202" />
            <stop offset="100%" stopColor="#3b4350" />
          </linearGradient>
          <linearGradient id="helmetGlass" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#1b2533" />
            <stop offset="48%" stopColor="#050608" />
            <stop offset="100%" stopColor="#2d1f1f" />
          </linearGradient>
          <linearGradient id="helmetMetal" x1="14%" x2="86%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#8f9baa" />
            <stop offset="12%" stopColor="#222833" />
            <stop offset="56%" stopColor="#040404" />
            <stop offset="100%" stopColor="#606b78" />
          </linearGradient>
          <filter id="helmetGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.8 0 0 0 0 0.9 0 0 0 0 1 0 0 0 0.55 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="helmet-shadow">
          <ellipse cx="380" cy="645" rx="214" ry="34" />
        </g>

        <g className="helmet-shell" filter="url(#helmetGlow)">
          <path
            className="helmet-cape"
            d="M153 420c8-191 63-330 227-330s219 139 227 330l60 206c-88 48-187 70-287 70s-199-22-287-70z"
            fill="url(#helmetRim)"
          />
          <path
            className="helmet-dome"
            d="M170 398c10-182 70-317 210-317s200 135 210 317c-63 28-133 42-210 42s-147-14-210-42z"
            fill="url(#helmetDome)"
          />
          <path
            className="helmet-center-ridge"
            d="M356 90h48l18 340c-13 5-27 8-42 8s-29-3-42-8z"
            fill="url(#helmetMetal)"
          />
          <path
            className="helmet-brow"
            d="M177 396c62-37 130-55 203-55s141 18 203 55l-30 74c-52-29-110-44-173-44s-121 15-173 44z"
            fill="#020202"
          />
          <path
            className="helmet-eye helmet-eye-left"
            d="M200 418c45-30 94-43 147-39l-35 74c-42 3-83-4-123-22z"
            fill="url(#helmetGlass)"
          />
          <path
            className="helmet-eye helmet-eye-right"
            d="M560 418c-45-30-94-43-147-39l35 74c42 3 83-4 123-22z"
            fill="url(#helmetGlass)"
          />
          <path
            className="helmet-cheek-left"
            d="M209 468c55 19 109 29 162 30l-75 96c-51-23-91-56-120-98z"
            fill="url(#helmetMetal)"
          />
          <path
            className="helmet-cheek-right"
            d="M551 468c-55 19-109 29-162 30l75 96c51-23 91-56 120-98z"
            fill="url(#helmetMetal)"
          />
          <path
            className="helmet-mouth"
            d="M300 520h160l42 119c-35 24-76 36-122 36s-87-12-122-36z"
            fill="#050505"
          />
          <path
            className="helmet-grill-frame"
            d="M326 543h108l25 75H301z"
            fill="url(#helmetMetal)"
          />
          <g className="helmet-grill">
            <path d="M323 560v48" />
            <path d="M345 551v67" />
            <path d="M369 548v75" />
            <path d="M392 548v75" />
            <path d="M416 551v67" />
            <path d="M438 560v48" />
          </g>
          <path
            className="helmet-neck"
            d="M280 640c63 28 137 28 200 0l-26 75H306z"
            fill="url(#helmetDome)"
          />
          <path
            className="helmet-highlight-main"
            d="M228 168c45-55 91-76 145-70-61 32-96 92-111 178-8 47-26 75-55 85-8-82-1-146 21-193z"
          />
          <path
            className="helmet-highlight-side"
            d="M468 120c48 31 79 96 92 192 4 29-5 53-27 72-13-126-45-207-97-244z"
          />
        </g>
      </svg>
    </div>
  );
};

export default HeroHelmet;
