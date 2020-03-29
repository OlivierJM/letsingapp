import React, { useState } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonIcon
} from "@ionic/react";
import '../theme/Track.css'
import { heartOutline, ellipsisVerticalOutline, heartDislikeOutline } from "ionicons/icons";

interface TrackType {
    title: string;
    thumbnail: string
}

const Track: React.FC<TrackType> = ({ title, thumbnail }: TrackType) => {
    const [isFave, setFave] = useState<boolean>(false)
    function handleFavourite(){
        setFave(!isFave)
    }
    return (
        <IonItem>
            <IonGrid>
                <IonRow>
                    <IonCol size="2" >
                        {thumbnail}
                    </IonCol>
                    <IonCol size="6" >
                        {title}
                    </IonCol>
                    <IonCol size="2" >
                        <IonIcon icon={isFave ? heartOutline : heartDislikeOutline } onClick={handleFavourite} /> 
                    </IonCol>
                    <IonCol size="2" >
                    <IonIcon icon={ellipsisVerticalOutline} />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonItem>
    )
}

export default Track