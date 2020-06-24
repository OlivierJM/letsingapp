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
  IonText,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { Link } from "react-router-dom";

interface FieldsType {
  userName: string;
  email: string;
  password: string;
  password2: string;
  error: string;
}

function Register(){
  const initialFields: FieldsType = {
    userName: "",
    email: "",
    password: "",
    password2: "",
    error: ""
  };
  const [data, setData] = useState<FieldsType>(initialFields);

  function handleLogin() {
    // get the date
    const { password, password2, email, userName } = data
    // check if passwords are same
      if (password.trim() !== password2.trim()) {
        setData({...data, error: 'Passwords do not match'})
      }
    console.log({ email, userName })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Register</IonTitle>
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
            <IonLabel position="floating">Username</IonLabel>
            <IonInput
              onIonChange={(e) =>
                setData({ ...data, userName: e.detail.value! })
              }
              value={data.userName}
            ></IonInput>
          </IonItem>
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
          <IonItem>
            <IonLabel position="floating">Confirm Password</IonLabel>
            <IonInput
              onIonChange={(e) =>
                setData({ ...data, password2: e.detail.value! })
              }
              value={data.password2}
            ></IonInput>
          </IonItem>
          <br />
          <br />
          <IonButton onClick={handleLogin} expand="block">
            Register
          </IonButton>
          <br />
          <p style={{ textAlign: "center", color: 'danger' }}>
            {Boolean(data.error.length) && data.error}
          </p>
          <p style={{ textAlign: "center" }}>
            login <Link to="/login">here</Link> if you already have account
          </p>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Register;
