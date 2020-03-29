import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonProgressBar
} from "@ionic/react";
import animals from "../images/animals0.jpg";
import "../theme/Track.css";
import {
  playOutline,
  playForwardOutline,
  playBackOutline
} from "ionicons/icons";

const Player: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Player</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg
          alt="album cover"
          style={{
            height: "60vh",
            marginLeft: 60,
            marginRight: 60
          }}
          src={animals}
        />
        <div className="text">
          <IonText className="ion-text-center">
            <h3>Olivier</h3>
          </IonText>
          <IonText color="light" className="ion-text-center">
            <h4>How far from home</h4>
          </IonText>
        </div>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonProgressBar color="secondary" value={0.5}></IonProgressBar>
              <br />
            </IonCol>
          </IonRow>
          <IonRow
            style={{
              marginLeft: '15%',
              marginRight: '-12%'
            }}
          >
            <IonCol size="4">
              <IonIcon icon={playBackOutline} />
            </IonCol>

            <IonCol size="4">
              <IonIcon icon={playOutline} />
            </IonCol>
            <IonCol size="4">
              <IonIcon icon={playForwardOutline} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Player;
