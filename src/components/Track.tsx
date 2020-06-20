import React from "react";
import {
  IonItem,
  IonLabel
} from "@ionic/react";
import "../theme/Track.css";


interface TrackType {
  title: string;
  id: string;
  viewLyrics: () => void
}

const Track: React.FC<TrackType> = ({ title, viewLyrics }: TrackType) => {
  return (
    <>
      <IonItem onClick={viewLyrics}>
        <IonLabel>
          <h2>{title}</h2>
        </IonLabel>
      </IonItem>
    </>
  );
};

export default Track;
