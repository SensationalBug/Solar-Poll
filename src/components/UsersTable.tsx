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

const UsersTable = () => {
    const { uAnswers }: any = React.useContext(QuestionContext);
    const entries = Object.entries(uAnswers);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
        console.log(event)
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: { xs: '100%', md: '90%', lg: '80%' }, height: '90%' }}>
            <TableContainer component={Paper} sx={{ overflow: 'auto', height: '95%' }}>
                <Table>
                    <TableHead sx={{ backgroundColor: '#0A70B1' }}>
                        <TableRow>
                            <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2em' }}></TableCell>
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