import "./userDetails.css";
import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import QuestionHeader from "../QuestionHeader";
import NavButtons from "../NavButtons";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

import { Context } from "../../store-ctx";

function UserDetails() {
  const { nav, data } = React.useContext(Context);
  const [quizNavigation, changeQuizNavigation] = nav;
  const [quizAnswers, changeQuizAnswers] = data;
  const [currValue, setCurrValue] = React.useState<null | string>(
    quizAnswers[2][0] || null
  );
  const [iinvalidField, setInvalidField] = React.useState<number>(-1);

  const [userData, setUserData] = React.useState({
    fname: currValue !== "anon" ? quizAnswers[2][1] || "" : "",
    lname: quizAnswers[2][2] || "",
    email: quizAnswers[2][3] || "",
    phone: quizAnswers[2][4] || "",
  });
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrValue((event.target as HTMLInputElement).value);
  };

  const handleUserDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleNextClick = () => {
    const res = validateUserFields();
    const invalidIndex = res.indexOf(true);
    if (invalidIndex > -1 && currValue === "user-data")
      setInvalidField(invalidIndex);
    else {
      saveProgress();
      setInvalidField(-1);
      changeQuizNavigation(quizNavigation + 1);
    }
  };

  const handleBackClick = () => {
    saveProgress();
    changeQuizNavigation(quizNavigation - 1);
  };

  const validateUserFields = () => {
    return [
      !userData.fname.trim(),
      !userData.lname.trim(),
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email),
      !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(userData.phone),
    ];
  };

  const saveProgress = () => {
    const resArr = [];
    if (currValue === "user-data") {
      resArr.push(
        currValue,
        userData.fname,
        userData.lname,
        userData.email,
        userData.phone
      );
    } else if (currValue === "anon")
      resArr.push(
        currValue,
        "Report anonymously without providing your contact information ✔"
      );
    changeQuizAnswers(quizNavigation, resArr);
  };

  return (
    <Card className="question-card">
      <QuestionHeader title="Enter your private date" />
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={currValue}
          onChange={handleRadioChange}>
          <>
            <FormControlLabel
              value={"user-data"}
              control={<Radio color="primary" />}
              label="Provide your name and cotact details"
            />
            {currValue === "user-data" && (
              <Card className="user-data-card">
                <TextField
                  id={"user-field-fname"}
                  label="First Name"
                  value={userData.fname}
                  name="fname"
                  onChange={handleUserDataChange}
                  error={iinvalidField === 0}
                />
                <TextField
                  id={"user-field-lname"}
                  label="Last Name"
                  value={userData.lname}
                  name="lname"
                  onChange={handleUserDataChange}
                  error={iinvalidField === 1}
                />
                <TextField
                  id={"user-field-email"}
                  label="Email"
                  value={userData.email}
                  name="email"
                  onChange={handleUserDataChange}
                  error={iinvalidField === 2}
                />
                <TextField
                  id={"user-field-phone"}
                  label="Phone"
                  value={userData.phone}
                  name="phone"
                  onChange={handleUserDataChange}
                  error={iinvalidField === 3}
                />
              </Card>
            )}
          </>
          <FormControlLabel
            value={"anon"}
            control={<Radio color="primary" />}
            label="Report anonymously without providing your contact information"
          />
        </RadioGroup>
      </FormControl>
      <NavButtons
        nextDisabled={!currValue}
        onNext={handleNextClick}
        onBack={handleBackClick}
      />
    </Card>
  );
}

export default UserDetails;
