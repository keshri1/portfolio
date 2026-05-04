import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Sunny Keshri - Full Stack Developer';
export const size = {
  width: 1200,
  height: 630,
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
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          fontSize: 32,
          fontWeight: 600,
          color: 'white',
          fontFamily: '"DM Sans", sans-serif',
        }}
      >
        {/* Background accent circles */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-200px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 208, 132, 0.15) 0%, transparent 70%)',
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            opacity: 0.6,
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          {/* Emoji Avatar */}
          <div
            style={{
              fontSize: 120,
              marginBottom: 20,
              animation: 'float 3s ease-in-out infinite',
            }}
          >
            👨‍💻
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              marginBottom: 10,
              background: 'linear-gradient(90deg, #fff 0%, #e0e0e0 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Sunny Keshri
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 42,
              color: '#00d084',
              marginBottom: 20,
              fontWeight: 600,
            }}
          >
            Full Stack Developer
          </div>

          {/* Skills tags */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 20,
              fontSize: 24,
              color: '#a0a0a0',
              marginTop: 20,
            }}
          >
            <span>React</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>Node.js</span>
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: 20,
              color: '#666',
              marginTop: 30,
            }}
          >
            keshri-dev.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
