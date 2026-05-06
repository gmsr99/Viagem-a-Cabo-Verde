import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';

const EASE_DOCS = [
  {
    label: 'Recibo EASE (TSA) — Gil Ribeiro',
    sub: 'Gil Ribeiro · QnzD9WL9E',
    href: 'https://shopgov4.zetesft.com/TicketGenerationForm.aspx?bsk=10845055&key=0047872E071D0E4C0D7F27F7763188D1874DB7E8',
  },
  {
    label: 'Recibo EASE (TSA) — Leonor Álvaro',
    sub: 'Leonor Álvaro · ykX6v82Ev',
    href: 'https://shopgov4.zetesft.com/TicketGenerationForm.aspx?bsk=10845137&key=244F3AAF7F15A455C2E7AB2DA9080AA5F20698C3',
  },
];

type ViewerDoc = { label: string; href: string };

const Docs: React.FC = () => {
  const [toast, setToast] = useState('');
  const [viewer, setViewer] = useState<ViewerDoc | null>(null);

  const openDoc = (label: string, href: string) => {
    setViewer({ label, href });
  };

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
          <div className="docs-hero">
            <div className="docs-offline-badge">
              <span className="material-symbols-outlined">cloud_off</span>
              Offline Kit
            </div>
            <h1 className="docs-title">Documentos</h1>
            <p className="docs-subtitle">Os teus documentos de viagem essenciais, disponíveis mesmo sem sinal.</p>
          </div>

          {/* Official Registry */}
          <div className="docs-section">
            <div className="docs-section-header">
              <span className="docs-section-label">Official Registry</span>
            </div>

            {EASE_DOCS.map((doc, i) => (
              <a
                key={i}
                className="official-link"
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setToast(`A abrir: ${doc.label}`)}
              >
                <div className="official-link-inner">
                  <div className="official-link-left">
                    <div className="official-link-icon">
                      <span className="material-symbols-outlined">receipt_long</span>
                    </div>
                    <div>
                      <div className="official-link-title">{doc.label}</div>
                      <div className="official-link-sub">{doc.sub}</div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined arrow">open_in_new</span>
                </div>
              </a>
            ))}
          </div>

          {/* Tickets & Bookings */}
          <div className="docs-section">
            <div className="docs-section-header">
              <span className="docs-section-label">Tickets &amp; Bookings</span>
              <span className="docs-files-badge">4 FILES</span>
            </div>

            <div className="bento-grid">
              {/* Ferry — full width */}
              <div
                className="bento-card bento-card-ferry bento-full"
                onClick={() => openDoc('Ferry Interilhas', '/cartao-embarque-ferry.pdf')}
              >
                <div className="top">
                  <span className="material-symbols-outlined main">directions_boat</span>
                  <span className="material-symbols-outlined check">download_done</span>
                </div>
                <div>
                  <div className="bento-card-title">Cartão de Embarque Ferry</div>
                  <div className="bento-card-sub">Interilhas · Ida 8 maio · Volta 11 maio</div>
                </div>
                <div className="bento-view-btn">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
              </div>

              {/* Casa Senador */}
              <div
                className="bento-card bento-card-hotel"
                onClick={() => openDoc('Casa Senador', '/booking-7-8-maio.pdf')}
              >
                <div className="bento-hotel-icon">
                  <span className="material-symbols-outlined">hotel</span>
                </div>
                <div>
                  <div className="bento-card-date">Booking 7–8 maio</div>
                  <div className="bento-card-name">Casa Senador</div>
                </div>
                <div className="bento-card-meta">
                  <span className="bento-card-size">PDF</span>
                  <span className="material-symbols-outlined">open_in_full</span>
                </div>
              </div>

              {/* Lar do Viajante */}
              <div
                className="bento-card bento-card-hotel"
                onClick={() => openDoc('Lar do Viajante', '/lar_do_viajante_confirmacao.pdf')}
              >
                <div className="bento-hotel-icon">
                  <span className="material-symbols-outlined">assignment_turned_in</span>
                </div>
                <div>
                  <div className="bento-card-date">Lar do Viajante</div>
                  <div className="bento-card-name">3 noites · 8–11 maio</div>
                </div>
                <div className="bento-card-meta">
                  <span className="bento-card-size">PDF</span>
                  <span className="material-symbols-outlined">open_in_full</span>
                </div>
              </div>

              {/* Las Rochas — full width */}
              <div
                className="bento-card bento-full bento-card-rochas"
                onClick={() => openDoc('Apt. Las Rochas', '/booking-confirmation.pdf')}
              >
                <div style={{ width: 54, height: 54, borderRadius: 12, background: '#2a2a2a', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ color: '#adc6ff', fontSize: '24px' }}>apartment</span>
                </div>
                <div className="bento-rochas-info">
                  <div className="bento-rochas-title">Booking Las Rochas</div>
                  <div className="bento-rochas-sub">3 noites · 11–14 maio · Stay Voucher &amp; Directions</div>
                </div>
                <div className="bento-rochas-chevron">
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              </div>
            </div>
          </div>

          <p style={{ fontSize: '0.83rem', color: '#414755', lineHeight: 1.6, marginTop: 8 }}>
            Os links externos abrem online; os PDFs locais ficam acessíveis a partir da memória do telefone.
          </p>

        </div>

        {/* Toast */}
        {toast && (
          <div style={{
            position: 'fixed',
            bottom: '90px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 60,
            width: 'calc(100% - 48px)',
            maxWidth: '380px',
          }}>
            <div style={{
              background: '#353534',
              color: '#e5e2e1',
              padding: '12px 16px',
              borderRadius: '14px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid rgba(65,71,85,0.3)',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#adc6ff', boxShadow: '0 0 8px #adc6ff', flexShrink: 0 }} />
              <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{toast}</span>
            </div>
          </div>
        )}
      </IonContent>

      {/* PDF Viewer Overlay */}
      {viewer && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          background: '#1a1a1a',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Viewer Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 16px',
            paddingTop: 'max(12px, env(safe-area-inset-top))',
            background: '#222',
            borderBottom: '1px solid #333',
            flexShrink: 0,
          }}>
            <button
              onClick={() => setViewer(null)}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                borderRadius: 10,
                width: 38,
                height: 38,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <span className="material-symbols-outlined" style={{ color: '#e5e2e1', fontSize: 22 }}>arrow_back</span>
            </button>
            <span style={{
              color: '#e5e2e1',
              fontSize: '0.9rem',
              fontWeight: 600,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>{viewer.label}</span>
          </div>

          {/* PDF iframe */}
          <iframe
            src={viewer.href}
            style={{ flex: 1, border: 'none', width: '100%', background: '#1a1a1a' }}
            title={viewer.label}
          />
        </div>
      )}
    </IonPage>
  );
};

export default Docs;
