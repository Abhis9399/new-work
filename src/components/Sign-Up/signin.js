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

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className='signin-wrapper'>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5" sx={{fontWeight: 600}}>
            Sign in
          </Typography>
          <Typography component="h1" variant="h5" sx={{ color: 'gray', fontSize: 20 }}>
           Let's build something greate
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="UserName"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
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
              Login
            </Button>
            <Grid item xs display="flex" justifyContent="flex-end">
                <Link href="/forgot" variant="body2">
                  Forgot password?
                </Link>
            </Grid>
            <Grid container display="flex" justifyContent="center" marginTop={2}>
              <Grid item>
                <span>Don't have an account  ?</span>
                <Link href="/" variant="body2" sx={{fontWeight: 600, ml:1, fontSize:15}}>
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}