import { useState, useEffect } from 'react';
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
      <><strong>Transporte:</strong> aluguer (100 CVE) ou táxi (~1.000 CVE) do aeroporto ao centro</>,
      <><strong>ATM:</strong> levantar CVE no aeroporto ou BCA em Mindelo — bancos fecham às 15h</>,
      <><strong>Pôr do sol:</strong> Praia da Laginha, a pé do centro (15 min)</>,
      <><strong>Jantar:</strong> Casa da Morna by Buxa — culinária cabo-verdiana + música ao vivo todas as noites. Ranked #2 em Mindelo. Não precisa reserva, mas ir antes das 20h.</>,
    ]
  },
  {
    day: 8, month: 'MAI',
    title: 'Dia 2: A Subida no Caos',
    location: 'Para Santo Antão',
    sleep: 'Lar do Viajante (Paul)',
    highlight: 'Estrada da Corda — 46 km de asfalto em suspensão. Uma das estradas de montanha mais dramáticas do mundo, talhada na rocha viva.',
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
      },
      {
        type: 'warn',
        body: <>Os <strong>coletivos para a Cova saem entre 08:30–09:30</strong> de Porto Novo e não há mais depois. Apanhar imediatamente ao chegar.</>
      }
    ],
    items: [
      <><strong>Hiace Estrada da Corda:</strong> ~500 CVE por pessoa, sentar do lado direito para a melhor vista</>,
      <><strong>Trekking:</strong> descida do Cova (~1.100 m) até Vale do Paúl — 3/4h por entre bananeiras e cana de açúcar</>,
      <><strong>Check-in 15:00</strong> no Lar do Viajante, Ribeira Grande</>,
      <><strong>Jantar:</strong> perguntar no hostel — oferta local simples e honesta</>,
    ]
  },
  {
    day: 9, month: 'MAI',
    title: 'Dia 3: A Besta Costeira',
    location: 'Caminhada Costeira',
    sleep: 'Lar do Viajante (Paul)',
    highlight: 'Fontainhas — reconhecida pela National Geographic como uma das aldeias com vistas mais bonitas do mundo. Casas coloridas suspensas sobre o abismo, calçada centenária entre mar e falésia.',
    boxes: [
      {
        type: 'warn',
        body: (
          <>
            <strong>Logística crítica:</strong> Não há coletivos da tarde em Cruzinha.{' '}
            <strong>Reservar táxi de regresso antes de sair</strong> (~4.000–4.500 CVE para Ribeira Grande).
            Água: mínimo <strong>2,5–3 L por pessoa</strong> — poucas fontes ao longo do percurso.
          </>
        )
      }
    ],
    items: [
      <><strong>Partida:</strong> coletivo de Ribeira Grande para Ponta do Sol (~50 CVE)</>,
      <><strong>Trilho:</strong> ~15 km, 5–6h com paragens. Calçada histórica em calcário ao longo das falésias</>,
      <><strong>Almoço em Formiguinhas:</strong> Restaurante Sónia ou Restaurante Izabel — pargo fresco e cachupa com vista para o mar</>,
      <><strong>Fontainhas:</strong> aldeia suspensa, paragem obrigatória — fotografia e momento</>,
      <><strong>Chegada a Cruzinha:</strong> mergulho no mar e cerveja fria no Restaurante Sonafish</>,
    ]
  },
  {
    day: 10, month: 'MAI',
    title: 'Dia 4: O Vale Vertical',
    location: 'Ribeira da Torre',
    sleep: 'Lar do Viajante (Paul)',
    highlight: 'Cascata da Vinha — 150 metros de queda livre, corre o ano todo (única em Santo Antão). O trilho até lá percorre os Caminhos de Pedra históricos do século XIX.',
    boxes: [
      {
        type: 'warn',
        body: <><strong>Ação:</strong> avisar os donos das Las Rochas da hora exata do ferry de amanhã</>
      }
    ],
    items: [
      <><strong>Rocha de Xoxo:</strong> formação rochosa icónica que domina o vale — símbolo de Santo Antão e ponto de partida para os trilhos</>,
      <><strong>Caminhos de Pedra:</strong> vias históricas do século XIX que ligavam aldeias isoladas. Descida de ~1.480 m até ao mar (3–5h, moderado/difícil)</>,
      <><strong>Cascata da Vinha:</strong> trilho de 1–2h desde Xoxo. Levar roupa para molhar — a lagoa no sopé convida a mergulhar</>,
      <><strong>Bar Melícia:</strong> sumo de cana de açúcar fresco no vale — a paragem mais refrescante da ilha</>,
      <><strong>Destilarias de Grogue:</strong> maio é o <em>último mês de produção</em> antes do encerramento sazonal — oportunidade única de ver o processo ativo</>,
    ]
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
    ],
    items: [
      <><strong>Manhã tranquila</strong> em Paúl — o dia mais lento da viagem, aproveitar</>,
      <><strong>Destilaria de Grogue:</strong> maio é o <em>último mês de produção</em> do ano — visitar e provar diretamente da fonte</>,
      <><strong>Passagem:</strong> pequena piscina natural na ribeira para um último mergulho fresco</>,
      <><strong>Almoço em Pombas</strong> antes de descer — cachupa com ovo ou grelhado local</>,
      <><strong>Sair para Porto Novo por volta das 14:00</strong> (coletivo ~100 CVE ou táxi ~500 CVE)</>,
    ]
  },
  {
    day: 12, month: 'MAI',
    title: 'Dia 6: Tartarugas Freestyle',
    location: 'São Vicente',
    sleep: 'Las Rochas (Mindelo)',
    boxes: [
      {
        type: 'ok',
        tag: 'Atividade',
        body: (
          <>
            São Pedro é o <strong>único sítio em Cabo Verde</strong> onde se nada com tartarugas-verdes em liberdade.
            Maio está na época ideal (abr–ago). Tour: ~1.500 CVE/pessoa com guia local.{' '}
            <strong>É proibido tocar nas tartarugas.</strong>
          </>
        )
      }
    ],
    items: [
      <><strong>Coletivo:</strong> Praça Estrela, Mindelo → São Pedro (~100–150 CVE, ~30 min). Sair cedo de manhã</>,
      <><strong>Procurar Deco/Nenass</strong> na praia para o tour — guias locais que conhecem onde estão as tartarugas</>,
      <><strong>Praia de São Pedro:</strong> areia e águas calmas para relaxar entre mergulhos</>,
      <><strong>Regresso:</strong> coletivo no mesmo ponto de São Pedro de volta a Mindelo</>,
    ]
  },
  {
    day: 13, month: 'MAI',
    title: 'Dia 7: Mindelo Profundo',
    location: 'São Vicente',
    items: [
      <><strong>Mercado do Peixe (7h–10h):</strong> junto à Torre de Belém, na marginal. Atum, garoupa, cavala — o centro nervoso de Mindelo ao amanhecer</>,
      <><strong>CNAD:</strong> Centro Nacional de Artesanato e Design, entrada ~500 CVE. Fachada com 8.800 tampas de bidões recicladas. Exposições de design e artesanato cabo-verdiano</>,
      <><strong>Praça Nova + Mercado Municipal:</strong> ambiente local, artesanato e souvenirs (Mercado abre 8h–18h30)</>,
      <><strong>Pôr do sol no quiosque da Praça Nova</strong> — grogue com mel e ver a cidade parar</>,
      <><strong>Rua de Lisboa à noite:</strong> epicentro da vida noturna — bares, música ao vivo, ambiente. Pedir <em>grogue maduro</em> de Santo Antão — mais suave e envelhecido</>,
    ]
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
      },
      {
        type: 'warn',
        body: <><strong>Sair para o aeroporto por volta das 13:30.</strong> Táxi ~800 CVE (20 min). Check-in online easyJet obrigatório — ter boarding pass na app antes de chegar.</>
      }
    ],
    items: [
      <><strong>Última manhã:</strong> Praia da Laginha — o adeus ao Atlântico</>,
      <><strong>Café final:</strong> Praça Nova ou Praça Estrela, sem pressa</>,
      <><strong>Últimas compras (Mercado Municipal, abre 8h):</strong> grogue, pano de terra, doces de papaia</>,
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

const Guide: React.FC = () => {
  const [light, setLight] = useState(() => localStorage.getItem('theme') === 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', light ? 'light' : 'dark');
  }, [light]);

  return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <div className="cv-toolbar">
          <span className="cv-app-title">Cabo Verde Escape</span>
          <button className="cv-settings-btn" onClick={() => {
            const next = !light;
            setLight(next);
            localStorage.setItem('theme', next ? 'light' : 'dark');
          }}>
            <span className="material-symbols-outlined">{light ? 'dark_mode' : 'light_mode'}</span>
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
                    <div style={{ fontSize: '0.875rem', color: 'var(--on-surface)', lineHeight: 1.5 }}>{box.body}</div>
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
};

export default Guide;
