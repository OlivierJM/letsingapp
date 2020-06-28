import React, { useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import '../theme/Profile.css'
import { AuthContext } from '../components/Auth/AuthContext';

function Profile() {
  const { user, loggedIn } = useContext(AuthContext)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <p>
            {
              loggedIn ? `You are logged in as ${user.username} with ${user.email}` : `You are not logged` 
            }
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
