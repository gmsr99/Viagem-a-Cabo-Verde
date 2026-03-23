import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar
} from '@ionic/react';
import {
  businessOutline,
  documentTextOutline,
  homeOutline,
  mapOutline,
  walletOutline
} from 'ionicons/icons';

const Docs: React.FC = () => {
  const [toastMsg, setToastMsg] = useState('');

  const openDoc = (label: string, href: string) => {
    setToastMsg(`A abrir: ${label}`);
    window.open(href, '_blank');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Documentos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="page-shell">
          <section className="page-hero">
            <div className="hero-kicker">
              <IonIcon icon={walletOutline} />
              Kit Offline
            </div>
            <h2>Reservas, recibos e bilhetes num só cais.</h2>
            <p className="hero-lead">
              Tudo o que convém abrir rápido no aeroporto, no porto ou quando a rede
              estiver mais preguiçosa.
            </p>
          </section>

          <div className="section-heading">
            <h2>Documentos essenciais</h2>
            <span className="section-chip">PWA ready</span>
          </div>
          <p className="section-copy">
            Os PDFs locais continuam disponíveis na app, o que ajuda bastante em
            contexto offline ou com sinal fraco.
          </p>

          <IonList lines="none" className="document-list">
            <IonItem
              className="document-item"
              button
              detail
              onClick={() => openDoc('Recibo EASE — Gil', 'https://shopgov4.zetesft.com/TicketGenerationForm.aspx?bsk=10845055&key=0047872E071D0E4C0D7F27F7763188D1874DB7E8')}
            >
              <IonIcon icon={documentTextOutline} slot="start" color="danger" />
              <IonLabel>
                <span className="row-eyebrow">TSA / EASE</span>
                <h2>Recibo EASE (TSA)</h2>
                <p>Gil Ribeiro • QnzD9WL9E</p>
              </IonLabel>
            </IonItem>

            <IonItem
              className="document-item"
              button
              detail
              onClick={() => openDoc('Recibo EASE — Leonor', 'https://shopgov4.zetesft.com/TicketGenerationForm.aspx?bsk=10845137&key=244F3AAF7F15A455C2E7AB2DA9080AA5F20698C3')}
            >
              <IonIcon icon={documentTextOutline} slot="start" color="danger" />
              <IonLabel>
                <span className="row-eyebrow">TSA / EASE</span>
                <h2>Recibo EASE (TSA)</h2>
                <p>Leonor Álvaro • ykX6v82Ev</p>
              </IonLabel>
            </IonItem>

            <IonItem className="document-item" button detail onClick={() => openDoc('Ferry Interilhas', '/cartao-embarque-ferry.pdf')}>
              <IonIcon icon={mapOutline} slot="start" color="primary" />
              <IonLabel>
                <span className="row-eyebrow">Interilhas</span>
                <h2>Ferry Interilhas</h2>
                <p>Ida a 8 maio • Volta a 11 maio</p>
              </IonLabel>
            </IonItem>

            <IonItem className="document-item" button detail onClick={() => openDoc('Casa Senador', '/booking-7-8-maio.pdf')}>
              <IonIcon icon={homeOutline} slot="start" color="success" />
              <IonLabel>
                <span className="row-eyebrow">Alojamento</span>
                <h2>Casa Senador</h2>
                <p>1 noite • 7 a 8 maio</p>
              </IonLabel>
            </IonItem>

            <IonItem className="document-item" button detail onClick={() => openDoc('Lar do Viajante', '/lar_do_viajante_confirmacao.pdf')}>
              <IonIcon icon={homeOutline} slot="start" color="success" />
              <IonLabel>
                <span className="row-eyebrow">Alojamento</span>
                <h2>Lar do Viajante</h2>
                <p>3 noites • 8 a 11 maio</p>
              </IonLabel>
            </IonItem>

            <IonItem className="document-item" button detail onClick={() => openDoc('Apt. Las Rochas', '/booking-confirmation.pdf')}>
              <IonIcon icon={businessOutline} slot="start" color="success" />
              <IonLabel>
                <span className="row-eyebrow">Alojamento</span>
                <h2>Apt. Las Rochas</h2>
                <p>3 noites • 11 a 14 maio</p>
              </IonLabel>
            </IonItem>
          </IonList>

          <p className="support-note">
            Os links externos abrem online; os PDFs locais ficam acessíveis a partir da
            memória do telefone.
          </p>
        </div>

        <IonToast
          isOpen={!!toastMsg}
          message={toastMsg}
          duration={1800}
          position="bottom"
          onDidDismiss={() => setToastMsg('')}
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Docs;
