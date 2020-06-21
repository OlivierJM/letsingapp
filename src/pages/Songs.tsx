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
  IonSearchbar,
  IonRefresher,
  IonRefresherContent,
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
import Error from "../components/Error";
import { RefresherEventDetail } from "@ionic/core";

function SongList() {
  const { id } = useParams()
  const [showModal, setShowModal] = useState(false);
  const [lyrics, setLyrics] = useState("")
  const [_title, setTitle] = useState("")
  const { error, data, loading, refetch } = useQuery(SongListQuery, {
    variables: { id },
    fetchPolicy: "cache-first"
  })
  if (loading) {
    return <Loader showLoading={loading} message="Fetching Songs" />;
  }
  if (error) {
      return <Error message={'Couldn\'t fetch songs'} />
  }
  function openModal(lyrics: string, title: string) {
    setLyrics(lyrics)
    setTitle(title)
    setShowModal(true)
    return
  }

  function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    refetch()
    setTimeout(() => {
      event.detail.complete();
    }, 2000);
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
        <IonRefresher
          slot="fixed"
          onIonRefresh={doRefresh}
          pullFactor={0.5}
          pullMin={100}
          pullMax={200}
        >
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <SongDataList data={data.album.songs} openModal={openModal} />
      </IonContent>
    </IonPage>
  );
};

export function SongDataList({ data, openModal }: any) {
  const [searchText, setSearchText] = useState("");
  const results = data.filter((song: SongType) => {
    return (
      song.title.toLowerCase().includes(searchText.toLowerCase()) ||
      song.lyrics.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  return (
    <>
      <IonSearchbar
        value={searchText}
        onIonChange={(e) => setSearchText(e.detail.value!)}
        showCancelButton="focus"
        animated
        debounce={500}
        placeholder="Search by song title or song content"
      ></IonSearchbar>

      {results.length ? (
        results.map((song: SongType) => (
          <Track
            key={song.id}
            author={song.author}
            viewLyrics={() => openModal(song.lyrics, song.title)}
            title={song.title}
          />
        ))
      ) : (
        <p className="ion-text-center">Nothing found for {searchText}</p>
      )}
    </>
  );
}


export default SongList;
