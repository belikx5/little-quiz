import "./fileAnswer.css";
import React from "react";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import QuestionHeader from "../QuestionHeader";
import NavButtons from "../NavButtons";
import { validateFile } from "../../services/validation";

import { Context } from "../../store-ctx";

type FileAnswerProps = {
  title: string;
};

function FileAnswer({ title }: FileAnswerProps) {
  const { nav, data } = React.useContext(Context);
  const [quizNavigation, changeQuizNavigation] = nav;
  const [quizAnswers, changeQuizAnswers] = data;
  const [files, setFiles] = React.useState<string[]>(quizAnswers[3] || []);
  console.log(quizAnswers)
  const onCertificateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files?.length) {
      const fileArray = Array.from(files);
      const res = fileArray.map(validateFile);
      if (res.some((el) => el === false))
        alert(
          "Available file formats: .doc, .pdf, .docx, .odt, .xls, .xlsx, .ods, .txt, .jpg, .png, .jpeg"
        );
      else setFiles(fileArray.map(f => f.name));
    }
  };
  const handleNextClick = () => {
    saveProgress();
    changeQuizNavigation(quizNavigation + 1);
  };
  const handleBackClick = () => {
    saveProgress();
    changeQuizNavigation(quizNavigation - 1);
  };
  const saveProgress = () => {
    if (files.length) changeQuizAnswers(quizNavigation, files);
  }

  return (
    <Card className="question-card">
      <QuestionHeader title={title} />
      <input
        className="file-input"
        id="file-input"
        type="file"
        accept=".doc, .pdf, .docx, .odt, .xls, .xlsx, .ods, .txt, .jpg, .png, .jpeg"
        multiple
        onChange={onCertificateChange}
      />
      <label htmlFor="file-input" className="file-input-lable">
        <div className="file-input-block">
          {files?.length ? (
            files.map((f, i) => <span key={i}>{f} </span>)
          ) : (
            <span>
              Please, add a file
            </span>
          )}
        </div>
      </label>
      <NavButtons
        isLastStep={true}
        nextDisabled={!files?.length}
        onNext={handleNextClick}
        onBack={handleBackClick}
      />
    </Card>
  );
}

export default FileAnswer;
