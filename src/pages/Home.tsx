import { useState, useEffect } from 'react';
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
import {
  airplaneOutline,
  bulbOutline,
  checkboxOutline,
  squareOutline,
  sunnyOutline,
  warningOutline
} from 'ionicons/icons';

const CHECKLIST_KEY = 'cv_checklist';
const CHECKLIST_ITEMS = [
  'Passaportes válidos',
  'Cartões de embarque easyJet (app)',
  'Registos EASE impressos / screenshot',
  'Bilhetes ferry Interilhas',
  'Seguro de viagem ativo',
  'Adaptador de tomadas (tipo F → B)',
  'Protetor solar fator alto',
  'Saco do lixo resistente (mala no tejadilho)',
  'Dinheiro em CVE ou EUR para trocar',
  'Roupa impermeável / camadas para trekking',
];

function useCountdown(targetDate: Date) {
  const calc = () => {
    const diff = targetDate.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const DEPARTURE = new Date('2026-05-07T13:40:00');

const Home: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown(DEPARTURE);
  const departed = days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  const [checked, setChecked] = useState<boolean[]>(() => {
    try {
      const saved = localStorage.getItem(CHECKLIST_KEY);
      return saved ? JSON.parse(saved) : CHECKLIST_ITEMS.map(() => false);
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
          <IonTitle>Painel Principal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="page-shell">
          <section className="page-hero page-hero-featured">
            <div className="hero-kicker">
              <IonIcon icon={sunnyOutline} />
              Cabo Verde Escape
            </div>



            {!departed ? (
              <div className="countdown-strip">
                <span className="countdown-label">Partida em</span>
                <div className="countdown-units">
                  <div className="countdown-unit">
                    <strong>{days}</strong>
                    <span>dias</span>
                  </div>
                  <div className="countdown-unit">
                    <strong>{String(hours).padStart(2, '0')}</strong>
                    <span>horas</span>
                  </div>
                  <div className="countdown-unit">
                    <strong>{String(minutes).padStart(2, '0')}</strong>
                    <span>min</span>
                  </div>
                  <div className="countdown-unit">
                    <strong>{String(seconds).padStart(2, '0')}</strong>
                    <span>seg</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="countdown-strip">
                <span className="countdown-label">✈️ Boa viagem!</span>
              </div>
            )}

            <div className="hero-meta">
              <span className="hero-pill">
                <IonIcon icon={airplaneOutline} />
                maio 2026
              </span>
            </div>
          </section>

          <div className="section-heading">
            <h2>Radar pré-viagem</h2>
            <span className="section-chip">essencial</span>
          </div>
          <p className="section-copy">
            Aqui fica tudo o que merece atenção antes de sair de casa ou durante as
            trocas entre avião, ferry e bagagem.
          </p>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                <div className="card-header-row">
                  <span className="icon-badge">
                    <IonIcon icon={warningOutline} />
                  </span>
                  Dossiês Pre-Trip
                </div>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="info-box box-alert">
                <strong>1. Burocracia TSA (EASE):</strong>
                <br />
                Registo efetuado a 22/03.
                <br />
                <br />
                <strong>Gil Ribeiro</strong>
                <br />
                N. Registo: <code>QnzD9WL9E</code>
                <br />
                <br />
                <strong>Leonor Álvaro</strong>
                <br />
                N. Registo: <code>ykX6v82Ev</code>
              </div>

              <div className="info-box box-warn">
                <div className="card-header-row">
                  <IonIcon icon={warningOutline} />
                  <strong>2. Bug no cartão de embarque</strong>
                </div>
                O voo da ida sofreu alteração. Vale a pena descarregar o cartão de
                embarque novamente na app da easyJet.
              </div>

              <div className="info-box box-voo">
                <div className="card-header-row">
                  <IonIcon icon={airplaneOutline} />
                  <strong>3. Ferry CV Interilhas</strong>
                </div>
                Bilhetes de ida e volta já comprados. O ideal é estar no porto 1h30
                antes da partida.
              </div>

              <div className="info-box box-hack">
                <div className="card-header-row" style={{ color: 'var(--cv-gold-soft)' }}>
                  <IonIcon icon={bulbOutline} />
                  <strong>4. Proteção de hardware</strong>
                </div>
                A mala grande vai no tejadilho em Santo Antão. Levar saco do lixo
                resistente continua a ser um excelente plano B.
              </div>
            </IonCardContent>
          </IonCard>
          <div className="section-heading" style={{ marginTop: 24 }}>
            <h2>Checklist de partida</h2>
            <span className="section-chip">{doneCount}/{CHECKLIST_ITEMS.length}</span>
          </div>

          <IonCard>
            <IonCardContent style={{ paddingTop: 12 }}>
              {CHECKLIST_ITEMS.map((item, i) => (
                <button
                  key={i}
                  className={`checklist-item${checked[i] ? ' checklist-done' : ''}`}
                  onClick={() => toggle(i)}
                >
                  <IonIcon icon={checked[i] ? checkboxOutline : squareOutline} />
                  <span>{item}</span>
                </button>
              ))}
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
