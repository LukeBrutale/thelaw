export const SpriteSVG = ({ name, className, color, height = 24, width = 24 }: { name: string; className?: string; color?: string; height?: number; width?: number }) => {
  switch (name) {
    case "facebook":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 112.196 112.196" height={height} width={width}>
          <circle cx="56.098" cy="56.098" r="56.098" fill="#" />
          <path d="M70.201 58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34c0-5.964 2.833-15.303 15.301-15.303l11.234.047v12.51h-8.151c-1.337 0-3.217.668-3.217 3.513v7.585h11.334l-1.325 12.876z" fill="#fff" />
        </svg>
      );
    case "instagram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height} className={className}>
          <defs>
            <linearGradient id="linear-gradient" x1="8" x2="506.325" y1="504" y2="5.675" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#ffcb52" />
              <stop offset=".318" stop-color="#ff6341" />
              <stop offset=".658" stop-color="#cd39a2" />
              <stop offset="1" stop-color="#515bca" />
            </linearGradient>
          </defs>
          <path d="M314.757 147.525H197.243a49.717 49.717 0 0 0-49.718 49.718v117.514a49.718 49.718 0 0 0 49.718 49.718h117.514a49.718 49.718 0 0 0 49.717-49.718V197.243a49.717 49.717 0 0 0-49.717-49.718ZM256 324.391A68.391 68.391 0 1 1 324.391 256 68.391 68.391 0 0 1 256 324.391Zm71.242-122.811a16.271 16.271 0 1 1 16.27-16.271 16.271 16.271 0 0 1-16.27 16.271Z" fill="url(#linear-gradient)" />
          <path d="M256 211.545A44.455 44.455 0 1 0 300.455 256 44.455 44.455 0 0 0 256 211.545Z" fill="url(#linear-gradient)" />
          <path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0Zm133.333 312.5a76.836 76.836 0 0 1-76.833 76.833h-113a76.837 76.837 0 0 1-76.834-76.833v-113a76.836 76.836 0 0 1 76.834-76.833h113a76.836 76.836 0 0 1 76.833 76.833Z" fill="url(#linear-gradient)" />
        </svg>
      );
    case "telegram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
          <defs>
            <linearGradient id="a" x1="18.003" x2="6.003" y1="2.002" y2="30" gradientUnits="userSpaceOnUse">
              <stop stop-color="#37AEE2" />
              <stop offset="1" stop-color="#1E96C8" />
            </linearGradient>
          </defs>
          <path fill="url(#a)" d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z" />
          <path fill="#fff" d="M8.938 25.174c2.806-1.545 5.938-2.835 8.864-4.132 5.034-2.123 10.088-4.21 15.193-6.152.994-.331 2.778-.655 2.953.817-.095 2.084-.49 4.155-.76 6.226-.686 4.556-1.48 9.095-2.253 13.636-.267 1.512-2.161 2.295-3.373 1.327-2.913-1.968-5.849-3.916-8.725-5.93-.942-.957-.069-2.332.773-3.015 2.4-2.365 4.944-4.374 7.218-6.86.613-1.482-1.2-.234-1.797.149-3.285 2.263-6.49 4.665-9.952 6.655-1.77.973-3.831.141-5.6-.402-1.585-.657-3.908-1.318-2.54-2.319Z" />
        </svg>
      );
    case "phone":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
          <path d="M21.384 17.752a2.108 2.108 0 01-.522 3.359 7.543 7.543 0 01-5.476.642C10.5 20.523 3.477 13.5 2.247 8.614a7.543 7.543 0 01.642-5.476 2.108 2.108 0 013.359-.522l.922.922a2.094 2.094 0 01.445 2.328A3.877 3.877 0 018 8.2c-2.384 2.384 5.417 10.185 7.8 7.8a3.877 3.877 0 011.173-.781 2.092 2.092 0 012.328.445z" />
        </svg>
      );
    case "burger-menu":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={width} height={height}>
          <path stroke="#000" stroke-linecap="round" stroke-width="2" d="M4 18h16M4 12h16M4 6h16" />
        </svg>
      );
    case "close-button":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width={width} height={height}>
          <path d="M1082.2 896.6l410.2-410c51.5-51.5 51.5-134.6 0-186.1s-134.6-51.5-186.1 0l-410.2 410L486 300.4c-51.5-51.5-134.6-51.5-186.1 0s-51.5 134.6 0 186.1l410.2 410-410.2 410c-51.5 51.5-51.5 134.6 0 186.1 51.6 51.5 135 51.5 186.1 0l410.2-410 410.2 410c51.5 51.5 134.6 51.5 186.1 0 51.1-51.5 51.1-134.6-.5-186.2l-409.8-409.8z" fill={color} />
        </svg>
      );
    default:
      return null;
  }
};
