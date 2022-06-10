import FaqApi from '../api/faq';
import { Container, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { maxWidth } from '@mui/system';
import React, { useState, useEffect } from 'react';

interface IPosts {
    faqNo: string | number,
    content: string | null,
}

const listFaq = props => {
    const [faqList, setList] = useState<IPosts>([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await FaqApi.list();
            console.log(res);
            setList(res.data);
        }

        fetchPosts();
    }, []);

    return (
        <Container maxWidth={false}>
            <Paper sx={{width: '100%', overflow: 'hidden'}}>
                <TableContainer>
                    <TableHead></TableHead>
                    <TableBody>
                        {
                            faqList.map((row: IPosts) => {
                                <TableRow key={row.faqNo}>
                                    <TableCell>{row.content}</TableCell>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </TableContainer>
            </Paper>
        </Container>
    )
}

export default listFaq;

function render() {
    throw new Error('Function not implemented.');
}
