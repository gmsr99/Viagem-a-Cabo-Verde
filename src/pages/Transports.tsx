import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';

const CVE_RATE = 110.265;

const svTaxis = [
  { dest: 'Mindelo Center',       day: '150 CVE', night: '200 CVE' },
  { dest: 'Suburbs',              day: '200 CVE', night: '250 CVE' },
  { dest: 'Aeroporto Cesária Évora', day: '800 CVE', night: '1000 CVE' },
  { dest: 'Baía das Gatas',       day: '1200 CVE', night: '1500 CVE' },
];

const saAlugueres = [
  { from: 'Porto Novo to', dest: 'Ribeira Grande', note: 'Estrada da Corda', price: '~500 CVE', accent: 'primary' },
  { from: 'Porto Novo to', dest: 'Vale do Paúl',   note: 'Via Eito/Passagem', price: '~400 CVE', accent: 'tertiary' },
  { from: 'Porto Novo to', dest: 'Ponta do Sol',   note: 'Coastal Route', price: '~500 CVE', accent: 'primary' },
  { from: 'Porto Novo to', dest: 'Tarrafal',        note: '4x4 Collective', price: '~700 CVE', accent: 'tertiary' },
  { from: 'Rib. Grande to', dest: 'Ponta do Sol',  note: 'Local Route', price: '~50–100 CVE', accent: 'primary' },
  { from: 'Rib. Grande to', dest: 'Vale do Paúl',  note: 'Local Route', price: '~100–150 CVE', accent: 'tertiary' },
  { from: 'Rib. Grande to', dest: 'Rib. da Torre', note: 'Local Route', price: '~100 CVE', accent: 'primary' },
];

const Transports: React.FC = () => {
  const [input, setInput] = useState('1000');
  const [dir, setDir] = useState<'cve-to-eur' | 'eur-to-cve'>('cve-to-eur');

  const num = parseFloat(input) || 0;
  const result = num > 0
    ? dir === 'cve-to-eur'
      ? (num / CVE_RATE).toFixed(2)
      : (num * CVE_RATE).toFixed(0)
    : '';

  const swap = () => {
    setDir(d => d === 'cve-to-eur' ? 'eur-to-cve' : 'cve-to-eur');
    setInput(result || '');
  };

  const fromLabel = dir === 'cve-to-eur' ? 'Escudos (CVE)' : 'Euros (EUR)';
  const toLabel   = dir === 'cve-to-eur' ? 'Euros (EUR)'   : 'Escudos (CVE)';
  const fromCode  = dir === 'cve-to-eur' ? 'CVE' : 'EUR';
  const toCode    = dir === 'cve-to-eur' ? 'EUR' : 'CVE';

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="cv-toolbar">
            <span className="cv-app-title">Cabo Verde Escape</span>
            <button className="cv-settings-btn">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="page-shell">

          {/* Hero */}
          <section className="transport-hero" style={{ marginBottom: '28px' }}>
            <h1>Transportes<br /><span>&amp; Moeda</span></h1>
            <p>Guia essencial para navegar pelas ilhas e gerir os teus Escudos sem surpresas.</p>
          </section>

          {/* Currency Converter */}
          <section className="converter-card" style={{ marginBottom: '32px' }}>
            <div className="converter-header">
              <div className="converter-title">
                <span className="material-symbols-outlined">payments</span>
                Conversor de Moeda
              </div>
              <span className="converter-rate">Live Rate: {CVE_RATE}</span>
            </div>

            <div className="converter-fields">
              <div className="converter-field">
                <label>{fromLabel}</label>
                <div className="converter-input-wrap">
                  <input
                    className="converter-input"
                    type="number"
                    inputMode="decimal"
                    placeholder="0"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                  />
                  <span className="converter-currency">{fromCode}</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="converter-swap" onClick={swap}>
                  <span className="material-symbols-outlined">sync_alt</span>
                </button>
              </div>

              <div className="converter-field">
                <label>{toLabel}</label>
                <div className="converter-input-wrap">
                  <input
                    className="converter-input converter-input-result"
                    type="text"
                    readOnly
                    value={result || '—'}
                  />
                  <span className="converter-currency" style={{ color: 'rgba(173,198,255,0.7)' }}>{toCode}</span>
                </div>
              </div>
            </div>

            <p className="converter-note">Taxa fixa estabelecida pelo Banco Central</p>
          </section>

          {/* São Vicente */}
          <section className="island-section">
            <div className="island-header">
              <div className="island-header-left">
                <span className="label">Island Guide</span>
                <h3>São Vicente</h3>
              </div>
              <span className="material-symbols-outlined">local_taxi</span>
            </div>

            <div className="transport-table-card">
              <table className="transport-table">
                <thead>
                  <tr>
                    <th>Destination</th>
                    <th style={{ textAlign: 'right' }}>Day (06–21h)</th>
                    <th style={{ textAlign: 'right' }}>Night (21–06h)</th>
                  </tr>
                </thead>
                <tbody>
                  {svTaxis.map((row, i) => (
                    <tr key={i}>
                      <td>{row.dest}</td>
                      <td style={{ textAlign: 'right', fontFamily: 'Manrope', fontWeight: 700 }}>{row.day}</td>
                      <td className="price-night" style={{ textAlign: 'right', fontFamily: 'Manrope', fontWeight: 700 }}>{row.night}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Santo Antão */}
          <section className="island-section">
            <div className="island-header">
              <div className="island-header-left">
                <span className="label">Shared Transport</span>
                <h3>Santo Antão</h3>
              </div>
              <span className="material-symbols-outlined">airport_shuttle</span>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#8b90a0', marginBottom: '14px', lineHeight: 1.5 }}>
              Não há táxis convencionais. O transporte habitual é em "alugueres" (Hiace), com preços fixos por passageiro.
            </p>

            <div className="aluguer-grid">
              {saAlugueres.map((a, i) => (
                <div key={i} className={`aluguer-card${a.accent === 'tertiary' ? ' border-tertiary' : ''}`}>
                  <div>
                    <div className="aluguer-from">{a.from}</div>
                    <div className="aluguer-to">{a.dest}</div>
                  </div>
                  <div>
                    <div className="aluguer-price">{a.price}</div>
                    <div className="aluguer-note">{a.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pro Tip */}
          <div className="tip-card">
            <div className="tip-icon">
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <div>
              <p className="tip-title">Traveler Pro-Tip</p>
              <p className="tip-body">
                Levar sempre notas pequenas de Escudos (100, 200, 500) para os alugueres.
                Muitos negócios aceitam Euros mas usam 1 EUR = 100 CVE, custando cerca de 10% a mais.
              </p>
            </div>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Transports;
