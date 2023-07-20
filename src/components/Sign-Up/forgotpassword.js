import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FcGoogle } from "react-icons/fc";
// import {FacebookOutlinedIcon} from '@mui/icons-material/FacebookOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './singup.css'

const defaultTheme = createTheme();

export default function ForgotPass() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className='forgotpass-wrapper'>
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className="forgot">
                <Typography component="h1" variant="h5" sx={{fontWeight: 600, pb:1}}>
                Forgot Password
                </Typography>
                <Typography component="h1" variant="h5" sx={{ color: 'gray', fontSize: 20 }}>
                Enter your email or we will send you a link
                </Typography>
          </div>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address or Phone No"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {/* <Grid item xs display="flex" justifyContent="flex-end">
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
            </Grid> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, pt:1.5, pb:1.5, fontSize: 18 }}
            >
              <Link href="/otp" sx={{color:'white'}}>Send me the link</Link>
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}