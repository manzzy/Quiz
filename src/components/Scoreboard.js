import { IonText } from "@ionic/react";

function Scoreboard({upperBound, score}) {
    return (
        <IonText className="ion-text-center" >
            <p>Score Board</p>
            <h3>{score} / {upperBound}</h3>
        </IonText>
    )
}

export default Scoreboard;