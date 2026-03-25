import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';

type DayBox = {
  type: 'voo' | 'ferry' | 'ok' | 'warn' | 'alert';
  tag?: string;
  body: React.ReactNode;
};

type DayEntry = {
  day: number;
  month: string;
  title: string;
  location?: string;
  sleep?: string;
  sleepIcon?: string;
  boxes?: DayBox[];
  items?: React.ReactNode[];
  highlight?: string;
  defaultOpen?: boolean;
};

const days: DayEntry[] = [
  {
    day: 7, month: 'MAI',
    title: 'Dia 1: Chegada',
    location: 'Mindelo, São Vicente',
    sleep: 'Casa Senador',
    defaultOpen: true,
    boxes: [
      {
        type: 'voo',
        tag: 'Voo Ida',
        body: <><strong>EJU7581</strong> (LIS → VXE)<br />13:40 ▸ 16:05</>
      },
      {
        type: 'ok',
        tag: 'Confirmada',
        body: <><strong>Casa Senador (Mindelo)</strong><br />Pagamento: dinheiro local (~5.952 CVE)</>
      }
    ],
    items: [
      <><strong>Transporte:</strong> aluguer (100 CVE) ou táxi (1000 CVE)</>,
      <><strong>Vibe check:</strong> pôr do sol na Praia da Laginha</>,
      <><strong>Jantar:</strong> Casa da Morna</>,
    ]
  },
  {
    day: 8, month: 'MAI',
    title: 'Dia 2: A Subida no Caos',
    location: 'Para Santo Antão',
    sleep: 'Lar do Viajante (Paul)',
    boxes: [
      {
        type: 'ferry',
        tag: 'Ferry Ida',
        body: (
          <div className="day-ferry-times">
            <div>
              <div className="info-label">Ferry Chiquinho-BL</div>
              <div className="check-in">Check-in: 06:30</div>
            </div>
            <div className="departure">Partida: 08:00</div>
          </div>
        )
      }
    ],
    items: [
      <><strong>Hiace:</strong> Estrada da Corda (~500 CVE), sair na Cova</>,
      <><strong>Trekking:</strong> descida até Vale do Paúl (3/4h)</>,
      <><strong>Check-in 15:00:</strong> Ribeira Grande</>,
    ]
  },
  {
    day: 9, month: 'MAI',
    title: 'Dia 3: A Besta Costeira',
    location: 'Caminhada Costeira',
    sleep: 'Lar do Viajante (Paul)',
    highlight: 'Trilho épico 14 km: Ponta do Sol → Cruzinha',
    items: [
      <>Almoço em Fontainhas (vista mundialmente reconhecida)</>,
      <>Mergulho em Cruzinha da Garça</>,
    ]
  },
  {
    day: 10, month: 'MAI',
    title: 'Dia 4: O Vale Vertical',
    location: 'Ribeira da Torre',
    sleep: 'Lar do Viajante (Paul)',
    boxes: [
      {
        type: 'warn',
        body: <><strong>Ação:</strong> avisar os donos das Las Rochas da hora exata do ferry de amanhã</>
      }
    ],
    items: ['Ribeira da Torre (Xoxo). Banhos, cascatas e ritmo mais solto.']
  },
  {
    day: 11, month: 'MAI',
    title: 'Dia 5: Chill & Transição',
    location: 'Para São Vicente',
    sleep: 'Las Rochas (Mindelo)',
    boxes: [
      {
        type: 'ferry',
        tag: 'Ferry Volta',
        body: (
          <div className="day-ferry-times">
            <div>
              <div className="info-label">Chiquinho-BL (Porto Novo → SV)</div>
              <div className="check-in">Check-in: 15:30</div>
            </div>
            <div className="departure">Partida: 17:00</div>
          </div>
        )
      }
    ]
  },
  {
    day: 12, month: 'MAI',
    title: 'Dia 6: Tartarugas Freestyle',
    location: 'São Vicente',
    sleep: 'Las Rochas (Mindelo)',
    items: ['Coletivo para São Pedro na Praça Estrela. Nadar com tartarugas e procurar Deco/Nenass.']
  },
  {
    day: 13, month: 'MAI',
    title: 'Dia 7: Mindelo Profundo',
    location: 'São Vicente',
    items: ['Mercado de peixe, CNAD e grogue à noite.']
  },
  {
    day: 14, month: 'MAI',
    title: 'Dia 8: Saída do Sistema',
    location: 'São Vicente',
    boxes: [
      {
        type: 'alert',
        tag: 'Voo Regresso',
        body: <><strong>EJU7582</strong> (VXE → LIS)<br />16:50 ▸ 23:00 (bagagem fecha 16:10)</>
      }
    ]
  }
];

const boxColors: Record<string, string> = {
  voo:   'rgba(173,198,255,0.08)',
  ferry: 'rgba(173,198,255,0.08)',
  ok:    'rgba(110,217,176,0.08)',
  warn:  'rgba(255,184,116,0.1)',
  alert: 'rgba(255,180,171,0.08)',
};
const boxBorders: Record<string, string> = {
  voo:   'rgba(173,198,255,0.22)',
  ferry: 'rgba(173,198,255,0.3)',
  ok:    'rgba(110,217,176,0.22)',
  warn:  'rgba(255,184,116,0.25)',
  alert: 'rgba(255,180,171,0.2)',
};
const boxIconColors: Record<string, string> = {
  voo:   '#adc6ff',
  ferry: '#adc6ff',
  ok:    '#6ed9b0',
  warn:  '#ffb874',
  alert: '#ffb4ab',
};
const boxIcons: Record<string, string> = {
  voo:   'flight_takeoff',
  ferry: 'directions_boat',
  ok:    'check_circle',
  warn:  'warning',
  alert: 'flight_land',
};

const Guide: React.FC = () => (
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
        <div className="guide-hero">
          <span className="section-eyebrow">Itinerário</span>
          <h1 className="guide-title">Aventura<br />nas Ilhas</h1>
          <p className="guide-subtitle">De 7 a 14 de maio. Uma jornada épica entre vulcões, trilhos costeiros e a alma da Morna.</p>
        </div>

        {/* Day accordion list */}
        <div className="day-list">
          {days.map((entry) => (
            <details
              key={entry.day}
              className="day-details"
              open={entry.defaultOpen}
            >
              <summary className="day-summary">
                <div className="day-summary-left">
                  <div className={`day-badge${entry.defaultOpen ? ' active' : ''}`}>
                    <span className="day-badge-month">{entry.month}</span>
                    <span className="day-badge-num">{entry.day}</span>
                  </div>
                  <div className="day-title-block">
                    <h3>{entry.title}</h3>
                    {entry.location && <div className="day-location">{entry.location}</div>}
                  </div>
                </div>
                <span className="material-symbols-outlined day-expand-icon">expand_more</span>
              </summary>

              <div className="day-panel">
                {/* Sleep */}
                {entry.sleep && (
                  <div className="day-info-row">
                    <span className="material-symbols-outlined" style={{ color: '#ffb874', fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>bed</span>
                    <div>
                      <div className="info-label">Dormida</div>
                      <div className="info-value">{entry.sleep}</div>
                    </div>
                  </div>
                )}

                {/* Boxes */}
                {entry.boxes?.map((box, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: boxColors[box.type],
                      border: `1px solid ${boxBorders[box.type]}`,
                      borderRadius: '14px',
                      padding: '14px 16px',
                    }}
                  >
                    {box.tag && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: '18px', color: boxIconColors[box.type] }}
                        >{boxIcons[box.type]}</span>
                        <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: boxIconColors[box.type] }}>{box.tag}</span>
                      </div>
                    )}
                    <div style={{ fontSize: '0.875rem', color: '#e5e2e1', lineHeight: 1.5 }}>{box.body}</div>
                  </div>
                ))}

                {/* Highlight */}
                {entry.highlight && (
                  <div className="day-highlight">
                    <div className="day-highlight-label">Highlight do Dia</div>
                    <div className="day-highlight-text">{entry.highlight}</div>
                  </div>
                )}

                {/* Items */}
                {entry.items && entry.items.length > 0 && (
                  <div className="day-items">
                    {entry.items.map((item, idx) => (
                      <div key={idx} className="day-item">{item}</div>
                    ))}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>

        {/* Offline badge */}
        <div className="offline-badge">
          <div className="offline-badge-title">
            <span className="material-symbols-outlined">offline_pin</span>
            Modo Offline Ativo
          </div>
          <p>Todo o itinerário e mapas estão disponíveis sem conexão de dados para garantir que nunca se perca nos trilhos.</p>
        </div>

      </div>
    </IonContent>
  </IonPage>
);

export default Guide;
