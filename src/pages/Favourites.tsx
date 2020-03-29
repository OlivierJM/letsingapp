import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "../theme/Favourites.css";
import Track from "../components/Track";

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

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i: number) => (
          <Track
            key={i}
            thumbnail={
              'https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
            }
            title={`${i} Song Title`}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};
export default Favourites;
