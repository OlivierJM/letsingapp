import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import '../theme/About.css'
import ComingSoon from '../components/ComingSoon';

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <ComingSoon />
            </IonContent>
        </IonPage>
    );
};

export default About;
