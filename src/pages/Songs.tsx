import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButton,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import "../theme/Favourites.css";
import Track from "../components/Track";
import { useQuery } from "react-apollo";
import { useParams } from "react-router";
import { SongListQuery } from "../graphql/queries";
import { SongType } from "../graphql/types";
import ReactMarkdown from 'react-markdown'
import "github-markdown-css";
import { Loader } from "./Home";

function SongList() {
  const { id } = useParams()
  const [showModal, setShowModal] = useState(false);
  const [lyrics, setLyrics] = useState("")
  const [_title, setTitle] = useState("")
  const { error, data, loading } = useQuery(SongListQuery, {
    variables: { id },
    fetchPolicy: "cache-first"
  })
    if (loading) {
      return <Loader showLoading={loading} message="Fetching Songs" />;
    }
  if (error) {
      return <span>{error.message}</span>;
  }
  function openModal(lyrics: string, title: string) {
    setLyrics(lyrics)
    setTitle(title)
    setShowModal(true)
    return
  }

  return (
    <IonPage>
      <IonModal isOpen={showModal} cssClass="my-custom-class">
        <div className="markdown-body" style={{ margin: 30 }}>
          <h4 style={{ textAlign: "center" }}>{_title}</h4>
          <ReactMarkdown source={lyrics} />
        </div>
        <IonButton onClick={() => setShowModal(false)}>Close Lyrics</IonButton>
      </IonModal>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Song List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Songs</IonTitle>
          </IonToolbar>
        </IonHeader>

        {data.album.songs.map((song: SongType) => (
          <Track
            id={song.id}
            key={song.id}
            author={song.author}
            viewLyrics={() => openModal(song.lyrics, song.title)}
            title={song.title}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};
export default SongList;
