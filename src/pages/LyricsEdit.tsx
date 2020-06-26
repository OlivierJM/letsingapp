// @ts-nocheck

import React, { useState, useContext } from "react";
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
import { AuthContext } from "../components/Auth/AuthContext";
import { Link } from "react-router-dom";
interface SongType {
  lyrics: string;
  title: string;
  loading: boolean;
  error: string;
  isDone: boolean;
  showToast: boolean;
}

function LyricsEdit() {
  const { state } = useLocation();
  const { id } = useParams();

  const initialFields: SongType = {
    lyrics: state?.lyrics,
    title: state?.title,
    loading: false,
    error: "",
    isDone: false,
    showToast: false,
  };

  const [data, setData] = useState<SongType>(initialFields);
  const [updateSong] = useMutation(SongEditMutation);

  const { loggedIn } = useContext(AuthContext);

  function saveLyrics() {
    setData({ ...data, loading: true });
    updateSong({
      variables: { id, lyrics: data.lyrics, title: data.title },
    })
      .then(() => {
        setData({ ...data, loading: false, showToast: true });
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
              disabled={!loggedIn}
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
              disabled={!loggedIn}
              onIonChange={(e) => setData({ ...data, lyrics: e.detail.value! })}
            ></IonTextarea>
          </IonItem>
          <br />
          <br />
          <IonButton
            disabled={data.loading || !loggedIn}
            onClick={saveLyrics}
            expand="block"
          >
            {data.loading ? <IonSpinner name="dots" /> : "Save Lyrics"}
          </IonButton>
          <br />
          <p style={{ textAlign: "center", color: "red" }}>
            {Boolean(data.error.length) && data.error}
          </p>
          {!loggedIn && (
            <p style={{ textAlign: "center" }}>
              Click <Link to="/login">here</Link> to login before updating
              lyrics or click <a href={window.location.href}>here</a> to refresh
              the page if you logged in.
            </p>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default LyricsEdit;
