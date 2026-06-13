import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'House Cleaning for the LA Westside & South Bay'

  return new ImageResponse(
    (
      <div
        style={{
          background: '#1E3A8A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            color: '#93C5FD',
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          Spottly
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: 54,
            fontWeight: 800,
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: '#93C5FD',
            fontSize: 26,
            marginTop: 36,
            textAlign: 'center',
          }}
        >
          Residential House Cleaning · LA Westside & South Bay
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
