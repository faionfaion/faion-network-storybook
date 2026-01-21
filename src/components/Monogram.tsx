import './Monogram.css';

interface MonogramProps {
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
  onClick?: () => void;
}

/**
 * FN Monogram Component - "The Publisher's Seal"
 * A sophisticated brand mark following the "Intellectual Serenity" design system
 */
export default function Monogram({ size = 'medium', showLabel = false, onClick }: MonogramProps) {
  const MonogramContent = () => (
    <>
      {/* FN Square Mark */}
      <div className="fn-monogram__mark">
        <span className="fn-monogram__text">FN</span>
      </div>

      {/* Optional Label */}
      {showLabel && (
        <>
          <div className="fn-monogram__divider" />
          <span className="fn-monogram__label">Faion Network</span>
        </>
      )}
    </>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`fn-monogram fn-monogram--button fn-monogram--${size}`}
        aria-label="Faion Network"
      >
        <MonogramContent />
      </button>
    );
  }

  return (
    <div className={`fn-monogram fn-monogram--${size}`}>
      <MonogramContent />
    </div>
  );
}
