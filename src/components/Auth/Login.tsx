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
import { Link } from "react-router-dom";
import { useMutation } from "react-apollo";
import { LoginMutation } from "../../graphql/mutations";

interface FieldsType {
  email: string;
  password: string;
  error: string;
  loading: boolean;
}

const initialFields: FieldsType = {
  email: "",
  password: "",
  error: "",
  loading: false,
};

function Login() {
  const [data, setData] = useState<FieldsType>(initialFields);
  const [loginUser] = useMutation(LoginMutation);

  function handleLogin() {
    // get the date
    const { password, email } = data;
    setData({ ...data, loading: true });

  for (const [key, value] of Object.entries(data)) {
      if (typeof value === "string" && !value.length && key !== 'error') {
        setData({ ...data, error: `${key} is required` });
        return;
      }
    }

    loginUser({
      variables: { identifier: email, password },
    })
      .then(({ data: { login } }: any) => {
        setData({ ...data, loading: false });
        localStorage.setItem("user", JSON.stringify(login.user));
        localStorage.setItem("token", login.jwt);
        localStorage.setItem("loggedIn", "true");
      })
      .then(() => (window.location.href = "/songs"))
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
            <IonLabel position="floating">Email or Username </IonLabel>
            <IonInput
              onIonChange={(e) => setData({ ...data, email: e.detail.value! })}
              value={data.email}
              required
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              onIonChange={(e) =>
                setData({ ...data, password: e.detail.value! })
              }
              value={data.password}
              required
            ></IonInput>
          </IonItem>
          <br />
          <br />
          <IonButton
            disabled={data.loading}
            onClick={handleLogin}
            expand="block"
            fill="outline"
          >
            {data.loading ? <IonSpinner name="dots" /> : "Login"}
          </IonButton>
          <br />
          <p style={{ textAlign: "center", color: 'red' }}>
            {Boolean(data.error.length) && data.error}
          </p>
          <p style={{ textAlign: "center" }}>
            Register <Link to="/register">here</Link> if you do not have an
            account
          </p>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
export default Login;
