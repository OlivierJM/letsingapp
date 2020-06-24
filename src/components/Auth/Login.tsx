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
  IonButton,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { Link } from "react-router-dom";

interface FieldsType {
  email: string;
  password: string;
  error: string;
}

function Login(){
  const initialFields: FieldsType = {
    email: "",
    password: "",
    error: "",
  };
  const [data, setData] = useState<FieldsType>(initialFields);

  function handleLogin() {
    // get the date
    // const { password, email } = data;
    // check if passwords are same
    // console.log({ email, userName });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList
          style={{
            marginTop: "21vh",
            marginRight: "10vw",
            marginLeft: "10vw",
          }}
        >
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              onIonChange={(e) => setData({ ...data, email: e.detail.value! })}
              value={data.email}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              onIonChange={(e) =>
                setData({ ...data, password: e.detail.value! })
              }
              value={data.password}
            ></IonInput>
          </IonItem>
          <br />
          <br />
          <IonButton onClick={handleLogin} expand="block">
            Login
          </IonButton>
          <br />
          <p style={{ textAlign: "center" }}>
            {Boolean(data.error.length) && data.error}
          </p>
          <p style={{ textAlign: "center" }}>
            register <Link to="/register">here</Link> if you do not have an
            account
          </p>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Login;
