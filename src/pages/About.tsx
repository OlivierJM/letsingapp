import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";

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
          <span>
            <h4>
              This app was developed by{" "}
              <a
                style={{ textDecoration: "none" }}
                href="https://olivierjm.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Olivier JM
              </a>
            </h4>
            You can reach me at{" "}
            <a
              style={{ textDecoration: "none" }}
              href="mailto:manolivier93@gmail.com"
            >
              manolivier93@gmail.com
            </a>{" "}
          </span>
        </div>
        <div
          style={{
            height: "10%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Version 0.5.0-alpha
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
