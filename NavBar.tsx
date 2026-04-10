'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLang } from '@/lib/lang-context'
import { locales } from '@/lib/i18n'
import { Menu, X } from 'lucide-react'

export default function NavBar() {
  const { tr, locale, setLocale } = useLang()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/geschichte', label: tr.nav.geschichte },
    { href: '/produkte', label: tr.nav.produkte },
    { href: '/collateral', label: tr.nav.collateral },
    { href: '/#loesung', label: tr.nav.loesung },
    { href: '/#rating', label: tr.nav.rating },
    { href: '/kontakt', label: tr.nav.kontakt },
    { href: '/impressum', label: tr.nav.impressum },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: 'var(--nav-h)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px',
      background: 'rgba(4,6,14,0.92)',
      backdropFilter: 'blur(18px)',
      borderBottom: '1px solid var(--border)',
    }}>
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src="/images/revestiumlogo.png" alt="REVESTIUM GROUP"
          style={{ height: '56px', width: 'auto', mixBlendMode: 'screen' }} />
      </Link>

      {/* Desktop nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <ul style={{ display: 'flex', gap: '28px', listStyle: 'none', margin: 0 }}
          className="nav-links-desktop">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} style={{
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color .2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language switcher */}
        <div style={{ display: 'flex', gap: '6px', marginLeft: '16px' }}>
          {locales.map(loc => (
            <button key={loc.code}
              onClick={() => setLocale(loc.code)}
              style={{
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid',
                borderColor: locale === loc.code ? 'var(--gold)' : 'var(--border-faint)',
                background: locale === loc.code ? 'rgba(196,149,74,0.15)' : 'transparent',
                color: locale === loc.code ? 'var(--gold)' : 'var(--text-muted)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all .2s',
              }}>
              {loc.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer' }}
          className="nav-hamburger">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0,
          background: 'rgba(4,6,14,0.98)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid var(--border)',
          padding: '24px 32px',
          display: 'flex', flexDirection: 'column', gap: '16px',
          zIndex: 999,
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
