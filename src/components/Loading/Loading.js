import React, { useState } from 'react';
// import './Loading.css';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from '@mui/material';
import { KeyboardDatePicker } from '@material-ui/pickers';

const Loading = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [slipNo, setSlipNo] = useState('');
  const [date, setDate] = useState(null);
  const [programmerName, setProgrammerName] = useState('');
  const [supervisorName, setSupervisorName] = useState('');
  const [programmer2Name, setProgrammer2Name] = useState('');
  const [labourType, setLabourType] = useState('Palledar');
  const [type, setType] = useState('');
  const [timingLimit, setTimingLimit] = useState(null);

  const steps = ['Step 1', 'Step 2', 'Step 3']; // Replace with your own step labels

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSlipNoChange = (event) => {
    setSlipNo(event.target.value);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleProgrammerNameChange = (event) => {
    setProgrammerName(event.target.value);
  };

  const handleSupervisorNameChange = (event) => {
    setSupervisorName(event.target.value);
  };

  const handleProgrammer2NameChange = (event) => {
    setProgrammer2Name(event.target.value);
  };

  const handleLabourTypeChange = (event) => {
    setLabourType(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleTimingLimitChange = (newTimingLimit) => {
    setTimingLimit(newTimingLimit);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <p>All steps completed</p>
          </div>
        ) : (
          <div className='input-fields-div'>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

    
            {/* <p>Step {activeStep + 1}</p> */}
            {activeStep === 0 && (
              <div>
                <TextField
                  label="Slip No"
                  value={slipNo}
                  onChange={handleSlipNoChange}
                />
                {/* <KeyboardDatePicker
                  label="Date"
                  value={date}
                  onChange={handleDateChange}
                  format="MM/dd/yyyy"
                /> */}
              </div>
            )}
            {activeStep === 1 && (
              <div>
                <TextField
                  label="Programmer Name"
                  value={programmerName}
                  onChange={handleProgrammerNameChange}
                />
                <TextField
                  label="Supervisor Name"
                  value={supervisorName}
                  onChange={handleSupervisorNameChange}
                />
                <TextField
                  label="Programmer 2 Name"
                  value={programmer2Name}
                  onChange={handleProgrammer2NameChange}
                />
                <FormControl>
                  <InputLabel>Type of Labour</InputLabel>
                  <Select
                    value={labourType}
                    onChange={handleLabourTypeChange}
                  >
                    <MenuItem value="Palledar">Palledar</MenuItem>
                    <MenuItem value="Labour">Labour</MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}
            {activeStep === 2 && (
              <div>
                <FormControl>
                  <InputLabel>Type</InputLabel>
                  <Select value={type} onChange={handleTypeChange}>
                    <MenuItem value="Tendor">Tendor</MenuItem>
                    <MenuItem value="Private">Private</MenuItem>
                  </Select>
                </FormControl>
                {/* <KeyboardDatePicker
                  label="Timing Limit"
                  value={timingLimit}
                  onChange={handleTimingLimitChange}
                  format="MM/dd/yyyy"
                /> */}
              </div>
            )}
            </Box>
            <div className='form-buttons'>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
                </Button>
                <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loading;

// import React, { useState } from "react";
// import SignUpInfo from "./SignUpInfo";
// import PersonalInfo from "./PersonalInfo";
// import OtherInfo from "./OtherInfo";
// import './Loading.css'
// import FourthInfo from "./FourthInfo";
// import FifthInfo from "./FifthInfo";

// function Loading() {
//   const [page, setPage] = useState(0);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     firstName: "",
//     lastName: "",
//     username: "",
//     nationality: "",
//     other: "",
//   });

//   const FormTitles = ["Sign Up", "Personal Info", "Other", 'fourthInfo', 'FifthInfo'];

//   const PageDisplay = () => {
//     if (page === 0) {
//       return <OtherInfo formData={formData} setFormData={setFormData} />;
//       // return <SignUpInfo formData={formData} setFormData={setFormData} />;
//     } else if (page === 1) {
//       return <PersonalInfo formData={formData} setFormData={setFormData} />;
//     } else if (page === 2){
//       return <SignUpInfo formData={formData} setFormData={setFormData} />;
//     } else if (page === 3) {
//       return <FourthInfo formData={formData} setFormData={setFormData} />;
//     } else {
//       return <FifthInfo formData={formData} setFormData={setFormData} />;
//     }
//   };

//   return (
//     <div className="form">
//       <div className="progressbar">
//         <div
//           style={{ width: page === 0 ? "20%" : page == 1 ? "40%" : page == 2 ? "60%": page == 3 ? "80%": '100%' }}
//         ></div>
//       </div>
//       <div className="form-container">
//         <div className="header" style={{display: "flex", justifyContent: "center"}}>
//           <h1>Material Loading</h1>
//         </div>
//         <div className="body" style={{overflow: 'scroll'}}>{PageDisplay()}</div>
//         <div className="footer">
//           <button
//             disabled={page == 0}
//             onClick={() => {
//               setPage((currPage) => currPage - 1);
//             }}
//           >
//             Prev
//           </button>
//           <button
//             onClick={() => {
//               if (page === FormTitles.length - 1) {
//                 alert("FORM SUBMITTED");
//                 console.log(formData);
//               } else {
//                 setPage((currPage) => currPage + 1);
//               }
//             }}
//           >
//             {page === FormTitles.length - 1 ? "Submit" : "Next"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Loading;