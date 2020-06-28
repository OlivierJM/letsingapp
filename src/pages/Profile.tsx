import React, { useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import "../theme/Profile.css";
import { AuthContext } from "../components/Auth/AuthContext";
import { useHistory } from "react-router";

function Profile() {
  const { user, loggedIn, logout } = useContext(AuthContext);
  const history = useHistory();

  function handleLogout() {
    logout();
    history.push("/login");
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <p>
              {loggedIn
                ? `You are logged in as ${user.username}`
                : `You are not logged`}
              <br />
              <br />
              {loggedIn ? (
                <IonButton style={{ marginLeft: 47 }} onClick={handleLogout}>
                  Logout
                </IonButton>
              ) : (
                <IonButton
                  style={{ marginLeft: 47 }}
                  onClick={() => history.push("/login")}
                >
                  Log In
                </IonButton>
              )}
            </p>
            <br />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Profile;
