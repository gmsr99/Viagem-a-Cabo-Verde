import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, map, documentText, bus } from 'ionicons/icons';

import Home from './pages/Home';
import Guide from './pages/Guide';
import Docs from './pages/Docs';
import Transports from './pages/Transports';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './index.css';

setupIonicReact({
  mode: 'ios' // Forçamos o modo iOS para uma UI mais limpa e fluída
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" exact={true}><Home /></Route>
          <Route path="/guide" exact={true}><Guide /></Route>
          <Route path="/docs" exact={true}><Docs /></Route>
          <Route path="/transports" exact={true}><Transports /></Route>
          <Route path="/" exact={true}><Redirect to="/home" /></Route>
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom" className="app-tabbar">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Início</IonLabel>
          </IonTabButton>
          <IonTabButton tab="guide" href="/guide">
            <IonIcon aria-hidden="true" icon={map} />
            <IonLabel>Itinerário</IonLabel>
          </IonTabButton>
          <IonTabButton tab="docs" href="/docs">
            <IonIcon aria-hidden="true" icon={documentText} />
            <IonLabel>Documentos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="transports" href="/transports">
            <IonIcon aria-hidden="true" icon={bus} />
            <IonLabel>Transportes</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
