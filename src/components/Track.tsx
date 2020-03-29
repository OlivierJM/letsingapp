import React, { useState } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonIcon,
  IonAvatar,
  IonImg,
  IonActionSheet
} from "@ionic/react";
import "../theme/Track.css";
import {
  heartOutline,
  ellipsisVerticalOutline,
  heartDislikeOutline,
  trash,
  share,
  playCircleOutline,
  heart,
  close
} from "ionicons/icons";

interface TrackType {
  title: string;
  thumbnail: string;
}

const Track: React.FC<TrackType> = ({ title, thumbnail }: TrackType) => {
  const [isFave, setFave] = useState<boolean>(false);
  const [showActionSheet, setShowActionSheet] = useState(false);

  function handleFavourite() {
    setFave(!isFave);
  }
  return (
    <>
      <IonItem>
        <IonGrid>
          <IonRow>
            <IonCol size="2">
              <IonAvatar slot="start">
                <IonImg alt={title} src={thumbnail} />
              </IonAvatar>
            </IonCol>
            <IonCol size="6">{title}</IonCol>
            <IonCol size="2">
              <IonIcon
                icon={isFave ? heartOutline : heartDislikeOutline}
                onClick={handleFavourite}
              />
            </IonCol>
            <IonCol size="2">
              <IonIcon
                onClick={() => setShowActionSheet(true)}
                icon={ellipsisVerticalOutline}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[
          {
            text: "Delete",
            role: "destructive",
            icon: trash,
            handler: () => {
              console.log("Delete clicked");
            }
          },
          {
            text: "Share",
            icon: share,
            handler: () => {
              console.log("Share clicked");
            }
          },
          {
            text: "Play (open modal)",
            icon: playCircleOutline,
            handler: () => {
              console.log("Play clicked");
            }
          },
          {
            text: "Favorite",
            icon: heart,
            handler: () => {
              console.log("Favorite clicked");
            }
          },
          {
            text: "Cancel",
            icon: close,
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            }
          }
        ]}
      ></IonActionSheet>
    </>
  );
};

export default Track;
