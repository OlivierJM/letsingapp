import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {  homeOutline, informationCircleOutline, personCircleOutline, peopleCircleOutline } from 'ionicons/icons';
import loadable from '@loadable/component'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import PlayerMusic from './pages/TrackPlayer';
import About from './pages/About';

const Home = loadable(() => import('./pages/Home'))
const Songs = loadable(() => import('./pages/Songs'))
const Settings = loadable(() => import('./pages/Profile'))
const MembersList = loadable(() => import('./pages/MembersList'))

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/album/:id" component={Songs} exact={true} />
          <Route path="/song/:id" component={Songs} exact={true} />
          <Route path="/profile" component={Settings} />
          <Route path="/player" component={PlayerMusic} />
          <Route path="/members" component={MembersList} />
          <Route path="/about" component={About} />

          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <Tabs />
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

const Tabs: React.FC = () => (
  <IonTabBar slot="bottom">
    <IonTabButton tab="Home" href="/home">
      <IonIcon icon={homeOutline} />
      <IonLabel>Home</IonLabel>
    </IonTabButton>
    <IonTabButton tab="Songs" href="/members">
      <IonIcon icon={peopleCircleOutline} />
      <IonLabel>Members</IonLabel>
    </IonTabButton>
    <IonTabButton tab="Profile" href="/profile">
      <IonIcon icon={personCircleOutline} />
      <IonLabel>Profile</IonLabel>
    </IonTabButton>
    <IonTabButton tab="Settings" href="/about">
      <IonIcon icon={informationCircleOutline} />
      <IonLabel>About</IonLabel>
    </IonTabButton>
  </IonTabBar>
) 

export default App;
