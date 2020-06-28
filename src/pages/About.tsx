import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          style={{
            height: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginRight: "10vw",
              marginLeft: "10vw",
            }}
          >
            Letsing app was developed by{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://olivierjm.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Olivier JM 
            </a>
            <br/>
            <br/>
            You can reach me at{" "}
            <a
              style={{ textDecoration: "none" }}
              href="mailto:manolivier93@gmail.com"
            >
              manolivier93@gmail.com
            </a>
          </p>
        </div>
        <div
          style={{
            height: "10%",
            display: "flex",
            alignItems: "center",
                      justifyContent: "center",
            fontFamily: "mono"
          }}
        >
          Letsing V0.5.0-alpha
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
