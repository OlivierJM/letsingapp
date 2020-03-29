import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
  IonCol
} from "@ionic/react";
import "../theme/Favourites.css";

const Favourites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favourites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Favourites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCol className="ion-justify-content-between">
          <IonContent>
            <IonList>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i: number) => (
                <IonItem key={i}>
                  <IonAvatar slot="start">
                    <IonImg alt='to be play button' src="https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                  </IonAvatar>
                  <IonLabel>
                    <h2>{i} Song on the playlist</h2>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonContent>
        </IonCol>
      </IonContent>
    </IonPage>
  );
};
export default Favourites;
