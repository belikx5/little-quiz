import React from "react";

type ContextType = {
    nav: any[],
    data: any[],
}

//context obj
export const Context = React.createContext<ContextType>({
    nav: [],
    data: [],
});

type StoreContextProps = {
  children: React.ReactNode;
};

interface QUizAnsersConfig {
  0: string[];
  1: string[];
  2: string[];
  3: string[];
  [propName: number]: string[];
}


function StoreContext({ children }: StoreContextProps) {
  const [quizNavigation, setQuizNavigation] = React.useState(0);

  const [quizAnswers, setQuizAnswers] = React.useState<QUizAnsersConfig>({
    0: [],
    1: [],
    2: [],
    3: [],
  });

  const changeQuizNavigation = (step: number) => {
    setQuizNavigation(step);
  };

  const changeQuizAnswers = (quizStep: any, answers: string[]) => {
    const tmp = { ...quizAnswers };
    tmp[quizStep] = answers;
    setQuizAnswers(tmp);
  };

  const store = {
      nav: [quizNavigation, changeQuizNavigation],
      data: [quizAnswers, changeQuizAnswers],
  }

  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export default StoreContext;