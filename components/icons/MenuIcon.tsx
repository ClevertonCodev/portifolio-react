export default function MenuIcon({ className = '' }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="2em" 
      height="2em" 
      viewBox="0 0 24 24"
      className={className}
    >
      <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
    </svg>
  );
}

