import React from "react";
import {
  IonItem,
  IonLabel
} from "@ionic/react";
import "../theme/Track.css";


interface TrackType {
  title: string;
  id: string;
  author: string;
  viewLyrics: () => void
}

const Track: React.FC<TrackType> = ({ title, viewLyrics, author }: TrackType) => {
  return (
    <>
      <IonItem onClick={viewLyrics}>
        <IonLabel>
          <h2>{title}</h2>
          <p>Written by {author}</p>
        </IonLabel>
      </IonItem>
    </>
  );
};

export default Track;
