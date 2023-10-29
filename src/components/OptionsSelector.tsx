import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { QuestionContext } from '../context/QuestionsContext';

export const OptionsSelector = ({ user }: any) => {
    const { moveAnswer }: any = useContext(QuestionContext)
    const handleChange = () => {
        console.log(user)
    };

    return (
        <Dropdown>
            <Dropdown.Toggle style={{ backgroundColor: '#0A70B1', border: 'none' }}>
                <MoreVertIcon />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item
                    onClick={() => handleChange()}
                    as="button"
                    style={{
                        alignItems: 'center',
                    }}>
                    Marcar como leido
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => moveAnswer(user.data.name)}
                    as="button"
                    style={{
                        alignItems: 'center',
                    }}>
                    Eliminar
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
