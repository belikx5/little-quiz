import React from 'react'
import { QuestionProps } from '../../common/types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import QuestionHeader from '../QuestionHeader';
import NavButtons from '../NavButtons';
import Card from '@material-ui/core/Card';
import OtherInput from '../OtherInput';



function OneAnswer({ answers, title }: QuestionProps) {
    const [currValue, setCurrValue] = React.useState<null | string>(null);
    const [other, setOther] = React.useState<string>("");
    const [enableOtherInput, setEnableOtherInput] = React.useState(false);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrValue((event.target as HTMLInputElement).value);
    };
    const handleOtherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOther((event.target as HTMLInputElement).value);
    };
    const handleOtherLabelClick = () => {
        if(!enableOtherInput) setEnableOtherInput(true)
    }
    const handleEnterKeyDown = () => {
        setEnableOtherInput(false);
    }
    return (<Card className="question-card">
        <QuestionHeader title={title} />
         <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={currValue} onChange={handleRadioChange} >
                {answers.map(q => {
                    return  <FormControlLabel key={q.value} value={q.value} control={<Radio color="primary" />} label={q.label} />
                })}
                <FormControlLabel 
                    key="other" 
                    value={"r_v_other"} 
                    control={<Radio color="primary" />} 
                    onClick={handleOtherLabelClick}
                    label={enableOtherInput && currValue === "r_v_other"
                        ? <OtherInput value={other} onChange={handleOtherChange} onEnterKeyDown={handleEnterKeyDown} /> 
                        : other ? other : "Other" } 
                    />
            </RadioGroup>
         </FormControl>
        <NavButtons isFirstStep={true} nextDisabled={!currValue || currValue === "r_v_other"} onNext={() => {}} onBack={() => {}} />
    </Card>)
}

export default OneAnswer
