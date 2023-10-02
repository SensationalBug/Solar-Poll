import { FaDiceOne, FaDiceTwo } from 'react-icons/fa'
import OptionButton from "../components/OptionButton"

export const questionContentQ1 = () => (
    <>
        <OptionButton title='Homeowner' icon={<FaDiceOne size={'70%'} />} />
        <OptionButton title='Renter' icon={<FaDiceTwo size={'70%'} />} />
    </>
)