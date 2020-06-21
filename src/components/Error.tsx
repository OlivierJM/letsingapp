import React from "react";
import { IonPage, IonIcon, IonText } from "@ionic/react";
// import '../theme/About.css'
import { cloudOfflineOutline } from "ionicons/icons";

interface ErrorType {
  message: string;
}

function Error({ message }: ErrorType) {
  return (
    <IonPage>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <IconText message={message} />
      </div>
    </IonPage>
  );
}

function IconText({ message }: ErrorType) {
  return (
    <div>
      <IonIcon
        icon={cloudOfflineOutline}
        style={{
          fontSize: "8em",
          marginLeft: "24%",
        }}
      />
      <br />
      <IonText className="ion-text-center">
        <h4>{message}</h4>
      </IonText>
      <IonText className="ion-text-center">
        <p>
          {"Check your internet connection "}
          <span className="ion-text-center" role="img" aria-label="sad face">
            😥
          </span>
        </p>
      </IonText>
    </div>
  );
}

export default Error;
