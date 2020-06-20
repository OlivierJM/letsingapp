import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonLoading
} from "@ionic/react";
import '../theme/Home.css'
import { useQuery } from "react-apollo";
import { AlbumQuery } from "../graphql/queries";

interface ImageType {
  name: string
}
interface AlbumType {
  id: string
  title: string
  createdAt: string
  thumbnail: any
}


function Home(){
  const { error, data, loading } = useQuery(AlbumQuery, {
    fetchPolicy: 'cache-first'
  })
  if (loading) {
    return <Loader showLoading={loading} message="Fetching All albums ..." />;
  }
  if (error) {
    return <span>{error.message}</span>;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Albums</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow>
            {data.albums.map((album: AlbumType) => (
              <IonCol
                size-lg="3"
                size-md="4"
                size-sm="6"
                size="6"
                key={album.id}
              >
                <IonCard
                  routerDirection="forward"
                  routerLink={`/album/${album.id}`}
                  style={{
                    height: 80,
                  }}
                >
                  <IonCardContent>{album.title}</IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

interface LoaderTypes {
  showLoading: boolean
  message: string
}

// TODO: add proper types here
export function Loader({ showLoading, message }: LoaderTypes) {
         return (
           <IonLoading
             cssClass="my-custom-class"
             isOpen={showLoading}
             message={message}
             duration={5000}
             animated
             keyboardClose
           />
         );
       }
export default Home;
