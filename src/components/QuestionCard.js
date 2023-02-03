import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton, useIonToast, useIonAlert } from "@ionic/react";
import { useEffect, useState } from "react";
import Option from "./Option";

function QuestionCard({questions, setScore, score}){

    const [head, setHead] = useState(0);
    const [answer, setAnswer] = useState();
    const [present] = useIonToast();
    const [presentAlert] = useIonAlert();
    const presentToast = (position, message) => {
        present({
          message: message,
          duration: 500,
          position: position
        });
      };

    function nextHandler() {
        if(head < questions.length -1){
            setHead(head + 1)
        }else {
            presentAlert({
                header: 'Game End',
                message: 'Play Again ',
                buttons: ['OK'],
              });
              setHead(0)
              setScore(0)
        } 
    }

    useEffect(() => {
      if(answer === questions[head].answer ){
        setScore(score + 1);
        presentToast('bottom', 'Correct');
        nextHandler();
      }else if(answer == "" || answer == null){
      }else {
        presentToast('bottom', 'Wrong');
      }
 
    }, [answer])
    
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardSubtitle color={'shade'} className="subtitle">{questions[head].category}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
               <h1> {questions[head].Question} </h1>
               {questions[head].options.map((el)=> {
                    return <Option option={el} setAnswer={setAnswer}/>
               })}

               {/* <IonButton expand="full" color={'main'} onClick={(event)=> nextHandler()} >{btnTxt}</IonButton> */}
            </IonCardContent>
        </IonCard>
    )
}

export default QuestionCard;