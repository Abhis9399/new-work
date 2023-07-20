import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { DateTimePicker } from '@mui/lab';
import './Multistep.css';
// import { TextField } from '@mui/material';

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

const ComplainSheet = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [slipNo, setSlipNo] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
//   const [date, setDate] = useState(null);
  const [programmerName, setProgrammerName] = useState('');
  const [supervisorName, setSupervisorName] = useState('');
  const [programmer2Name, setProgrammer2Name] = useState('');
  const [labourType, setLabourType] = useState('');
  const [type, setType] = useState('');
  const [timingLimit, setTimingLimit] = useState(null);
  const [totalBags, setTotalBags] = useState('');
  const [totalQuantity, setTotalQuantity] = useState('');
  const [programmers, setProgrammers] = useState([{ name: '' }]);
  const [tendorFields, setTendorFields] = useState([{ name: '', option: '' }]);
  const [privateFields, setPrivateFields] = useState([{ name: '' }]);
  const [itemType, setItemType] = useState('');
  const [subItemType, setSubItemType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [gradeType, setGradeType] = useState('');
  const [grade2Type, setGrade2Type] = useState('');
  const [bagColourType, setBagColourType] = useState('');
  const [bagSizeType, setBagSizeType] = useState('');
  const [noOfBags, setNoOfBags] = useState('');
  const [workType, setWorkType] = useState('');
  const [location, setLocation] = useState('');
  const [plotNo, setPlotNo] = useState('');
  const [remark, setRemark] = useState('');
  const [kantaType, setKantaType] = useState('');

  const [leave, setLeave] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [approveBy, setApproveBy] = useState('');

  const [showPopup, setShowPopup] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    // Perform submission logic here
    // You can access all the form values and perform your desired actions
    console.log('Form submitted!');
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll'}}>
            <TextField
              label="Slip No"
              value={slipNo}
              onChange={(e) => setSlipNo(e.target.value)}
              fullWidth
              style={{padding: '10px', width: '60%'}}
            />
             <TextField
              label="Date"
              value={slipNo}
              onChange={(e) => setSlipNo(e.target.value)}
              fullWidth
              style={{padding: '10px', width: '60%'}}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
          </div>
        );
      case 1:
        return (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll'}}>
            <TextField
              label="Programmer Name"
              value={programmerName}
              onChange={(e) => setProgrammerName(e.target.value)}
              fullWidth
              style={{padding: '10px', width: '60%'}}
            />
            <TextField
              label="Programmer 2 Name"
              value={programmer2Name}
              onChange={(e) => setProgrammer2Name(e.target.value)}
              fullWidth
              style={{padding: '10px', width: '60%'}}
            />
            <TextField
              label="Supervisor Name"
              value={supervisorName}
              onChange={(e) => setSupervisorName(e.target.value)}
              fullWidth
              style={{padding: '10px', width: '60%'}}
            />
            <FormControl fullWidth style={{padding: '10px', width: '60%'}}>
              <InputLabel>Department</InputLabel>
              <Select
                value={labourType}
                onChange={(e) => setLabourType(e.target.value)}
              >
                <MenuItem value="Palledar">Option 1</MenuItem>
                <MenuItem value="Labour">Option 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth style={{padding: '10px', width: '60%'}}>
              <InputLabel>Plant Name</InputLabel>
              <Select
                value={labourType}
                onChange={(e) => setLabourType(e.target.value)}
              >
                <MenuItem value="Palledar">Option 1</MenuItem>
                <MenuItem value="Labour">Option 2</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
    //   case 2:
        // return (
        //   <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll'}}>
        //     <FormControl fullWidth style={{padding: '10px', width: '60%'}}>
        //       <InputLabel>Type</InputLabel>
        //       <Select value={type} onChange={(e) => setType(e.target.value)}>
        //         <MenuItem value="tendor">Tendor</MenuItem>
        //         <MenuItem value="private">Private</MenuItem>
        //       </Select>
        //     </FormControl>
        //     {type === 'tendor' && (
        //       <div style={{width: '40%'}}>
        //         {tendorFields.map((field, index) => (
        //           <Box key={index} sx={{ marginTop: '10px' }}>
        //             <FormControl fullWidth sx={{ padding: '10px'}}>
        //               <InputLabel>Block</InputLabel>
        //               <Select
        //                 value={field.option}
        //                 onChange={(e) => handleTendorFieldOptionChange(e, index)}
        //               >
        //                 <MenuItem value="Option 1">Option 1</MenuItem>
        //                 <MenuItem value="Option 2">Option 2</MenuItem>
        //               </Select>
        //             </FormControl>
        //             <FormControl fullWidth sx={{ padding: '10px'}}>
        //               <InputLabel>Area</InputLabel>
        //               <Select
        //                 value={field.option}
        //                 onChange={(e) => handleTendorFieldOptionChange(e, index)}
        //               >
        //                 <MenuItem value="Option 1">Option 1</MenuItem>
        //                 <MenuItem value="Option 2">Option 2</MenuItem>
        //               </Select>
        //             </FormControl>
        //           </Box>
        //         ))}
        //       </div>
        //     )}
        //     {type === 'private' && (
        //       <div style={{width: '40%'}}>
        //         {privateFields.map((field, index) => (
        //           <Box key={index} sx={{ marginTop: '10px' }}>
        //             <FormControl fullWidth sx={{ padding: '10px'}}>
        //               <InputLabel>Broker Name</InputLabel>
        //               <Select
        //                 value={field.option}
        //                 onChange={(e) => handlePrivateFieldNameChange(e, index)}
        //               >
        //                 <MenuItem value="Option 1">Option 1</MenuItem>
        //                 <MenuItem value="Option 2">Option 2</MenuItem>
        //               </Select>
        //             </FormControl>
        //             <FormControl fullWidth sx={{ padding: '10px'}}>
        //               <InputLabel>Party Name</InputLabel>
        //               <Select
        //                 value={field.option}
        //                 onChange={(e) => handlePrivateFieldNameChange(e, index)}
        //               >
        //                 <MenuItem value="Option 1">Option 1</MenuItem>
        //                 <MenuItem value="Option 2">Option 2</MenuItem>
        //               </Select>
        //             </FormControl>
        //           </Box>
        //         ))}
        //       </div>
        //     )}
        //   </div>
        // );
      case 2:
        return (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll'}}>
            <FormControl fullWidth sx={{padding: '10px', width: '60%'}}>
                      <InputLabel>Person Name</InputLabel>
                      <Select
                        value={itemType}
                        onChange={(e) => setItemType(e.target.value)}
                      >
                        <MenuItem value="Option 1">Option 1</MenuItem>
                        <MenuItem value="Option 2">Option 2</MenuItem>
                      </Select>
            </FormControl>
            <FormControl fullWidth sx={{padding: '10px', width: '60%'}}>
                      <InputLabel>Designation</InputLabel>
                      <Select
                        value={subItemType}
                        onChange={(e) => setSubItemType(e.target.value)}
                      >
                        <MenuItem value="Option 1">Option 1</MenuItem>
                        <MenuItem value="Option 2">Option 2</MenuItem>
                      </Select>
            </FormControl>
            <TextField
              label="Contact No"
              value={programmerName}
              onChange={(e) => setProgrammerName(e.target.value)}
              fullWidth
              style={{padding: '10px', width: '60%'}}
            />
            {/* <FormControl fullWidth sx={{padding: '10px', width: '60%'}}>
                      <InputLabel>Problem</InputLabel>
                      <Select
                        value={bagSizeType}
                        onChange={(e) => setBagSizeType(e.target.value)}
                      >
                        <MenuItem value="Option 1">Option 1</MenuItem>
                        <MenuItem value="Option 2">Option 2</MenuItem>
                      </Select>
            </FormControl> */}
          </div>
        );
        case 3:
            return (
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll'}}>
                  <FormControl fullWidth style={{padding: '10px', width: '60%'}}>
                    <InputLabel>Problem</InputLabel>
                    <Select value={type} onChange={(e) => setType(e.target.value)}>
                      <MenuItem value="leave">Leave</MenuItem>
                      <MenuItem value="holiday">Holiday</MenuItem>
                      <MenuItem value="advance">Advance</MenuItem>
                      <MenuItem value="challan">Challan of Fine</MenuItem>
                      <MenuItem value="labourexchange">Labour Exchange</MenuItem>
                      <MenuItem value="resign">Resign</MenuItem>
                    </Select>
                  </FormControl>
                  {type === 'leave' && (
                    <div style={{width: '40%'}}>
                      {tendorFields.map((field, index) => (
                        <Box key={index} sx={{ marginTop: '10px' }}>
                           <TextField
                            label="From Date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="To Date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Remark"
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Approved By"
                            value={approveBy}
                            onChange={(e) => setApproveBy(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                        </Box>
                      ))}
                    </div>
                  )}
                  {type === 'holiday' && (
                    <div style={{width: '40%'}}>
                      {privateFields.map((field, index) => (
                        <Box key={index} sx={{ marginTop: '10px' }}>
                          <TextField
                            label="From Date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="To Date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Remark"
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Approved By"
                            value={approveBy}
                            onChange={(e) => setApproveBy(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                        </Box>
                      ))}
                    </div>
                  )}
                  {type === 'advance' && (
                    <div style={{width: '40%'}}>
                      {privateFields.map((field, index) => (
                        <Box key={index} sx={{ marginTop: '10px' }}>
                          <TextField
                            label="Amount"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Remark"
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Approved By"
                            value={approveBy}
                            onChange={(e) => setApproveBy(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                        </Box>
                      ))}
                    </div>
                  )}
                  {type === 'challan' && (
                    <div style={{width: '40%'}}>
                      {privateFields.map((field, index) => (
                        <Box key={index} sx={{ marginTop: '10px' }}>
                          <TextField
                            label="Amount"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Photo"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Remark"
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Approved By"
                            value={approveBy}
                            onChange={(e) => setApproveBy(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                        </Box>
                      ))}
                    </div>
                  )}
                  {type === 'labourexchange' && (
                    <div style={{width: '40%'}}>
                      {privateFields.map((field, index) => (
                        <Box key={index} sx={{ marginTop: '10px' }}>
                          <TextField
                            label="Plant Name"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Person"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Designation"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Approved By"
                            value={approveBy}
                            onChange={(e) => setApproveBy(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Remark"
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                        </Box>
                      ))}
                    </div>
                  )}
                  {type === 'resign' && (
                    <div style={{width: '40%'}}>
                      {privateFields.map((field, index) => (
                        <Box key={index} sx={{ marginTop: '10px' }}>
                          <TextField
                            label="From Date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Person"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Designation"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Given Amount"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Approved By"
                            value={approveBy}
                            onChange={(e) => setApproveBy(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                            <TextField
                            label="Remark"
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                            fullWidth
                            style={{padding: '10px', width: '100%'}}
                            />
                        </Box>
                      ))}
                    </div>
                  )}
                </div>
              );
      default:
        return null;
    }
  };

  const handleTendorFieldNameChange = (event, index) => {
    const updatedFields = [...tendorFields];
    updatedFields[index].name = event.target.value;
    setTendorFields(updatedFields);
  };

  const handleTendorFieldOptionChange = (event, index) => {
    const updatedFields = [...tendorFields];
    updatedFields[index].option = event.target.value;
    setTendorFields(updatedFields);
  };

  const handlePrivateFieldNameChange = (event, index) => {
    const updatedFields = [...privateFields];
    updatedFields[index].name = event.target.value;
    setPrivateFields(updatedFields);
  };

  const handleAddTendorField = () => {
    setTendorFields([...tendorFields, { name: '', option: '' }]);
  };

  const handleAddPrivateField = () => {
    setPrivateFields([...privateFields, { name: '' }]);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='multistep'>
     <div className='multistep-main'>
     <div className='group'>
     <div className="detail-header">
            <div className="detail-title">Enter The following Details:</div>
            <div className="separator"></div>
            <div className="x-circle" onClick={() => setShowPopup(true)}>
              <div className="Vector"></div>
            </div>

            {/* for x-circle */}
            {showPopup && (
              <div className="popup">
                <div className="popup-content">
                  <div className="popup-header">Options</div>
                  <div className="popup-body">
                    {/* <div className="popup-option" onClick={handleClosePopup}>
                      Cancel
                    </div> */}
                    <div className="popup-option" onClick={handleClosePopup}>Exit</div>
                    <div className="popup-option">Save</div>
                  </div>
                </div>
              </div>
            )}
     </div>
     <h2>Labour and Staff Complain Sheet</h2>
      <Stepper activeStep={activeStep} alternativeLabel className='steps-num'>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="multi-form">
        {activeStep === steps.length ? (
          <div>
            <p>Form submitted successfully!</p>
            {/* Display submitted form data here */}
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit}>
              {renderStepContent(activeStep)}
              <div className="action-btn">
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                {activeStep !== steps.length - 1 && (
                  <Button variant="contained" onClick={handleNext}>
                    Next
                  </Button>
                )}
                {activeStep === steps.length - 1 && (
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                )}
              </div>
            </form>
          </div>
        )}
        </div>
     
      </div>
      </div>
    </div>
  );
};

export default ComplainSheet;