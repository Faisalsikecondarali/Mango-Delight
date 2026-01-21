import React from 'react';

const slices = [
  { left: "8%", delay: "0s", duration: "9s", size: 72 },
  { left: "22%", delay: "1.8s", duration: "10s", size: 56 },
  { left: "38%", delay: "0.8s", duration: "8.5s", size: 62 },
  { left: "56%", delay: "2.6s", duration: "9.4s", size: 54 },
  { left: "72%", delay: "1.2s", duration: "10.6s", size: 66 },
  { left: "88%", delay: "3.2s", duration: "9.8s", size: 58 },
];

export function FallingMangoSlices() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {slices.map((s, idx) => (
        <div
          key={idx}
          className="absolute -top-24 md-slice"
          style={{
            left: s.left,
            animationDelay: s.delay,
            animationDuration: s.duration,
            width: s.size,
            height: s.size,
          }}
        >
          <img
            src="/mango-slice.svg"
            alt=""
            className="select-none"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  );
}
