import * as React from 'react';
import {
    Paper,
    Table,
    TableRow,
    TableBody,
    TableCell,
    TableHead,
    TableContainer,
    TablePagination,
} from '@mui/material';

interface Column {
    id: 'nombre' | 'mail' | 'number';
    label: string;
    minWidth?: number;
    align?: 'left';
}

const columns: readonly Column[] = [
    { id: 'nombre', label: 'Nombre', minWidth: 100 },
    { id: 'mail', label: 'Email', minWidth: 100 },
    {
        id: 'number',
        label: 'Numero',
        align: 'left',
        minWidth: 100
    },
];

interface Data {
    nombre: string;
    mail: string;
    number: number;
}

function createData(
    nombre: string,
    mail: string,
    number: number,
): Data {
    return { nombre, mail, number };
}

const rows = [
    createData('India China    Italy    United', 'breidydl@gmail.com', 1324171354),
    createData('India China    Italy    United', 'pedroluisdl7@gmail.com', 1403500365),
    createData('India China    Italy    United', 'ameliaalcantara123@gmail.com', 60483973),
    createData('United States', 'US', 327167434),
    createData('Canada', 'CA', 37602103),
    createData('Australia', 'AU', 25475400),
    createData('Germany', 'DE', 83019200),
    createData('Ireland', 'IE', 4857000),
    createData('Mexico', 'MX', 126577691),
    createData('Japan', 'JP', 126317000),
    createData('France', 'FR', 67022000),
    createData('United Kingdom', 'GB', 67545757),
    createData('Russia', 'RU', 146793744),
    createData('Nigeria', 'NG', 200962417),
    createData('Brazil', 'BR', 210147125),
];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '90%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 500, minHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell sx={{ backgroundColor: '#0A70B1', color: '#fff', fontWeight: 'bold' }}
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.number}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell onClick={() => console.log(column)} key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination sx={{ backgroundColor: '#0A70B1', color: '#fff', fontWeight: 'bold' }}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}