import {
    Box,
    Table,
    Paper,
    TableRow,
    Collapse,
    TableBody,
    TableHead,
    TableCell,
    Typography,
    IconButton,
    TableContainer,
    Button,
} from '@mui/material';
import * as React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function createData(
    name: string,
    date: string,
) {
    return {
        name,
        date,
        history: [
            {
                id: 1,
                question: '2020-01-05',
                answer: '11091700',
            },
            {
                id: 2,
                question: '2020-01-02',
                answer: 'Anonymous',
            },
        ],
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.date}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Encuesta
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell>Question</TableCell>
                                        <TableCell>Answer</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.question}>
                                            <TableCell>{historyRow.id}</TableCell>
                                            <TableCell component="th" scope="row">
                                                {historyRow.question}
                                            </TableCell>
                                            <TableCell>{historyRow.answer}</TableCell>
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

const rows = [
    createData('Frozen yoghurt', '2020-01-05'),
    createData('Ice cream sandwich', '2020-01-05'),
    createData('Eclair', '2020-01-05'),
    createData('Cupcake', '2020-01-05'),
    createData('Gingerbread', '2020-01-05'),
];
const UsersTable = () => {
    return (
        <TableContainer component={Paper}
            sx={{ width: { xs: '100%', md: '90%', lg: '80%'}, height: '90%' }}>
            <Table sx={{ border: 'none' }}>
                <TableHead sx={{ backgroundColor: '#0A70B1' }}>
                    <TableRow>
                        <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2em' }}>
                            <KeyboardArrowDownIcon />
                        </TableCell>
                        <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2em' }}>Nombre</TableCell>
                        <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2em' }}>Fecha</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersTable;