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
  IonImg,
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
    return <Loader showLoading={loading} />;
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
                >
                  <IonImg
                    alt="album cover"
                    src={
                      "https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    }
                  />
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

// TODO: add proper types here
export function Loader({ showLoading}: any) {
         return (
           <IonLoading
             cssClass="my-custom-class"
             isOpen={showLoading}
             message={"Please wait..."}
             duration={5000}
             animated
             keyboardClose
           />
         );
       }
export default Home;
