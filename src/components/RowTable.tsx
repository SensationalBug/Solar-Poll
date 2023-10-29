import {
    Box,
    Grid,
    Table,
    TableRow,
    Collapse,
    TableHead,
    TableCell,
    TableBody,
    Typography,
    IconButton,
} from '@mui/material';
import React, { useEffect } from 'react'
import { OptionsSelector } from './OptionsSelector';
import { SurveysContext } from '../context/SurveysContext';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface question {
    questions?: any;
    question?: any;
}

const RowTable = ({ user, survey }: any) => {
    const [open, setOpen] = React.useState(false);
    const [question, setQuestion] = React.useState<question>({});
    const { getSurveyByID }: any = React.useContext(SurveysContext);
    useEffect(() => {
        getSurveyByID(user.data.surveyId).then((res: any) => {
            setQuestion(res)
        })
    }, [getSurveyByID, user.data.surveyId])

    const getSurveyName = survey.map((elem: any, index: any) => (
        elem[0] === user.data.surveyId ? elem[1].data.title : null
    ))

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' }, backgroundColor: '#F0F0F0' }}>
                <TableCell sx={{ width: '10%' }}>
                    <IconButton
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell
                    sx={{
                        width: '35%',
                        fontSize: { xs: '1em', lg: '1.3em' },
                        fontWeight: { xs: 'initial', lg: 'bold' },
                    }} component="th" scope="row">
                    {user.data.name}
                </TableCell>
                <TableCell
                    sx={{
                        width: '25%',
                        fontSize: { xs: '1em', lg: '1.3em' },
                        fontWeight: { xs: 'initial', lg: 'bold' },
                    }} component="th" scope="row">
                    {user.data.date}
                </TableCell>
                <TableCell
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        fontSize: { xs: '1em', lg: '1.3em' },
                        fontWeight: { xs: 'initial', lg: 'bold' },
                    }} component="th" scope="row">
                    <OptionsSelector user={user} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Grid container sx={{ justifyContent: 'space-between' }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    <strong>Email:</strong> {user.data.email}
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div">
                                    <strong>Número:</strong> {user.data.phoneNumber}
                                </Typography>
                            </Grid>
                            <Typography variant="h6" gutterBottom component="div">
                                <strong>Encuesta:</strong> {getSurveyName}
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow >
                                        <TableCell><strong>Id</strong></TableCell>
                                        <TableCell><strong>Question</strong></TableCell>
                                        <TableCell><strong>Answer</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Object.keys(user.respuestas).map((clave: any) => (
                                        <TableRow key={clave}>
                                            <TableCell>{clave}</TableCell>
                                            <TableCell component="th" scope="row">
                                                {question && question.questions && question.questions[clave - 1] && question.questions[clave - 1].question}
                                            </TableCell>
                                            <TableCell>{user.respuestas[clave]}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default RowTable;