import React from 'react';
import { Route } from 'react-router-dom';
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
import {  homeOutline, informationCircleOutline, personCircleOutline, musicalNotesOutline } from 'ionicons/icons';
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
import LyricsEdit from './pages/LyricsEdit';
import Landing from './pages/Landing';

const Home = loadable(() => import('./pages/Home'))
const Songs = loadable(() => import('./pages/Songs'))
const Settings = loadable(() => import('./pages/Profile'))
const SongsList = loadable(() => import('./pages/SongsList'))
const TrackLyrics = loadable(() => import('./pages/TrackLyrics'))
const Register = loadable(() => import('./components/Auth/Register'))
const Login = loadable(() => import('./components/Auth/Login'))

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/album/:id" component={Songs} exact={true} />
          <Route path="/song/:id" component={Songs} exact={true} />
          <Route path="/song/edit/:id" component={LyricsEdit} exact={true} />
          <Route path="/profile" component={Settings} />
          <Route path="/player" component={PlayerMusic} />
          <Route path="/songs" exact component={SongsList} />
          <Route path="/songs/:id" exact component={TrackLyrics} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />

          <Route path="/" component={Landing} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Songs" href="/songs">
            <IonIcon icon={musicalNotesOutline} />
            <IonLabel>All Songs</IonLabel>
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
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
