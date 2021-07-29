import React from 'react'
import Card from '@material-ui/core/Card';
import QuestionHeader from '../QuestionHeader';
import NavButtons from '../NavButtons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import { QuestionProps } from '../../common/types';
import OtherInput from '../OtherInput';


function MultipleAnswer({ answers, title }: QuestionProps) {
    const [selecteds, setSelecteds] = React.useState<string[]>([]);
    const [other, setOther] = React.useState<string>("");
    const [otherChecked, setOtherChecked] = React.useState<boolean>(false);
    const [enableOtherInput, setEnableOtherInput] = React.useState(false);

    const handleSelectionChanged = (value: string) => {
        const tmp = selecteds.slice(0);
        const index = tmp.indexOf(value);
        if(index > -1) {
            tmp.splice(index, 1)
            setSelecteds(tmp);
        } else {
            setSelecteds([...tmp, value]);
        }
        if(enableOtherInput) setEnableOtherInput(false);
    }

    const handleOtherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOther((event.target as HTMLInputElement).value);
    };

    const handleOtherLabelClick = () => {
        if(!enableOtherInput) setEnableOtherInput(true)
    }
    const handleOtherCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOtherChecked(event.target.checked)
    }
    const handleEnterKeyDown = () => {
        setEnableOtherInput(false);
    }

    return (<Card className="question-card">
    <QuestionHeader title={title} />
     <FormControl component="fieldset">
            {answers.map(a => {
                return  <FormControlLabel key={a.value} control={
                <Checkbox 
                    checked={selecteds.includes(a.value)} 
                    onChange={() => handleSelectionChanged(a.value)} 
                    color="primary" 
                />
            } label={a.label} />
            })}
            <FormControlLabel 
                key="other" 
                value={"r_v_other"} 
                control={<Checkbox checked={otherChecked} onChange={handleOtherCheck} color="primary" />} 
                onClick={handleOtherLabelClick}
                label={enableOtherInput 
                    ? <OtherInput value={other} onChange={handleOtherChange} onEnterKeyDown={handleEnterKeyDown} /> 
                    : other ? other : "Other" } 
                />
     </FormControl>
    <NavButtons nextDisabled={!otherChecked && !selecteds.length} onNext={() => {}} onBack={() => {}} />
</Card>)
}

export default MultipleAnswer
