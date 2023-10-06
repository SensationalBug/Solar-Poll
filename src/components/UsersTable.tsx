import {
    Table,
    Paper,
    TableRow,
    TableBody,
    TableHead,
    TableCell,
    TableContainer,
} from '@mui/material';
import * as React from 'react';
import RowTable from './RowTable';
import { QuestionContext } from '../context/QuestionsContext';

const UsersTable = () => {
    const { uAnswers }: any = React.useContext(QuestionContext)
    const entries = Object.entries(uAnswers)
    return (
        <TableContainer component={Paper}
            sx={{ width: { xs: '100%', md: '90%', lg: '80%' }, height: '90%' }}>
            <Table sx={{ border: 'none' }}>
                <TableHead sx={{ backgroundColor: '#0A70B1' }}>
                    <TableRow>
                        <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2em' }}>

                        </TableCell>
                        <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2em' }}>Nombre</TableCell>
                        <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2em' }}>Fecha</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {entries && entries.map(([key, value]: any) => (
                        <RowTable key={key} row={value} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersTable;