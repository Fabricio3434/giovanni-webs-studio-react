export function Technology({ technology }) {
  const technologyClass = technology.toLowerCase();

  return (
    <span className={`technology technology--${technologyClass}`}>
      {technology}
    </span>
  );
}
