import {
    Table,
    Paper,
    TableRow,
    TableBody,
    TableHead,
    TableCell,
    TableContainer,
    TablePagination,
} from '@mui/material';
import * as React from 'react';
import RowTable from './RowTable';
import { BasicSelector } from './BasicSelector';
import { SurveysContext } from '../context/SurveysContext';
import { QuestionContext } from '../context/QuestionsContext';

const UsersTable = () => {
    const { surveys }: any = React.useContext(SurveysContext);
    const { uAnswers }: any = React.useContext(QuestionContext);
    const entries = Object.entries(uAnswers).reverse();
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [surveyTitle, setSurveyTitle] = React.useState('Todas');
    const [page, setPage] = React.useState(0);

    const tableCellStyles = {
        color: '#fff',
        fontSize: '1.1em',
        fontWeight: 'bold',
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: { xs: '100%', md: '90%', lg: '80%' }, height: '90%' }}>
            <TableContainer component={Paper} sx={{ overflow: 'auto', height: '95%' }}>
                <Table>
                    <TableHead sx={{ backgroundColor: '#0A70B1', textTransform: 'uppercase' }}>
                        <TableRow>
                            <TableCell sx={tableCellStyles}>
                                <BasicSelector options={surveys} setSurveyTitle={setSurveyTitle} />
                            </TableCell>
                            <TableCell sx={tableCellStyles}>Nombre</TableCell>
                            <TableCell sx={tableCellStyles}>Fecha</TableCell>
                            <TableCell sx={tableCellStyles}>{surveyTitle}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries && entries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(([key, value]: any) => (
                            <RowTable key={key} user={value} survey={Object.entries(surveys)} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination sx={{ backgroundColor: '#0A70B1', color: '#fff', fontWeight: 'bold' }}
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={Object.entries(uAnswers).length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper >

    );
}

export default UsersTable;