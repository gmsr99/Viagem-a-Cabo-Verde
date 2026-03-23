import React, { useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { busOutline, carSportOutline, swapHorizontalOutline } from 'ionicons/icons';

const CVE_RATE = 110.265; // 1 EUR ≈ 110.265 CVE (taxa fixa)

const Transports: React.FC = () => {
  const [cveInput, setCveInput] = useState('');
  const cve = parseFloat(cveInput) || 0;
  const eur = cve > 0 ? (cve / CVE_RATE).toFixed(2) : '';

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Transportes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="page-shell">
          <section className="page-hero">
            <div className="hero-kicker">
              <IonIcon icon={carSportOutline} />
              Mobilidade Local
            </div>
            <h2>Tarifas rápidas para não negociar às cegas.</h2>
            <p className="hero-lead">
              Um guia prático para táxis em São Vicente e alugueres em Santo Antão,
              pensado para consulta rápida na rua.
            </p>
          </section>

          <div className="section-heading">
            <h2>Preços de referência</h2>
            <span className="section-chip">guia rápido</span>
          </div>
          <p className="section-copy">
            Não substitui a conversa local, mas ajuda a perceber a ordem de grandeza
            certa antes de entrar no carro.
          </p>

          <div className="converter-card">
            <div className="converter-header">
              <div className="converter-title-row">
                <IonIcon icon={swapHorizontalOutline} />
                <span>Conversor CVE ↔ EUR</span>
              </div>
              <small>1 EUR = {CVE_RATE} CVE</small>
              <div className="converter-note">(taxa fixa)</div>
            </div>
            <div className="converter-body">
              <div className="converter-field">
                <label>CVE</label>
                <input
                  type="number"
                  inputMode="decimal"
                  placeholder="ex: 500"
                  value={cveInput}
                  onChange={e => setCveInput(e.target.value)}
                />
              </div>
              <div className="converter-result">
                {eur ? <><strong>{eur}</strong> <span>EUR</span></> : <span className="converter-placeholder">— EUR</span>}
              </div>
            </div>
          </div>

          <div className="section-strip">
            <span>São Vicente</span>
            <span>Táxis</span>
          </div>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                <div className="card-header-row">
                  <span className="icon-badge">
                    <IonIcon icon={carSportOutline} />
                  </span>
                  São Vicente (Táxis)
                </div>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <table className="transport-table">
                <thead>
                  <tr>
                    <th>Trajeto</th>
                    <th>Diurno</th>
                    <th>Noturno</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Centro a Centro</td>
                    <td>150 CVE</td>
                    <td>200 CVE</td>
                  </tr>
                  <tr>
                    <td>Centro a Subúrbio</td>
                    <td>200 CVE</td>
                    <td>250 CVE</td>
                  </tr>
                  <tr>
                    <td>Aeroporto a Centro</td>
                    <td colSpan={2}>1000 CVE</td>
                  </tr>
                </tbody>
              </table>
            </IonCardContent>
          </IonCard>

          <div className="section-strip">
            <span>Santo Antão</span>
            <span>Alugueres</span>
          </div>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                <div className="card-header-row">
                  <span className="icon-badge">
                    <IonIcon icon={busOutline} />
                  </span>
                  Santo Antão (Alugueres)
                </div>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p className="muted-copy" style={{ marginTop: 0 }}>
                Não há táxis convencionais. O transporte habitual é em "alugueres"
                (Hiace), com preços fixos por passageiro.
              </p>
              <table className="transport-table">
                <thead>
                  <tr>
                    <th>Trajeto</th>
                    <th>Preço padrão</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      P. Novo ➔ Rib. Grande
                      <br />
                      <small>(Estrada da Corda)</small>
                    </td>
                    <td>~500 CVE</td>
                  </tr>
                  <tr>
                    <td>
                      P. Novo ➔ Rib. Grande
                      <br />
                      <small>(Litoral / Nova)</small>
                    </td>
                    <td>~400 CVE</td>
                  </tr>
                  <tr>
                    <td>Rib. Grande ➔ P. do Sol</td>
                    <td>~50-100 CVE</td>
                  </tr>
                  <tr>
                    <td>Rib. Grande ➔ Vale do Paúl</td>
                    <td>~100-150 CVE</td>
                  </tr>
                  <tr>
                    <td>Rib. Grande ➔ Rib. da Torre</td>
                    <td>~100 CVE</td>
                  </tr>
                </tbody>
              </table>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Transports;
