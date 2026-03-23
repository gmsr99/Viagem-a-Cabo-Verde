import type { ReactNode } from 'react';
import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { bedOutline, trailSignOutline } from 'ionicons/icons';

type GuideBox = {
  className: string;
  tag?: string;
  tagLabel?: string;
  body: ReactNode;
};

type GuideDay = {
  id: string;
  day: string;
  title: string;
  sleep?: string;
  boxes?: GuideBox[];
  items?: ReactNode[];
};

const days: GuideDay[] = [
  {
    id: 'day-1',
    day: 'Dia 1 • 7 de Maio',
    title: 'Aterragem Tática',
    sleep: 'São Vicente (Casa Senador)',
    boxes: [
      {
        className: 'box-voo',
        tag: 'tag-voo',
        tagLabel: 'Voo Ida',
        body: (
          <>
            <strong>EJU7581</strong> (LIS → VXE)
            <br />
            13:40 ▸ 16:05
          </>
        )
      },
      {
        className: 'box-ok',
        tag: 'tag-ok',
        tagLabel: 'Confirmada',
        body: (
          <>
            <strong>Casa Senador (Mindelo)</strong>
            <br />
            Pagamento: dinheiro local (~5.952 CVE)
          </>
        )
      }
    ],
    items: [
      <>
        <strong>Transporte:</strong> aluguer (100 CVE) ou táxi (1000 CVE).
      </>,
      <>
        <strong>Vibe check:</strong> pôr do sol na Praia da Laginha.
      </>,
      <>
        <strong>Jantar:</strong> Casa da Morna.
      </>
    ]
  },
  {
    id: 'day-2',
    day: 'Dia 2 • 8 de Maio',
    title: 'A Subida no Caos',
    sleep: 'Santo Antão (Lar do Viajante)',
    boxes: [
      {
        className: 'box-voo',
        tag: 'tag-ferry',
        tagLabel: 'Ferry Ida',
        body: (
          <>
            <strong>Chiquinho-BL</strong> (SV → Porto Novo)
            <br />
            08:00 (check-in 06:30)
          </>
        )
      }
    ],
    items: [
      <>
        <strong>Hiace:</strong> Estrada da Corda (~500 CVE), sair na Cova.
      </>,
      <>
        <strong>Trekking:</strong> descida até Vale do Paúl (3/4h).
      </>,
      <>
        <strong>Check-in 15:00:</strong> Ribeira Grande.
      </>
    ]
  },
  {
    id: 'day-3',
    day: 'Dia 3 • 9 de Maio',
    title: 'A Besta Costeira',
    sleep: 'Santo Antão (Lar do Viajante)',
    items: [
      <>
        <strong>Trilho épico 14 km:</strong> Ponta do Sol → Cruzinha.
      </>,
      <>
        <strong>Rota:</strong> Fontainhas, Corvo e Formiguinhas.
      </>
    ]
  },
  {
    id: 'day-4',
    day: 'Dia 4 • 10 de Maio',
    title: 'O Vale Vertical',
    sleep: 'Santo Antão (Lar do Viajante)',
    boxes: [
      {
        className: 'box-warn',
        body: (
          <>
            <strong>Ação:</strong> avisar os donos das Las Rochas da hora exata do ferry
            de amanhã.
          </>
        )
      }
    ],
    items: ['Ribeira da Torre (Xoxo). Banhos, cascatas e ritmo mais solto.']
  },
  {
    id: 'day-5',
    day: 'Dia 5 • 11 de Maio',
    title: 'Chill & Transição',
    sleep: 'São Vicente (Las Rochas)',
    boxes: [
      {
        className: 'box-voo',
        tag: 'tag-ferry',
        tagLabel: 'Ferry Volta',
        body: (
          <>
            <strong>Chiquinho-BL</strong> (Porto Novo → SV)
            <br />
            Partida: 17:00 (check-in 15:30)
          </>
        )
      }
    ]
  },
  {
    id: 'day-6',
    day: 'Dia 6 • 12 de Maio',
    title: 'Tartarugas Freestyle',
    sleep: 'São Vicente (Las Rochas)',
    items: [
      'Coletivo para São Pedro na Praca Estrela. Nadar com tartarugas e procurar Deco/Nenass.'
    ]
  },
  {
    id: 'day-7',
    day: 'Dia 7 • 13 de Maio',
    title: 'Mindelo Profundo',
    items: ['Mercado de peixe, CNAD e grogue a noite.']
  },
  {
    id: 'day-8',
    day: 'Dia 8 • 14 de Maio',
    title: 'Saída do Sistema',
    boxes: [
      {
        className: 'box-alert',
        tag: 'tag-voo',
        tagLabel: 'Voo Regresso',
        body: (
          <>
            <strong>EJU7582</strong> (VXE → LIS)
            <br />
            16:50 ▸ 23:00 (bagagem fecha 16:10)
          </>
        )
      }
    ]
  }
];

const Guide: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Itinerário</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="page-shell">
          <section className="page-hero">
            <div className="hero-kicker">
              <IonIcon icon={trailSignOutline} />
              Roteiro de Ilha
            </div>
            <h2>Do Mindelo a Santo Antão, dia a dia.</h2>
            <p className="hero-lead">
              Um percurso pensado para consulta rápida, com o essencial de cada etapa
              sempre visível quando precisarem.
            </p>
            <div className="hero-meta">
              <span className="hero-pill">7 a 14 de maio</span>
              <span className="hero-pill">acordeão por dia</span>
            </div>
          </section>

          <div className="section-heading">
            <h2>Mapa emocional da semana</h2>
            <span className="section-chip">8 etapas</span>
          </div>
          <p className="section-copy">
            Cada dia abre num painel próprio: título claro para navegar depressa,
            conteúdo escuro para consultar detalhes sem ruído.
          </p>

          <IonAccordionGroup className="itinerary-accordion" expand="inset" value="day-1">
            {days.map((entry) => (
              <IonAccordion key={entry.id} value={entry.id}>
                <IonItem slot="header" lines="none" className="itinerary-header">
                  <IonLabel>
                    <div className="itinerary-day">{entry.day}</div>
                    <div className="itinerary-title">{entry.title}</div>
                  </IonLabel>
                </IonItem>

                <div className="itinerary-panel" slot="content">
                  {entry.sleep ? (
                    <div className="dormida">
                      <IonIcon icon={bedOutline} color="primary" size="large" />
                      <div>
                        Dormida: <strong>{entry.sleep}</strong>
                      </div>
                    </div>
                  ) : null}

                  {entry.boxes?.map((box, index) => (
                    <div key={`${entry.id}-box-${index}`} className={`info-box ${box.className}`}>
                      {box.tag && box.tagLabel ? (
                        <>
                          <div className={`tag ${box.tag}`}>{box.tagLabel}</div>
                          <br />
                        </>
                      ) : null}
                      {box.body}
                    </div>
                  ))}

                  {entry.items?.length ? (
                    <ul className="itinerary-list">
                      {entry.items.map((item, index) => (
                        <li key={`${entry.id}-item-${index}`}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </IonAccordion>
            ))}
          </IonAccordionGroup>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Guide;
