import React, { useState } from "react";
import {
  IonItem,
  IonLabel,
  IonPopover,
  IonButton,
  IonIcon,
  IonList,
} from "@ionic/react";
import "../theme/Track.css";
import { ellipsisVerticalOutline, createOutline, readerOutline } from "ionicons/icons";
import { useHistory } from "react-router";

interface TrackType {
  title: string;
  author: string;
  viewLyrics: () => void;
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
  // onClick={viewLyrics}
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
                  // @ts-ignore
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  viewLyrics();
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
                    // @ts-ignore
                    key: Math.random() + songId,
                  });
                  setShowPopover({ open: false, event: undefined });
                }}
              >
                <IonLabel>
                  <IonIcon style={{ marginBottom: -2 }} icon={createOutline} />{" "}
                  Edit Song
                </IonLabel>
              </IonItem>
            </IonList>
          </IonPopover>

          <IonButton
            style={{ display: "inline-block", float: "right" }}
            fill="clear"
            onClick={(e) =>
              setShowPopover({ open: true, event: e.nativeEvent })
            }
          >
            <IonIcon icon={ellipsisVerticalOutline} />
          </IonButton>
        </IonLabel>
      </IonItem>
    </>
  );
};

export default Track;
