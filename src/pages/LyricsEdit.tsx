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
  IonLabel,
  IonInput,
  IonToast,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { useLocation, useParams } from "react-router";
import { useMutation } from "react-apollo";
import { SongEditMutation } from "../graphql/mutations";

interface SongType {
  lyrics: string;
  title: string;
  loading: boolean;
  error: string;
  isDone: boolean;
  showToast: boolean;
}


function LyricsEdit(){
  const { state } = useLocation()
  const { id } = useParams()

  const initialFields: SongType = {
    lyrics: state?.lyrics,
    title: state?.title,
    loading: false,
    error: "",
    isDone: false,
    showToast: false
  };

    const [data, setData] = useState<SongType>(initialFields)  
  // const [title, setTitle] = useState<string>(state?.title)
  // const [loading, setLoading] = useState<boolean>(false)
    const [updateSong] = useMutation(SongEditMutation)
  
  function saveLyrics() {
    setData({ ...data, loading: true });
    updateSong({
      variables: { id, lyrics: data.lyrics, title: data.title },
    })
      .then(() => {
        setData({ ...data, loading: false, showToast: true,  });
      })
      .catch((err) => {
         setData({ ...data, loading: false, error: err.message });
      });
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Edit Lyrics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonToast
          isOpen={data.showToast}
          onDidDismiss={() => setData({ ...data, showToast: false })}
          message="Your changes have been saved."
          duration={1000}
        />
        <IonList
          style={{
            marginTop: "10vh",
            marginRight: "8vw",
            marginLeft: "8vw",
          }}
        >
          <IonItem>
            <IonLabel position="floating">Song Title</IonLabel>
            <IonInput
              onIonChange={(e) => setData({ ...data, title: e.detail.value! })}
              value={data.title}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Song Lyrics</IonLabel>
            <IonTextarea
              rows={20}
              cols={20}
              placeholder="Type your lyrics here"
              value={data.lyrics}
              onIonChange={(e) => setData({ ...data, lyrics: e.detail.value! })}
            ></IonTextarea>
          </IonItem>
          <br />
          <br />
          <IonButton
            disabled={data.loading}
            onClick={saveLyrics}
            expand="block"
          >
            {data.loading ? <IonSpinner name="dots" /> : "Save Lyrics"}
          </IonButton>
          <br />
          <p style={{ textAlign: "center", color: "red" }}>
            {Boolean(data.error.length) && data.error}
          </p>
          <p style={{ textAlign: "center" }}></p>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default LyricsEdit;
