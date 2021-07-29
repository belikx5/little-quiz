import './navButton.css';
import React from 'react'
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

type NavButtonsProps = {
    onNext: () => void,
    onBack: () => void,
    isLastStep?: boolean,
    isFirstStep?: boolean,
    nextDisabled: boolean
}

function NavButtons({
    isFirstStep = false, 
    isLastStep = false, 
    nextDisabled, 
    onNext, 
    onBack
}:NavButtonsProps) {
    return (
        <div className="nav-block">
            {!isFirstStep && (
                <Button 
                    onClick={onBack} 
                    startIcon={<ArrowBackIosIcon/>}>
                    Back
                </Button>
            )}
            <Button
                variant="contained"
                color="primary"
                disabled={nextDisabled}
                onClick={onNext}
                endIcon={<ArrowForwardIosIcon/>}>
                {isLastStep ? "Submit" : "Next"}
            </Button>
        </div>
    )
}

export default NavButtons
