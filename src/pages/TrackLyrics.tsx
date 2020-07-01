import React from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import { IonPage, IonContent } from "@ionic/react";
import { useQuery } from "react-apollo";
import { SongLyricsQuery } from "../graphql/queries";
import { useParams } from "react-router";
import { Loader } from "./Home";
import Error from "../components/Error";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  lyrics: string;
  songId?: string;
}

export default function TrackLyrics() {
  const { id } = useParams();
  const { error, data, loading } = useQuery(SongLyricsQuery, {
    variables: { id },
    fetchPolicy: "cache-first",
  });
  if (loading) {
    return <Loader showLoading={loading} message="Fetching All Songs ..." />;
  }
  if (error) {
    return <Error message={"Couldn't fetch songs"} />;
  }

  return (
    <IonPage>
      <IonContent>
        <LyricsView
          title={data.song.title}
          lyrics={data.song.lyrics}
          songId={id}
        />
      </IonContent>
    </IonPage>
  );
}

export function LyricsView({ title, lyrics, songId }: Props) {
  return (
    <div className="markdown-body" style={{ margin: 30 }}>
      <h4 className="ion-text-center">{title}</h4>
      <ReactMarkdown source={lyrics} />
      <br />
      <p className="ion-text-center">
        Is the lyrics wrong? Click{" "}
        <Link
          to={{
            pathname: `/song/edit/${songId}`,
            state: { lyrics, title },
          }}
        >
          here
        </Link>{" "}
        to edit
      </p>
    </div>
  );
}