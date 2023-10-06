import {
    Box,
    Table,
    TableRow,
    Collapse,
    TableHead,
    TableCell,
    TableBody,
    Typography,
    IconButton,
    Grid,
} from '@mui/material';
import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const RowTable = ({ row }: any) => {
    const [open, setOpen] = React.useState(false);
    const elementosDiv = Object.keys(row.respuestas).map((clave) => (
        <TableRow key={clave}>
            <TableCell>{clave}</TableCell>
            <TableCell component="th" scope="row">
                {/* {res.question} */}
            </TableCell>
            <TableCell>{row.respuestas[clave]}</TableCell>
        </TableRow>
    ))
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        size="small"
                        aria-label="expand row"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.data.name}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.data.date}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Grid container sx={{justifyContent:'space-between'}}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Email: {row.data.email}
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div">
                                    Número: {row.data.email}
                                </Typography>
                            </Grid>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell>Question</TableCell>
                                        <TableCell>Answer</TableCell>
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