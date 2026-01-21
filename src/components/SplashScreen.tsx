import { useEffect, useState } from "react";

export function SplashScreen() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setHidden(true), 1000);
    const id2 = window.setTimeout(() => setGone(true), 1400);
    return () => {
      window.clearTimeout(id);
      window.clearTimeout(id2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`md-splash ${hidden ? "md-splash--hide" : ""}`}
      aria-hidden="true"
    >
      <div className="md-splash__bg" />
      <div className="md-splash__content">
        <div className="md-splash__mark" aria-label="Mango Delight loading">
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md-splash__svg"
          >
            <defs>
              <radialGradient
                id="mdMango"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(120 110) rotate(55) scale(190 190)"
              >
                <stop stopColor="#FFD34D" />
                <stop offset="0.55" stopColor="#FFB020" />
                <stop offset="1" stopColor="#FF7A18" />
              </radialGradient>
              <radialGradient
                id="mdMangoShadow"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(165 190) rotate(90) scale(130 170)"
              >
                <stop stopColor="#000000" stopOpacity="0.24" />
                <stop offset="1" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="mdKnife" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#F4F4F5" />
                <stop offset="1" stopColor="#A1A1AA" />
              </linearGradient>
              <clipPath id="mdLeftClip">
                <rect x="0" y="0" width="150" height="300" />
              </clipPath>
              <clipPath id="mdRightClip">
                <rect x="150" y="0" width="150" height="300" />
              </clipPath>
            </defs>

            <ellipse cx="150" cy="220" rx="105" ry="48" fill="url(#mdMangoShadow)" />

            <g className="md-splash__mango-left" clipPath="url(#mdLeftClip)">
              <path
                d="M150 46c56 0 100 38 100 96 0 78-69 150-100 160-31-10-100-82-100-160 0-58 44-96 100-96z"
                fill="url(#mdMango)"
              />
              <path
                d="M95 112c18-28 50-44 84-40"
                stroke="#FFF7E6"
                strokeWidth="18"
                strokeLinecap="round"
                opacity="0.38"
              />
            </g>

            <g className="md-splash__mango-right" clipPath="url(#mdRightClip)">
              <path
                d="M150 46c56 0 100 38 100 96 0 78-69 150-100 160-31-10-100-82-100-160 0-58 44-96 100-96z"
                fill="url(#mdMango)"
              />
              <path
                d="M178 162c-10 18-26 30-46 35"
                stroke="#FFF7E6"
                strokeWidth="16"
                strokeLinecap="round"
                opacity="0.26"
              />
            </g>

            <g className="md-splash__knife">
              <path
                d="M52 56L220 224"
                stroke="url(#mdKnife)"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M44 48L86 36L98 78L56 90L44 48Z"
                fill="#0A0A0A"
                opacity="0.9"
              />
            </g>

            <path
              d="M105 54C126 28 161 18 196 24"
              stroke="#19B45B"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="md-splash__title">Mango Delight</p>
        <p className="md-splash__sub">Preparing fresh season picks…</p>
      </div>
    </div>
  );
}
