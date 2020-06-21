import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButton,
  IonRefresher,
  IonRefresherContent,
} from "@ionic/react";
import "../theme/Favourites.css";
import { useQuery } from "react-apollo";
import { useParams } from "react-router";
import { SongsListQuery } from "../graphql/queries";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import { Loader } from "./Home";
import { SongDataList } from "./Songs";
import Error from "../components/Error";
import { RefresherEventDetail } from "@ionic/core";

function SongsList() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [lyrics, setLyrics] = useState("");
  const [_title, setTitle] = useState("");

  const { error, data, loading, refetch } = useQuery(SongsListQuery, {
    variables: { id },
    fetchPolicy: "cache-first",
  });
  if (loading) {
    return <Loader showLoading={loading} message="Fetching All Songs ..." />;
  }
  if (error) {
    return <Error message={"Couldn't fetch songs"} />;
  }

  function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    refetch();
    setTimeout(() => {
      event.detail.complete();
    }, 2000);
  }
  function openModal(lyrics: string, title: string) {
    setLyrics(lyrics);
    setTitle(title);
    setShowModal(true);
    return;
  }
  return (
    <IonPage>
      <IonModal isOpen={showModal} cssClass="my-custom-class">
        <div className="markdown-body" style={{ margin: 30 }}>
          <h4 className="ion-text-center">{_title}</h4>
          <ReactMarkdown source={lyrics} />
        </div>
        <IonButton onClick={() => setShowModal(false)}>Close Lyrics</IonButton>
      </IonModal>
      <IonHeader>
        <IonToolbar>
          <IonTitle>All Songs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher
          slot="fixed"
          onIonRefresh={doRefresh}
          pullFactor={0.5}
          pullMin={100}
          pullMax={200}
        >
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <SongDataList data={data.songs} openModal={openModal} />
      </IonContent>
    </IonPage>
  );
}
export default SongsList;
