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
import { SurveysContext } from '../context/SurveysContext';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface question {
    questions?: any;
    question?: any;
}

const RowTable = ({ row }: any) => {
    const [open, setOpen] = React.useState(false);
    const [question, setQuestion] = React.useState<question>({});
    const { getSurveyByID }: any = React.useContext(SurveysContext);
    useEffect(() => {
        getSurveyByID(row.data.surveyId).then((res: any) => {
            setQuestion(res)
        })
    }, [getSurveyByID, row.data.surveyId])
    const elementosDiv = Object.keys(row.respuestas).map((clave: any) => (
        <TableRow key={clave}>
            <TableCell>{clave}</TableCell>
            <TableCell component="th" scope="row">
                {question && question.questions && question.questions[clave - 1] && question.questions[clave - 1].question}
            </TableCell>
            <TableCell>{row.respuestas[clave]}</TableCell>
        </TableRow>
    ))
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' }, backgroundColor:'#F0F0F0' }}>
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
                        width: '45%',
                        fontSize: { xs: '1em', lg: '1.3em' },
                        fontWeight: { xs: 'initial', lg: 'bold' },
                    }} component="th" scope="row">
                    {row.data.name}
                </TableCell>
                <TableCell
                    sx={{
                        width: '45%',
                        fontSize: { xs: '1em', lg: '1.3em' },
                        fontWeight: { xs: 'initial', lg: 'bold' },
                    }} component="th" scope="row">
                    {row.data.date}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Grid container sx={{ justifyContent: 'space-between' }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    <strong>Email:</strong> {row.data.email}
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div">
                                    <strong>Número:</strong> {row.data.phoneNumber}
                                </Typography>
                            </Grid>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow >
                                        <TableCell><strong>Id</strong></TableCell>
                                        <TableCell><strong>Question</strong></TableCell>
                                        <TableCell><strong>Answer</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {elementosDiv}
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