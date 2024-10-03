export const SpriteSVG = ({ name, className, color, height = 24, width = 24 }: { name: string; className?: string; color?: string; height?: number; width?: number }) => {
  switch (name) {
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={className}>
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
    case "map":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height} fill="#cca967">
          <path d="M336 96 176 32 0 96v384l176-64 160 64 176-64V32L336 96zM192 72.865l128 51.2v315.069l-128-51.198V72.865zM32 118.414l128-46.545v315.9L32 434.312V118.414zm448 275.172-128 46.546v-315.9l128-46.545v315.899z" />
        </svg>
      );
    case "instagram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width={width} height={height} fill={color} className={className}>
          <path d="M11.469 5C7.918 5 5 7.914 5 11.469v9.062C5 24.082 7.914 27 11.469 27h9.062C24.082 27 27 24.086 27 20.531V11.47C27 7.918 24.086 5 20.531 5Zm0 2h9.062A4.463 4.463 0 0 1 25 11.469v9.062A4.463 4.463 0 0 1 20.531 25H11.47A4.463 4.463 0 0 1 7 20.531V11.47A4.463 4.463 0 0 1 11.469 7Zm10.437 2.188a.902.902 0 0 0-.906.906c0 .504.402.906.906.906a.902.902 0 0 0 .907-.906.902.902 0 0 0-.907-.906ZM16 10c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6Zm0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={width} height={height} className={className} fill={color}>
          <path d="M30.14 2c-3.27 0-6.095.997-8.078 2.967C20.08 6.937 19 9.824 19 13.367V18h-6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6v19a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V28h7a1 1 0 0 0 .992-.875l1-8A1 1 0 0 0 37 18h-8v-4c0-1.117.883-2 2-2h6a1 1 0 0 0 1-1V3.346a1 1 0 0 0-.87-.99C36.248 2.237 33.058 2 30.14 2zm0 2c2.438 0 4.795.195 5.86.295V10h-5c-2.197 0-4 1.803-4 4v5a1 1 0 0 0 1 1h7.867l-.75 6H28a1 1 0 0 0-1 1v19h-6V27a1 1 0 0 0-1-1h-6v-6h6a1 1 0 0 0 1-1v-5.633c0-3.144.92-5.44 2.473-6.982C25.025 4.843 27.27 4 30.14 4z" />
        </svg>
      );
    default:
      return null;
  }
};
