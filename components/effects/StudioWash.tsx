/**
 * Discover → Match → Build → Scale, the site's delivery path,
 * with a marker traveling the line. Type stays above it.
 */
const STEPS = ["Discover", "Match", "Build", "Scale"] as const;

export function StudioWash() {
  return (
    <div className="studio-wash" aria-hidden>
      <div className="studio-flow-line">
        <span className="studio-flow-token" />
      </div>
      <ol className="studio-flow-steps">
        {STEPS.map((step, index) => (
          <li key={step}>
            <span className="studio-flow-index">{index + 1}</span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
