import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Sunny Keshri - Full Stack Developer Portfolio';
export const size = {
  width: 1200,
  height: 675,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingLeft: 80,
          paddingRight: 80,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          fontSize: 32,
          fontWeight: 600,
          color: 'white',
          fontFamily: '"DM Sans", sans-serif',
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: 'absolute',
            right: '-100px',
            top: '50%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 208, 132, 0.15) 0%, transparent 70%)',
            transform: 'translateY(-50%)',
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          {/* Title */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Full Stack Developer <br /> with 8+ Years Experience
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              color: '#00d084',
              marginBottom: 32,
              fontWeight: 500,
            }}
          >
            Sunny Keshri
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 24,
              color: '#b0b0b0',
            }}
          >
            React · Next.js · TypeScript · Node.js | Fintech & Healthcare Expert
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
