import React ,{ useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const MyPage = (props) => {
   
    return (
        <Container component="main" maxWidth="xs">
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Typography component="h1" variant="h5" marginBottom={8}>
            마이 페이지
           </Typography>
            <TextField 
            margin="normal"
            label="ID" 
            fullWidth 
            autoFocus
            />
            <TextField
            margin="normal" 
            label="Password" 
            type="password" 
            fullWidth
            />
            <TextField
            margin="normal" 
            label="Password"
            type="password"
            fullWidth
            />
            <TextField
            margin="normal"
            label="Password"
            type="password"
            fullWidth
            />
            <TextField 
            margin="normal"
            label="Nickname" 
            fullWidth
            />
            <Button
            type="submmit" fullWidth variant="contained"
            sx={{mt:3}}>
                수정하기
            </Button>
            </Box>
        </Container>
    );
  };
export default MyPage;
