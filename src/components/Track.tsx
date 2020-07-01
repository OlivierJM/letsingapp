import React, { useState } from "react";
import {
  IonItem,
  IonLabel,
  IonPopover,
  IonButton,
  IonIcon,
  IonList,
  IonActionSheet,
} from "@ionic/react";
import "../theme/Track.css";
import {
  ellipsisVerticalOutline,
  createOutline,
  readerOutline,
  shareSocialOutline,
  close,
  logoFacebook,
  logoWhatsapp,
  logoTwitter,
} from "ionicons/icons";
import { useHistory } from "react-router";

interface TrackType {
  title: string;
  author: string;
  viewLyrics: () => {};
  songId?: string;
  lyrics?: string;
}

const Track: React.FC<TrackType> = ({
  title,
  viewLyrics,
  author,
  songId,
  lyrics,
}: TrackType) => {
  const [showPopover, setShowPopover] = useState<{
    open: boolean;
    event: Event | undefined;
  }>({
    open: false,
    event: undefined,
  });
  const history = useHistory();
  const [showActionSheet, setShowActionSheet] = useState<boolean>(false);
  const currentUrl = window.location.href
  console.log(`${currentUrl}/${songId}`);
  return (
    <>
      <IonItem>
        <IonLabel>
          <div style={{ display: "inline-block" }}>
            <h2>{title}</h2>
            <p>Written by {author}</p>
          </div>

          <IonPopover
            isOpen={showPopover.open}
            event={showPopover.event}
            onDidDismiss={(e) =>
              setShowPopover({ open: false, event: undefined })
            }
          >
            <IonList>
              <IonItem
                onClick={() => {
                  viewLyrics();
                  setShowPopover({ open: false, event: undefined });
                }}
              >
                <IonLabel>
                  <IonIcon style={{ marginBottom: -2 }} icon={readerOutline} />{" "}
                  View Lyrics
                </IonLabel>
              </IonItem>

              <IonItem
                onClick={() => {
                  history.push({
                    pathname: `/song/edit/${songId}`,
                    state: { lyrics, title },
                  });
                  setShowPopover({ open: false, event: undefined });
                }}
              >
                <IonLabel>
                  <IonIcon style={{ marginBottom: -2 }} icon={createOutline} />{" "}
                  Edit Song
                </IonLabel>
              </IonItem>
              <IonItem
                onClick={() => {
                  setShowActionSheet(true);
                  setShowPopover({ open: false, event: undefined });
                }}
              >
                <IonLabel>
                  <IonIcon
                    style={{ marginBottom: -2 }}
                    icon={shareSocialOutline}
                  />{" "}
                  Share Song
                </IonLabel>
              </IonItem>
            </IonList>
          </IonPopover>

          <IonButton
            style={{ display: "inline-block", float: "right", fontSize: 18 }}
            fill="clear"
            onClick={(e) =>
              setShowPopover({ open: true, event: e.nativeEvent })
            }
          >
            <IonIcon icon={ellipsisVerticalOutline} />
          </IonButton>
        </IonLabel>
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          cssClass="my-custom-class"
          buttons={[
            {
              text: "Facebook",
              icon: logoFacebook,
              handler: () => {
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}/${songId}`
                );
              },
            },
            {
              text: "Whatsapp",
              icon: logoWhatsapp,
              handler: () => {
               window.open(`https://wa.me/?text=${currentUrl}/${songId}`);
              },

            },
            {
              text: "Twitter",
              icon: logoTwitter,
              handler: () => {
                window.open(
                  `https://twitter.com/intent/tweet?text=${currentUrl}/${songId}`
                );
              },
            },
            {
              text: "Cancel",
              icon: close,
              role: "cancel",
              handler: () => {
                console.log("Cancel clicked");
              },
            },
          ]}
        ></IonActionSheet>
      </IonItem>
    </>
  );
};

export default Track;
