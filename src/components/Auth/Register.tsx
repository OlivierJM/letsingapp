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
  IonSpinner,
} from "@ionic/react";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "react-apollo";
import { RegisterMutation } from '../../graphql/mutations'


interface FieldsType {
  username: string;
  email: string;
  password: string;
  password2: string;
  error: string;
  loading: boolean;
}
  const initialFields: FieldsType = {
    username: "",
    email: "",
    password: "",
    password2: "",
    error: "",
    loading: false
  };

function Register(){

  const [data, setData] = useState<FieldsType>(initialFields);
  const [registerUser] = useMutation(RegisterMutation)
  const history = useHistory()

  function handleLogin() {
    setData({ ...data, loading: true })
    const { password, password2, email, username } = data
    // check if passwords are same
      if (password.trim() !== password2.trim()) {
        setData({...data, error: 'Passwords do not match'})
      }
    registerUser({
      variables: {
        email,
        username,
        password,
      },
    })
      .then((response: any) => {
        setData({ ...data, loading: false });
        localStorage.setItem("user", JSON.stringify(response.data.register.user));
        localStorage.setItem("token", response.data.register.jwt);
        localStorage.setItem("loggedIn", "true");
      })
      .then(() => window.location.href = '/songs')
      .catch((err) => {
        setData({ ...data, loading: false, error: err.message });
      });
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
            <IonLabel position="floating">username</IonLabel>
            <IonInput
              onIonChange={(e) =>
                setData({ ...data, username: e.detail.value! })
              }
              value={data.username}
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
          <IonButton
            disabled={data.loading}
            onClick={handleLogin}
            expand="block"
          >
            {data.loading ? <IonSpinner name="dots" /> : "Register"}
          </IonButton>
          <br />
          <p style={{ textAlign: "center", color: "danger" }}>
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
