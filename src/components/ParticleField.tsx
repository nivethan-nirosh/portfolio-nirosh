/**
 * ParticleField
 * Lightweight CSS-only floating particles that add depth and movement.
 */
export default function ParticleField() {
    return (
        <div className="particles-container">
            {Array.from({ length: 5 }).map((_, i) => (
                <div
                    key={i}
                    className="particle"
                    style={{
                        '--delay': `${Math.random() * 5}s`,
                        animationDelay: `${Math.random() * 5}s`,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
}
