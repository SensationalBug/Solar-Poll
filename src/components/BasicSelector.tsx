import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { QuestionContext } from '../context/QuestionsContext';

export const BasicSelector = ({ options, setSurveyTitle }: any) => {
    const entries = Object.entries(options).reverse()
    const { getAnswersByID, getAnswers, setUanswers }: any = React.useContext(QuestionContext);

    const handleChange = (value: any, title: any) => {
        if (value) {
            getAnswersByID(value).then((res: any) => setUanswers(res))
            setSurveyTitle(title.data.title)
        } else {
            getAnswers()
            setSurveyTitle('Todas')
        }
    };
    return (
        <Dropdown >
            <Dropdown.Toggle style={{ backgroundColor: '#0A70B1', border: 'none' }}>
                <FilterAltIcon />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item as="button" onClick={() => handleChange(0, 0)}>Todas</Dropdown.Item>
                {entries && entries.map((elem: any, index: any) => (
                    <Dropdown.Item key={index} as="button" onClick={() => handleChange(elem[0], elem[1])}>{elem[1].data.title}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown >
    );
}
