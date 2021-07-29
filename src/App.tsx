import React from 'react';
import './common/styles.css';
import './App.css';
import OneAnswer from './components/OneAnswer';
import MultipleAnswer from './components/MultipleAnswers';
import UserDetails from './components/UserDetails';
import FileAnswer from './components/FileAnswer';

function App() {
  const oneAnsVariants = [
    {value: "1", label: "Variant 1"},
    {value: "2", label: "Variant 2"},
    {value: "3", label: "Variant 3"},
    {value: "4", label: "Variant 4"},
  ]
  return (
    <div className="App">
      <OneAnswer title="Here you can choose only one anwser" answers={oneAnsVariants} />
      <MultipleAnswer title="Here you can choose only one anwser" answers={oneAnsVariants} />
      <UserDetails />
      <FileAnswer title="Please, add a file"/>
    </div>
  );
}

export default App;
