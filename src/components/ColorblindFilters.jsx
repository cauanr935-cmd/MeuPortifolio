const ColorblindFilters = () => (
  <svg
    aria-hidden="true"
    width="0"
    height="0"
    style={{ position: 'absolute', left: '-9999px', top: '-9999px', visibility: 'hidden' }}
  >
    <filter id="filter-protanopia" colorInterpolationFilters="sRGB">
      <feColorMatrix
        type="matrix"
        values="0.567 0.433 0 0 0 0.558 0.442 0 0 0 0 0.242 0.758 0 0 0 0 0 1 0"
      />
    </filter>
    <filter id="filter-deuteranopia" colorInterpolationFilters="sRGB">
      <feColorMatrix
        type="matrix"
        values="0.625 0.375 0 0 0 0.7 0.3 0 0 0 0 0.3 0.7 0 0 0 0 0 1 0"
      />
    </filter>
    <filter id="filter-tritanopia" colorInterpolationFilters="sRGB">
      <feColorMatrix
        type="matrix"
        values="0.95 0.05 0 0 0 0 0.433 0.567 0 0 0 0.475 0.525 0 0 0 0 0 1 0"
      />
    </filter>
  </svg>
);

export default ColorblindFilters;
