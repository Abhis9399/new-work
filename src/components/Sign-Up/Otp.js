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

export default function Otp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

//   inputfocus = (elmnt) => {
//     if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
//       const next = elmnt.target.tabIndex - 2;
//       if (next > -1) {

//         elmnt.target.form.elements[next].focus()
//       }
//     }
//     else {
//       console.log("next");
     
//         const next = elmnt.target.tabIndex;
//         if (next < 5) {
//           elmnt.target.form.elements[next].focus()
//         }
//     }

//   }

  return (
    <div className='otp-wrapper'>
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
                <Typography component="h1" variant="h5" sx={{fontWeight: 600, pb:1, display: 'flex', justifyContent: 'center'}}>
                Enter OTP
                </Typography>
                <Typography component="h1" variant="h5" sx={{ color: 'gray', fontSize: 20 }}>
                Enter Otp to create your account
                </Typography>
          </div>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <div className="otpContainer">

                <input
                name="otp1"
                type="text"
                autoComplete="off"
                className="otpInput"
                // value={this.state.otp1}
                // onKeyPress={this.keyPressed}
                // onChange={e => this.handleChange("otp1", e)}
                // tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                />
                <input
                name="otp2"
                type="text"
                autoComplete="off"
                className="otpInput"
                // value={this.state.otp2}
                // onChange={e => this.handleChange("otp2", e)}
                // tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                />
                <input
                name="otp3"
                type="text"
                autoComplete="off"
                className="otpInput"
                // value={this.state.otp3}
                // onChange={e => this.handleChange("otp3", e)}
                // tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                />
                <input
                name="otp4"
                type="text"
                autoComplete="off"
                className="otpInput"
                // value={this.state.otp4}
                // onChange={e => this.handleChange("otp4", e)}
                // tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                />
            </div>
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address or Phone No"
              name="email"
              autoComplete="email"
              autoFocus
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1, pt:1.5, pb:1.5, fontSize: 18 }}
            >
              Submit
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2, pt:1.5, pb:1.5, fontSize: 18, backgroundColor:'white', color: 'gray', boxShadow: 'none', border: '1px solid #2F93F6'}}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}