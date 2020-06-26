// @ts-nocheck

import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonTextarea,
  IonList,
  IonButton,
  IonSpinner,
} from "@ionic/react";
import { useLocation } from "react-router";

const LyricsEdit: React.FC = () => {
    const { state } = useLocation()
    const [lyrics, setText] = useState<string>(state?.lyrics)  
  
  function saveLyrics() {
    
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit Lyrics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList
          style={{
            marginTop: "10vh",
            marginRight: "8vw",
            marginLeft: "8vw",
          }}
        >
          <IonItem>
            <br />
            <IonTextarea
              rows={20}
              cols={20}
              placeholder="Type your lyrics here"
              value={lyrics}
              onIonChange={(e) => setText(e.detail.value!)}
            ></IonTextarea>
          </IonItem>
          <br />
          <br />
          <IonButton onClick={saveLyrics} expand="block">
            {'data.loading' ? <IonSpinner name="dots" /> : "Save Lyrics"}
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default LyricsEdit;
