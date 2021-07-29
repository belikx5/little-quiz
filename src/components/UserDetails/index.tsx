import React from 'react'
import { QuestionProps } from '../../common/types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import QuestionHeader from '../QuestionHeader';
import NavButtons from '../NavButtons';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';


function UserDetails() {
    const [currValue, setCurrValue] = React.useState<null | string>(null);
    const [validateFields, setValidateFields] = React.useState<boolean>(false);
    const [iinvalidField, setInvalidField] = React.useState<number>(-1);

    const [userData, setUserData] = React.useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    })
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrValue((event.target as HTMLInputElement).value);
    };

    const handleUserDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
    const handleNextClick = () => {
        const res = validateUserFields();
        const invalidIndex = res.indexOf(true);
        if(invalidIndex > -1)
            setInvalidField(invalidIndex)
        else  setInvalidField(-1)

    }

    const validateUserFields = () => {
        return [!userData.fname.trim(),
             !userData.lname.trim(), 
             !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email),
             !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(userData.phone)]
        
    }
    return (<Card className="question-card">
        <QuestionHeader title="Enter your private date" />
         <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={currValue} onChange={handleRadioChange} >
                  <>
                    <FormControlLabel value={"user-data"} control={<Radio color="primary" />} label="Provide your name and cotact details" />
                    {currValue === "user-data" && (
                        <Card style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "5px 75px 10px 35px"
                        }}>
                            <TextField id={"user-field-fname"} label="First Name" value={userData.fname} name="fname" onChange={handleUserDataChange} error={iinvalidField === 0} />
                            <TextField id={"user-field-lname"} label="Last Name" value={userData.lname} name="lname"  onChange={handleUserDataChange} error={iinvalidField === 1} />
                            <TextField id={"user-field-email"} label="Email" value={userData.email} name="email" onChange={handleUserDataChange} error={iinvalidField === 2} />
                            <TextField id={"user-field-phone"} label="Phone" value={userData.phone} name="phone" onChange={handleUserDataChange} error={iinvalidField === 3} />
                        </Card>
                    )}
                    </>
                    <FormControlLabel value={"anon"} control={<Radio color="primary" />} label="Report anonymously without providing your contact information" />
            </RadioGroup>
         </FormControl>
        <NavButtons isFirstStep={true} nextDisabled={!currValue} onNext={handleNextClick} onBack={() => {}} />
    </Card>)
}

export default UserDetails
