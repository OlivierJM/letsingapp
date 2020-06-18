import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import '../theme/Profile.css'
import ComingSoon from '../components/ComingSoon';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ComingSoon />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
