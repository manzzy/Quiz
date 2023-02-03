
import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import Scoreboard from './components/Scoreboard';
import question from './lib/question';
function App() {
  const [score, setScore] = useState(0);
  return (
    <IonApp>
      <IonHeader>
          <IonToolbar color={'main'}>
            <IonTitle>Quiz</IonTitle>
          </IonToolbar>
      </IonHeader>

      <IonContent>
          <Scoreboard upperBound={question.length} score={score} />
          <QuestionCard questions={question} setScore={setScore} score={score}/>
          {/* Question Card */}
          
      </IonContent>
    </IonApp>
  );
}

export default App;
