import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ComingSoon from '../components/ComingSoon';
// import '../theme/MembersList.css'

const MembersList: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>MembersList</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
               <ComingSoon />
            </IonContent>
        </IonPage>
    );
};

export default MembersList;
