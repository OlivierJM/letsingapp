import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

 const Login: React.FC = () => {
  const [text, setText] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        style={{
            display: 'flex!important',
            alignContent: 'center!important',
            alignItems: 'center!important',
        }}
          >
              {/* This Grid should be centered */}
        <IonGrid>
          <IonRow >
            <IonCol >
              <IonList>
                <IonItem>
                  <IonInput
                    value={text}
                    placeholder="Enter Input"
                    onIonChange={(e) => setText(e.detail.value!)}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Floating Label</IonLabel>
                  <IonInput value={text}></IonInput>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Login