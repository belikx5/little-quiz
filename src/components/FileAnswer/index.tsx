import "./fileAnswer.css"
import React from 'react'
import Button from '@material-ui/core/Button';
import { Card } from "@material-ui/core";
import QuestionHeader from "../QuestionHeader";
import NavButtons from "../NavButtons";

type FileAnswerProps = {
    title: string
}

function FileAnswer({ title }: FileAnswerProps) {
    const [files, setFiles] = React.useState<File[] | null>();

    const onCertificateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if(files?.length) {
            setFiles(Array.from(files));
        }
      };

    return (
        <Card className="question-card">
            <QuestionHeader title={title} />
            <input
            className='file-input'
            id="file-input"
            type="file"
            accept=".doc, .pdf, .docx, .odt, .xls, .xlsx, .ods, .txt, .jpg, .png, .jpeg"
            multiple
            onChange={onCertificateChange}
        />
        <label htmlFor="file-input" className='file-input-lable'>
          <div className='file-input-block'>
          {files?.length  
            ? files.map(f => <span>{f.name} </span>)
            : <span>Death certificate <span>*</span></span>}
          </div>
        </label>
        <NavButtons isLastStep={true} nextDisabled={false} onNext={() => {}} onBack={() => {}} />
        </Card>
    )
}

export default FileAnswer
