import React from 'react';
import './common/styles.css';
import './App.css';
import OneAnswer from './components/OneAnswer';
import MultipleAnswer from './components/MultipleAnswers';
import UserDetails from './components/UserDetails';
import FileAnswer from './components/FileAnswer';
import { Context } from "./store-ctx";
import QuizResults from './components/QuizResults';

function App() {
  const {nav} = React.useContext(Context);
  const [quizNavigation] = nav;
  const oneAnsVariants = [
    {value: "1", label: "Variant 1"},
    {value: "2", label: "Variant 2"},
    {value: "3", label: "Variant 3"},
    {value: "4", label: "Variant 4"},
  ]
  const q0="Here you can choose only one anwser";
  const q1="Here you can choose multiple answers";
  const q3="Please, add a file";
  return (
    <div className="App">
      {quizNavigation === 0 && <OneAnswer title={q0} answers={oneAnsVariants} />}
      {quizNavigation === 1 && <MultipleAnswer title={q1} answers={oneAnsVariants} />}
      {quizNavigation === 2 && <UserDetails />}
      {quizNavigation === 3 && <FileAnswer title={q3}/>}
      {quizNavigation === 4 && <QuizResults q0={q0} q1={q1} q3={q3}/>}
    </div>
  );
}

export default App;
