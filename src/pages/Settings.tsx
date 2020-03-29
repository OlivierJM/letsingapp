import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Track from '../components/Track';
import '../theme/Settings.css'

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Track thumbnail='cover' title='Title of the song' /> 
        <Track thumbnail='cover' title='Title of the song' /> 
        <Track thumbnail='cover' title='Title of the song' /> 
        <Track thumbnail='cover' title='Title of the song' /> 
        <Track thumbnail='cover' title='Title of the song' /> 
      </IonContent>
    </IonPage>
  );
};

export default Settings;
