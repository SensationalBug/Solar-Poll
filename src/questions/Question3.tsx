import CheckInput from '../components/CheckInput'
import RadioFormControl from '../components/RadioFormControl'

export const questionContentQ3 = () => (
    <CheckInput radioFormControl={
        <>
            <RadioFormControl title='Female1' />
            <RadioFormControl title='Female2' />
            <RadioFormControl title='Female3' />
            <RadioFormControl title='Female4' />
        </>
    } />
)