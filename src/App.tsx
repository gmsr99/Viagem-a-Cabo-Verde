import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';
import Guide from './pages/Guide';
import Docs from './pages/Docs';
import Transports from './pages/Transports';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import './index.css';

setupIonicReact({ mode: 'ios' });

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

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <span className="material-symbols-outlined">home</span>
            <span className="tab-lbl">Home</span>
          </IonTabButton>
          <IonTabButton tab="guide" href="/guide">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="tab-lbl">Guide</span>
          </IonTabButton>
          <IonTabButton tab="docs" href="/docs">
            <span className="material-symbols-outlined">description</span>
            <span className="tab-lbl">Docs</span>
          </IonTabButton>
          <IonTabButton tab="transports" href="/transports">
            <span className="material-symbols-outlined">directions_car</span>
            <span className="tab-lbl">Transports</span>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
