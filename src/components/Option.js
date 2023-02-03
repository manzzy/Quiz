import { IonCard, IonCardContent, IonCheckbox, IonItem, IonLabel } from "@ionic/react";

function Option({option, setAnswer}) {
    return (
        <IonItem onClick={() => setAnswer(option)}>
            {/* <IonCheckbox slot="start"></IonCheckbox> */}
            <IonLabel>{option}</IonLabel>
        </IonItem>
    )
}

export default Option;