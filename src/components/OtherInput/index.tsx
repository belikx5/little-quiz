import React from 'react'
import TextField from '@material-ui/core/TextField';

type OtherInputProps = {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onEnterKeyDown: () => void
}
  
function OtherInput({
    value, 
    onChange,
    onEnterKeyDown
}: OtherInputProps) {

    const handleEnterKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            onEnterKeyDown();
        }
    }

    return (<TextField 
        id="outlined-basic" 
        variant="outlined" 
        inputProps={{
            style: {
                padding: "6px 12px"
            }
        }}
        value={value} 
        onChange={onChange} 
        onKeyDown={handleEnterKeyDown}    
    />)
}

export default OtherInput
