# REVESTIUM Web — Next.js 14

Vícejazyčný web (DE/EN/CZ) pro REVESTIUM GROUP.

## Stránky
- `/` — Landing (titulka)
- `/produkte` — Produkty
- `/collateral` — Gold as Collateral (institutional)
- `/geschichte` — Historie & filozofie
- `/kontakt` — Kontaktní formulář
- `/impressum` — Právní informace

## Lokální spuštění
```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy na Railway
1. Vytvořit nový projekt na railway.app
2. "Deploy from GitHub" nebo "Deploy from local"
3. Nahrát tento adresář
4. Railway automaticky detekuje Next.js
5. Volitelně přidat vlastní doménu v Settings > Domains

## Deploy na Render
1. render.com → New → Web Service
2. Upload kód nebo připojit GitHub repo
3. Build command: `npm run build`
4. Start command: `npm start`
5. Environment: Node

## Deploy přes Docker (Railway/Render/Fly.io)
```bash
docker build -t revestium-web .
docker run -p 3000:3000 revestium-web
```

## Obrázky
Všechny obrázky jsou v `/public/images/`:
- `revestiumlogo.png` — REVESTIUM GROUP logo
- `goldbanklogoreve.jpg` — Gold Bank logo
- `loga_gb.jpg` — Gold Bank CZ/SK/EU varianta
- `aurom.jpg` — AUROM logo
- `arguspro.jpg` — ARGUS PRO logo
- `vizitka-signature.png` — Podpis Augustiny Schiller
- `augustina-portrait.png` — Portrét Augustiny Schiller
- `hero-bg.jpg` — Titulní pozadí (Gold Card)
- `ipmi.png`, `lbma.png`, `akc.png` — Partnerská loga

## Překlady
Všechny texty jsou v `lib/i18n.ts` — přidání nebo úprava textů v jednom souboru.
Jazyk se ukládá do localStorage, výchozí je DE.

## Kontaktní formulář
V `/app/kontakt/page.tsx` je připraveno místo pro API call.
Doporučené řešení: Resend.com nebo Formspree.io

Přidat `.env.local`:
```
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=info@revestium.ch
```
