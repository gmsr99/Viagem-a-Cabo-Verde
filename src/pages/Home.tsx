import { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import heroImg from '../assets/hero.png';

const CHECKLIST_KEY = 'cv_checklist';

const CHECKLIST_ITEMS: { label: string; icon: string }[] = [
  { label: 'Passaportes válidos',                         icon: 'travel' },
  { label: 'Cartões de embarque easyJet (app)',           icon: 'confirmation_number' },
  { label: 'Registos EASE impressos / screenshot',        icon: 'article' },
  { label: 'Bilhetes ferry Interilhas',                   icon: 'directions_boat' },
  { label: 'Seguro de viagem ativo',                      icon: 'health_and_safety' },
  { label: 'Adaptador de tomadas (tipo F → B)',           icon: 'electrical_services' },
  { label: 'Protetor solar fator alto',                   icon: 'wb_sunny' },
  { label: 'Saco do lixo resistente (mala no tejadilho)', icon: 'inventory_2' },
  { label: 'Dinheiro em CVE ou EUR para trocar',          icon: 'currency_exchange' },
  { label: 'Roupa impermeável / camadas para trekking',   icon: 'hiking' },
];

const DEPARTURE = new Date('2026-05-07T13:40:00');

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

const Home: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown(DEPARTURE);
  const departed = days === 0 && hours === 0 && minutes === 0 && seconds === 0;
  const totalHours = days * 24 + hours;

  const [checked, setChecked] = useState<boolean[]>(() => {
    try {
      const s = localStorage.getItem(CHECKLIST_KEY);
      return s ? JSON.parse(s) : CHECKLIST_ITEMS.map(() => false);
    } catch {
      return CHECKLIST_ITEMS.map(() => false);
    }
  });

  const toggle = (i: number) => {
    const next = checked.map((v, idx) => idx === i ? !v : v);
    setChecked(next);
    localStorage.setItem(CHECKLIST_KEY, JSON.stringify(next));
  };

  const doneCount = checked.filter(Boolean).length;

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

          {/* ── Hero ── */}
          <section className="hero-section">
            <img src={heroImg} className="hero-img" alt="Cabo Verde coast" />
            <div className="hero-gradient" />
            <div className="hero-body">
              <div>
                <p className="hero-countdown-label">Departure Countdown</p>
                {!departed ? (
                  <p className="hero-countdown-value">
                    {totalHours}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                  </p>
                ) : (
                  <p className="hero-countdown-value">✈️ Boa viagem!</p>
                )}
              </div>
              <div className="hero-flight-card">
                <div className="hero-flight-left">
                  <div className="hero-flight-icon">
                    <span className="material-symbols-outlined">flight_takeoff</span>
                  </div>
                  <div>
                    <p className="hero-flight-number">EJU7581</p>
                    <p className="hero-flight-route">LIS → VXE · 07 Mai 2026</p>
                  </div>
                </div>
                <div className="hero-flight-time">
                  <strong>13:40</strong>
                  <p className="hero-flight-status">Scheduled</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Pre-Trip Radar ── */}
          <section style={{ marginBottom: '32px' }}>
            <h2 className="section-title">
              <span className="material-symbols-outlined">radar</span>
              Pre-Trip Radar
            </h2>

            <div className="radar-grid">
              {/* EASE Codes */}
              <div className="radar-card">
                <span className="radar-card-label">TSA / EASE Codes</span>
                <div className="ease-row">
                  <span className="ease-name">Gil Ribeiro</span>
                  <span className="ease-code">QnzD9WL9E</span>
                </div>
                <div className="ease-row">
                  <span className="ease-name">Leonor Álvaro</span>
                  <span className="ease-code">ykX6v82Ev</span>
                </div>
              </div>

              {/* Priority Alerts */}
              <div className="radar-card">
                <span className="radar-card-label">Priority Alerts</span>
                <div className="alert-row">
                  <span className="material-symbols-outlined">confirmation_number</span>
                  <span>Descarregar cartão de embarque easyJet atualizado</span>
                </div>
                <div className="alert-row">
                  <span className="material-symbols-outlined">directions_boat</span>
                  <span>Ferry Interilhas — bilhetes comprados, chegar 1h30 antes</span>
                </div>
              </div>

              {/* Logistics — full width */}
              <div className="radar-card radar-full" style={{ background: 'linear-gradient(135deg, #1c1b1b, #201f1f)', border: '1px solid rgba(65,71,85,0.15)' }}>
                <div className="logistics-card">
                  <div className="logistics-img">
                    <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>inventory_2</span>
                  </div>
                  <div>
                    <p className="logistics-title">Proteção de Hardware — Tejadilho</p>
                    <p className="logistics-body">
                      A mala grande vai no tejadilho em Santo Antão. Levar saco do lixo resistente
                      continua a ser um excelente plano B para as estradas poeirentas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Checklist ── */}
          <section>
            <div className="checklist-header">
              <h2 className="section-title" style={{ marginBottom: 0 }}>Essentials</h2>
              <span className="checklist-count">{doneCount}/{CHECKLIST_ITEMS.length} complete</span>
            </div>

            <div className="checklist-container">
              {CHECKLIST_ITEMS.map((item, i) => (
                <button
                  key={i}
                  className={`checklist-item${checked[i] ? ' done' : ''}`}
                  onClick={() => toggle(i)}
                >
                  <div className="checklist-item-left">
                    <div className="checklist-icon">
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        {item.icon}
                      </span>
                    </div>
                    <span className="checklist-label">{item.label}</span>
                  </div>
                  <input
                    type="checkbox"
                    className="checklist-cb"
                    checked={checked[i]}
                    onChange={() => toggle(i)}
                    onClick={e => e.stopPropagation()}
                  />
                </button>
              ))}
            </div>
          </section>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
