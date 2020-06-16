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
import { useQuery } from "react-apollo";
import { useParams } from "react-router";
import { SongListQuery } from "../graphql/queries";
import { SongType } from "../graphql/types";


function SongList() {
  const { id } = useParams()
  const { error, data, loading } = useQuery(SongListQuery, {
    variables: { id }
  })
    if (loading) {
      return <span>loading</span>;
    }
  if (error) {
      console.log(error.message);
      return <span>{error.message}</span>;
    }
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

        {data.album.songs.map((song: SongType) => (
          <Track
            id={song.id}
            lyrics={song.lyrics}
            key={song.id}
            thumbnail={
              'https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
            }
            title={song.title}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};
export default SongList;
