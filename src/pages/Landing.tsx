// @ts-nocheck
import React, { useState, useEffect, useContext } from "react";
import { IonContent, IonPage, IonButton } from "@ionic/react";
import "../theme/Profile.css";
import { Loader } from "./Home";
import { useHistory } from "react-router";
import { AuthContext } from "../components/Auth/AuthContext";

function Landing() {
  const BIBLE_ID = `de4e12af7f28f599-01`;
  const VERSES = [
    `JER.29.11`,
    `ACT.16.25`,
    `PSA.81.1`,
    `EZR.2.65`,
    `ECC.2.8`,
    `EPH.5.19`,
    `PSA.95.1`,
    `PSA.46.1`,
    `NEH.11.23`,
    `HEB.11.1`,
    `ZEP.3.17`,
    `1COR.10.13`,
    `PRO.22.6`,
    `PSA.147.1`,
    `PSA.101.1`,
    `HEB.12.2`,
    `MAT.11.28`,
    `PSA.89.1`,
    `PSA.104.33`,
    `MAT.5.44`,
    `HEB.11.1`,
    `PSA.9.2`,
    `1COR.10.13`,
    `PRO.22.6`,
    `ISA.40.31`,
    `JOS.1.9`,
    `ROM.15.11`,
    `COL.3.16`,
    `JAS.5.13`,
    `ISA.30.29`,
    `EPH.5.19`,
  ];

  const verseIndex = new Date().getDate();
  const verseID = VERSES[verseIndex];
  const history = useHistory();
  const { loggedIn } = useContext(AuthContext); 
  const { response, error } = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=${verseID}`
  );
  if (!response || !response.data || error) {
    return <Loader showLoading={true} message="fetching verse" />;
  }
  return (
    <IonPage>
      <IonContent>
        <div
          style={{
            marginTop: "21vh",
            marginRight: "10vw",
            marginLeft: "10vw",
          }}
        >
          <div
            className="verse"
            dangerouslySetInnerHTML={{
              __html: response.data?.passages[0].content,
            }}
          ></div>
          <p className="verse_details">
            {response.data?.passages[0].reference}
          </p>
          <br />
          <br />
          <br />
          {/*  */}
          <IonButton
            expand="block"
            fill="outline"
            onClick={() => history.push("/home")}
          >
            See all albums
          </IonButton>
          <br />
          <br />
          {!loggedIn && (
            <IonButton
              expand="block"
              fill="clear"
              onClick={() => history.push("/register")}
            >
              Register here to edit lyrics
            </IonButton>
          )}
        </div>
        <div></div>
      </IonContent>
    </IonPage>
  );
}

/**
 *
 * @param {string} url API endpoint to fetch from
 * @param {object} options include headers and http method here [GET, POST, ...]
 * @returns {object} response and error
 *
 */
export function useFetch(url: string): any {
  const [response, setData] = useState<any>({});
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url, {
          headers: {
            "api-key": process.env.REACT_APP_API_KEY,
          },
        });
        const json = await result.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { response, error };
}

export default Landing;
