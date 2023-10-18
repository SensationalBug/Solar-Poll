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
import { QuestionContext } from '../context/QuestionsContext';
import { BasicSelector } from './BasicSelector';
import { SurveysContext } from '../context/SurveysContext';

const UsersTable = () => {
    const { uAnswers }: any = React.useContext(QuestionContext);
    const { surveys }: any = React.useContext(SurveysContext);
    const entries = Object.entries(uAnswers).reverse();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [selectedSurvey, setSelectedSurvey] = React.useState('');


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
                            <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2em' }}>
                                <BasicSelector
                                    options={surveys}
                                    selectedSurvey={selectedSurvey}
                                    setSelectedSurvey={setSelectedSurvey} />
                            </TableCell>
                            <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2em' }}>Nombre</TableCell>
                            <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2em' }}>Fecha</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries && entries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(([key, value]: any) => (
                            <RowTable key={key} row={value} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination sx={{ backgroundColor: '#0A70B1', color: '#fff', fontWeight: 'bold' }}
                rowsPerPageOptions={[5, 10, 25]}
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