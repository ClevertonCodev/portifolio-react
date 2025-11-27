export default function BrazilIcon({ className = '' }: { className?: string }) {
  return (
    <svg 
      width="1em" 
      height="1em" 
      viewBox="0 0 135.467 135.467" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <clipPath id="clip-1">
          <circle r="735" transform="matrix(0.032475922257, 0, 0, 0.032524481416, 67.733390808105, 67.662048339844)"/>
        </clipPath>
      </defs>
      <g>
        <g transform="matrix(0.978831529617, 0, 0, 0.978831529617, -28.287313461304, -37.281913757324)">
          <circle 
            cx="98.097542" 
            cy="107.28635" 
            r="69.198166"
            fill="rgb(0, 155, 58)"
          />
        </g>
        <path 
          d="M 11.128 67.733 L 67.733 103.879 L 124.339 67.733 L 67.733 31.587 Z" 
          fill="rgb(254, 223, 0)"
        />
        <circle 
          r="23.87" 
          cx="67.733" 
          cy="67.733" 
          fill="rgb(0, 39, 118)"
        />
      </g>
    </svg>
  );
}
