import "./quizResults.css";
import React from "react";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";

import { Context } from "../../store-ctx";

type QuizResultsProps = {
  q0: string;
  q1: string;
  q3: string;
};

function QuizResults({ q0, q1, q3 }: QuizResultsProps) {
  const { data } = React.useContext(Context);
  const [quizAnswers] = data;

  return (
    <Card className="question-card results" style={{ textAlign: "left" }}>
        <Typography variant="h4">Your results:</Typography>
      <Typography>
        🔸<b>{q0} </b>
        {quizAnswers[0]}
      </Typography>
      <Typography>
        🔸<b>{q1} </b>
        {quizAnswers[1].join(", ")}
      </Typography>
      <Typography>
        🔸<b>Personal data: </b>
        {quizAnswers[2].slice(1).join("; ")}
      </Typography>
      <Typography>
        🔸<b>{q3} </b>
        {quizAnswers[3].join(", ")}
      </Typography>
    </Card>
  );
}

export default QuizResults;
