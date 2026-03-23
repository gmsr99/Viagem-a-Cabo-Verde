import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { bedOutline, trailSignOutline } from 'ionicons/icons';

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
            <h2>Do Mindelo aos vales verdes, dia a dia.</h2>
            <p className="hero-lead">
              Um percurso pensado para equilibrar ferry, trekking, mergulhos e algum
              espaço para improviso sem perder a narrativa da viagem.
            </p>
            <div className="hero-meta">
              <span className="hero-pill">7 a 14 de maio</span>
              <span className="hero-pill">trilhos + mar + ferries</span>
            </div>
          </section>

          <div className="section-heading">
            <h2>Mapa emocional da semana</h2>
            <span className="section-chip">8 etapas</span>
          </div>
          <p className="section-copy">
            O foco aqui é manter contexto rápido: onde dormem, como se movem e qual é
            a missão principal de cada dia.
          </p>

          <div className="day-grid">
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle color="primary">Dia 1 • 7 de Maio</IonCardSubtitle>
                <IonCardTitle>Aterragem Tática</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="dormida">
                  <IonIcon icon={bedOutline} color="primary" size="large" />
                  <div>
                    Dormida: <strong>São Vicente (Casa Senador)</strong>
                  </div>
                </div>
                <div className="info-box box-voo">
                  <div className="tag tag-voo">Voo Ida</div>
                  <br />
                  <strong>EJU7581</strong> (LIS → VXE)
                  <br />
                  13:40 ▸ 16:05
                </div>
                <div className="info-box box-ok">
                  <div className="tag tag-ok">Confirmada</div>
                  <br />
                  <strong>Casa Senador (Mindelo)</strong>
                  <br />
                  Pagamento: dinheiro local (~5.952 CVE)
                </div>
                <ul className="itinerary-list">
                  <li>
                    <strong>Transporte:</strong> aluguer (100 CVE) ou táxi (1000 CVE).
                  </li>
                  <li>
                    <strong>Vibe check:</strong> pôr do sol na Praia da Laginha.
                  </li>
                  <li>
                    <strong>Jantar:</strong> Casa da Morna.
                  </li>
                </ul>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle color="primary">Dia 2 • 8 de Maio</IonCardSubtitle>
                <IonCardTitle>A Subida no Caos</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="dormida">
                  <IonIcon icon={bedOutline} color="primary" size="large" />
                  <div>
                    Dormida: <strong>Santo Antão (Lar do Viajante)</strong>
                  </div>
                </div>
                <div className="info-box box-voo">
                  <div className="tag tag-ferry">Ferry Ida</div>
                  <br />
                  <strong>Chiquinho-BL</strong> (SV → Porto Novo)
                  <br />
                  08:00 (check-in 06:30)
                </div>
                <ul className="itinerary-list">
                  <li>
                    <strong>Hiace:</strong> Estrada da Corda (~500 CVE), sair na Cova.
                  </li>
                  <li>
                    <strong>Trekking:</strong> descida até Vale do Paúl (3/4h).
                  </li>
                  <li>
                    <strong>Check-in 15:00:</strong> Ribeira Grande.
                  </li>
                </ul>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle color="primary">Dia 3 • 9 de Maio</IonCardSubtitle>
                <IonCardTitle>A Besta Costeira</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="dormida">
                  <IonIcon icon={bedOutline} color="primary" size="large" />
                  <div>
                    Dormida: <strong>Santo Antão (Lar do Viajante)</strong>
                  </div>
                </div>
                <ul className="itinerary-list">
                  <li>
                    <strong>Trilho épico 14 km:</strong> Ponta do Sol → Cruzinha.
                  </li>
                  <li>
                    <strong>Rota:</strong> Fontainhas, Corvo e Formiguinhas.
                  </li>
                </ul>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle color="primary">Dia 4 • 10 de Maio</IonCardSubtitle>
                <IonCardTitle>O Vale Vertical</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="dormida">
                  <IonIcon icon={bedOutline} color="primary" size="large" />
                  <div>
                    Dormida: <strong>Santo Antão (Lar do Viajante)</strong>
                  </div>
                </div>
                <ul className="itinerary-list">
                  <li>Ribeira da Torre (Xoxo). Banhos, cascatas e ritmo mais solto.</li>
                </ul>
                <div className="info-box box-warn">
                  <strong>Ação:</strong> avisar os donos das Las Rochas da hora exata do
                  ferry de amanhã.
                </div>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle color="primary">Dia 5 • 11 de Maio</IonCardSubtitle>
                <IonCardTitle>Chill & Transição</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="dormida">
                  <IonIcon icon={bedOutline} color="primary" size="large" />
                  <div>
                    Dormida: <strong>São Vicente (Las Rochas)</strong>
                  </div>
                </div>
                <div className="info-box box-voo">
                  <div className="tag tag-ferry">Ferry Volta</div>
                  <br />
                  <strong>Chiquinho-BL</strong> (Porto Novo → SV)
                  <br />
                  Partida: 17:00 (check-in 15:30)
                </div>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle color="primary">Dia 6 • 12 de Maio</IonCardSubtitle>
                <IonCardTitle>Tartarugas Freestyle</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="dormida">
                  <IonIcon icon={bedOutline} color="primary" size="large" />
                  <div>
                    Dormida: <strong>São Vicente (Las Rochas)</strong>
                  </div>
                </div>
                <ul className="itinerary-list">
                  <li>
                    Coletivo para São Pedro na Praça Estrela. Nadar com tartarugas e
                    procurar Deco/Nenass.
                  </li>
                </ul>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle color="primary">Dia 7 • 13 de Maio</IonCardSubtitle>
                <IonCardTitle>Mindelo Profundo</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <ul className="itinerary-list">
                  <li>Mercado de peixe, CNAD e grogue à noite.</li>
                </ul>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle color="primary">Dia 8 • 14 de Maio</IonCardSubtitle>
                <IonCardTitle>Saída do Sistema</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="info-box box-alert">
                  <div className="tag tag-voo">Voo Regresso</div>
                  <br />
                  <strong>EJU7582</strong> (VXE → LIS)
                  <br />
                  16:50 ▸ 23:00 (bagagem fecha 16:10)
                </div>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Guide;
