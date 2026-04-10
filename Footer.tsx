'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

export default function Footer() {
  const { tr } = useLang()

  return (
    <footer id="impressum-footer" style={{
      background: 'linear-gradient(180deg, #0a0f1a 0%, var(--dark) 100%)',
      padding: '60px 0 36px',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="section-inner">
        {/* Links row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '32px', marginBottom: '48px',
        }}>
          <div>
            <img src="/images/revestiumlogo.png" alt="REVESTIUM GROUP"
              style={{ height: '44px', width: 'auto', mixBlendMode: 'screen', marginBottom: '16px', display: 'block' }} />
            <p style={{ color: 'var(--text-faint)', fontSize: '0.8rem', maxWidth: '280px', lineHeight: 1.7 }}>
              REVESTIUM AG · Baarerstrasse 25 · 6300 Zug · Schweiz
            </p>
          </div>

          <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Navigation
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { href: '/geschichte', label: tr.nav.geschichte },
                  { href: '/produkte', label: tr.nav.produkte },
                  { href: '/collateral', label: tr.nav.collateral },
                  { href: '/kontakt', label: tr.nav.kontakt },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none' }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Legal
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/impressum" style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none' }}>
                  {tr.nav.impressum}
                </Link>
                <a href="mailto:info@revestium.ch" style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none' }}>
                  info@revestium.ch
                </a>
                <a href="tel:+41215120554" style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none' }}>
                  +41 215 120 554
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(196,149,74,0.12)',
          paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px',
          alignItems: 'flex-start',
        }}>
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.73rem', lineHeight: 1.9, flex: 2, minWidth: '280px' }}>
            {tr.footer.rights}<br />
            {tr.footer.note}<br />
            <span style={{ opacity: 0.7 }}>{tr.footer.note2}</span>
          </div>
          <img src="/images/goldbanklogoreve.png" alt="Gold Bank"
            style={{ height: '26px', width: 'auto', opacity: 0.55, mixBlendMode: 'screen' }} />
        </div>
      </div>
    </footer>
  )
}
