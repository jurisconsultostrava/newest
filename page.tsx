'use client'

import { useLang } from '@/lib/lang-context'
import Link from 'next/link'

export default function CollateralPage() {
  const { tr } = useLang()

  return (
    <>
      <div style={{
        paddingTop: 'calc(var(--nav-h) + 80px)', paddingBottom: '80px',
        background: 'linear-gradient(180deg, var(--dark2) 0%, var(--dark) 100%)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="section-inner">
          <p className="section-label">{tr.collateral.label}</p>
          <h1 className="section-title">{tr.collateral.title}</h1>
          <div className="divider" />
          <p className="section-subtitle">{tr.collateral.subtitle}</p>
        </div>
      </div>

      {/* Gold Hypo & Repo */}
      <section style={{ padding: '80px 0' }}>
        <div className="section-inner">
          <p className="section-label">Kreditprodukte</p>
          <h2 className="section-title">Gold Hypo & Gold Repo</h2>
          <div className="divider" />

          <div className="grid-2" style={{ marginBottom: '48px' }}>
            <div className="card">
              <div className="card-label">Langfristiger Goldkredit · Zero Competition EU</div>
              <div className="card-title" style={{ fontSize: '1.2rem' }}>Gold Hypo</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
                Das erste und einzige Produkt für goldbesicherte Langzeitkredite in der EU. Der Kunde hinterlegt physisches Gold als Sicherheit — tägliche Bewertung nach LBMA PM Fix, T+2 Liquidation über CME/LPMCL-System.
              </p>
              <div className="card-meta">
                <span className="meta-tag"><b>Laufzeit</b> 5–20 Jahre</span>
                <span className="meta-tag"><b>LTV</b> bis 80 %</span>
                <span className="meta-tag"><b>Onboarding</b> 2–5 Tage</span>
                <span className="meta-tag"><b>EU-Wettbewerber</b> keine bekannten</span>
              </div>
            </div>
            <div className="card">
              <div className="card-label">Kurzfristiger Goldkredit · Premium Alternative</div>
              <div className="card-title" style={{ fontSize: '1.2rem' }}>Gold Repo</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
                Kurzfristige Liquidität aus Gold ohne Verkauf. Keine Bonitätsprüfung. Verwertung bei Ausfall 99,5 % LBMA. Versichert durch Kooperativa – Vienna Insurance Group.
              </p>
              <div className="card-meta">
                <span className="meta-tag"><b>Laufzeit</b> 1–12 Monate</span>
                <span className="meta-tag"><b>LTV</b> bis 80 %</span>
                <span className="meta-tag"><b>Bewertung</b> LBMA AM/PM täglich</span>
                <span className="meta-tag"><b>Verwertung</b> 99,5 % · T+2</span>
              </div>
            </div>
          </div>

          {/* Flow diagram */}
          <div style={{
            background: 'rgba(196,149,74,0.03)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r)',
            padding: '36px',
            marginBottom: '60px',
          }}>
            <p style={{ textAlign: 'center', fontSize: '11px', letterSpacing: '3px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '32px' }}>
              Gold as Collateral — Institutionelle Infrastruktur
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: '16px', alignItems: 'center' }}>
              <div className="flow-box">
                <div className="flow-title">KUNDE</div>
                <div className="flow-items">
                  Eigentümer von physischem Gold<br />
                  Will nicht verkaufen<br />
                  Braucht Liquidität<br />
                  ◎ Erhält Kredit<br />
                  ◎ Gold zurück nach Tilgung
                </div>
              </div>
              <div style={{ textAlign: 'center', color: 'var(--gold)', fontSize: '1.4rem' }}>⇄</div>
              <div className="flow-box" style={{ borderColor: 'rgba(196,149,74,0.35)', background: 'rgba(196,149,74,0.07)' }}>
                <div className="flow-title">REVESTIUM AG<br />Collateral Agent</div>
                <div className="flow-items">
                  Bewertung LBMA AM/PM Fix<br />
                  Warrant / Wertpapieremission<br />
                  Ausfallmanagement T+2<br />
                  Versicherung Kooperativa<br />
                  Margin Call LTV ≥ 88 %
                </div>
              </div>
              <div style={{ textAlign: 'center', color: 'var(--gold)', fontSize: '1.4rem' }}>⇄</div>
              <div className="flow-box">
                <div className="flow-title">BANK / FONDS</div>
                <div className="flow-items">
                  Kreditgeber<br />
                  Hält den Warrant<br />
                  Kein Gold-Operationsrisiko<br />
                  ◎ Sauberes P&L<br />
                  ◎ RWA 0–20 % (Basel)
                </div>
              </div>
            </div>
          </div>

          {/* Collateral Services */}
          <p className="section-label">Collateral Services Institutional</p>
          <h2 className="section-title" style={{ marginBottom: '32px' }}>Roadmap 2026–2027</h2>
          <div className="grid-3" style={{ marginBottom: '48px' }}>
            {[
              {
                label: 'Roadmap 2026 · Exit A',
                title: 'Gold OTC Margining',
                desc: 'Physisches LBMA-Gold als Sicherheit für OTC-Derivate ohne physische Segregation. EMIR Uncleared Margin Rules konform.',
                tags: ['HNWI · Family Offices', 'Settlement Atomic · T+0/T+2', 'EMIR · OZ · English Law'],
              },
              {
                label: 'Roadmap 2027 · Exit B',
                title: 'Triparty Gold Custody',
                desc: 'Sicherheiteninteresse an physischem Gold ohne physische Bewegung. Kompatibel mit CCP-Clearing und FMI-Anforderungen.',
                tags: ['PGI / Warrant · CDCP', 'EU/UK EMIR', 'Insolvenzfern · segregiert'],
              },
              {
                label: 'Roadmap 2026–27 · Exit C',
                title: 'Intraday Gold Liquidity',
                desc: 'Intraday-Liquiditätslinien gegen digital evidiertes Metall-Kollateral — atomare Aktivierung innerhalb des Handelstages.',
                tags: ['Atomic · T+0 intraday', 'OTC Clearing Members · Banken', 'WGC PGI-Ökosystem 2025'],
              },
            ].map((c, i) => (
              <div key={i} className="card">
                <div className="card-label">{c.label}</div>
                <div className="card-title">{c.title}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '14px' }}>{c.desc}</p>
                <div className="card-meta">
                  {c.tags.map((t, j) => <span key={j} className="meta-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/kontakt" className="btn-primary">Institutionelle Anfrage →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
