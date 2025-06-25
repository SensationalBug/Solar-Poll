import { RadioGroup } from '@mui/material'

interface checkInputInterface {
    radioFormControl: any;
}
const CheckInput = ({ radioFormControl }: checkInputInterface) => {
    return (
        <RadioGroup sx={{ width: '100%', alignItems: 'center' }}>
            {radioFormControl}
        </RadioGroup>
    )
}

export default CheckInput