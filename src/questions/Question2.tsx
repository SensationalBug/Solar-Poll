import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour } from 'react-icons/fa'
import Options from "../components/OptionButton"

export const questionContentQ2 = () => (
    <>
        <Options title='Single family' icon={<FaDiceOne size={'70%'} />} />
        <Options title='Townhome' icon={<FaDiceTwo size={'70%'} />} />
        <Options title='Multi family' icon={<FaDiceThree size={'70%'} />} />
        <Options title='Mobile home' icon={<FaDiceFour size={'70%'} />} />
    </>
)