export const PoweredBy: React.FC = () => {
  return (
    <div
      onClick={() => {
        window.open("https://nftearth.exchange", "_blank");
      }}
      className="spacing-1 absolute bottom-0 right-4 flex cursor-pointer items-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40" viewBox="0.00 0.00 100.00 100.00">
        <path fill="#6fe999" d="M 34.38 94.21
  C -9.31 78.97 -6.49 15.40 38.30 4.35
  C 77.01 -5.20 109.19 33.98 92.03 70.13
  C 85.09 84.76 69.60 96.50 52.34 96.26
  C 46.09 96.17 41.03 96.53 34.38 94.21
  Z"
        />
        <path
          fill="#487d5f"
          d="M 88.94 49.83
          A 39.10 39.10 0.0 0 1 49.84 88.93
          A 39.10 39.10 0.0 0 1 10.74 49.83
          A 39.10 39.10 0.0 0 1 49.84 10.73
          A 39.10 39.10 0.0 0 1 88.94 49.83
          Z"
        />
        <rect fill="#6fe999" x="42.49" y="37.75" width="14.72" height="2.50" rx="0.44"/>
        <rect fill="#6fe999" x="-6.12" y="-1.25" transform="translate(49.85,49.02) rotate(0.2)" width="12.24" height="2.50" rx="1.05"/>
        <rect fill="#6fe999" x="-7.57" y="-1.37" transform="translate(49.89,59.87) rotate(0.1)" width="15.14" height="2.74" rx="0.84"/>
      </svg>
    </div>
  );
};
