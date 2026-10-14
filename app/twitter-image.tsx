import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mubeen Ahmad — Full-Stack Developer & Systems Builder'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#EFEBE3',
          padding: '64px 80px',
          fontFamily: 'serif',
          color: '#14130F',
          border: '12px solid #14130F',
        }}
      >
        {/* Top Eyebrow */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'monospace',
            fontSize: '18px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#6B675E',
            borderBottom: '1px solid rgba(20, 19, 15, 0.15)',
            paddingBottom: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#D2451E',
                marginRight: '14px',
              }}
            />
            <span>MUBEEN AHMAD • MUBEENAHMAD.TECH</span>
          </div>
          <div>TWITTER SUMMARY</div>
        </div>

        {/* Center Giant Editorial Statement */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '28px',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              fontSize: '54px',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
              color: '#14130F',
            }}
          >
            I build the software that{' '}
            <span style={{ fontStyle: 'italic', color: '#D2451E' }}>runs</span>{' '}
            hospitals, colleges and the businesses behind them.
          </div>
          <div
            style={{
              fontFamily: 'sans-serif',
              fontSize: '22px',
              color: '#6B675E',
              lineHeight: '1.5',
              marginTop: '24px',
              maxWidth: '920px',
            }}
          >
            Sole engineer architecting Khan Hub ERP (16+ departments). Co-founder at MR DEVS.
            Production systems, managed backends, and practical AI tool-calling.
          </div>
        </div>

        {/* Bottom Ledger Line */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'monospace',
            fontSize: '16px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#6B675E',
            borderTop: '1px solid rgba(20, 19, 15, 0.15)',
            paddingTop: '24px',
          }}
        >
          <div>VEHARI, PAKISTAN • REMOTE WORLDWIDE</div>
          <div style={{ color: '#14130F', fontWeight: 600 }}>
            NEXT.JS • REACT • FIREBASE • SUPABASE
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
