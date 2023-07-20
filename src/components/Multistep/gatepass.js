import React, { useState } from "react";
import { useEffect } from "react";
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
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { DateTimePicker } from "@mui/lab";
import "./Multistep.css";
// import { TextField } from '@mui/material';

// const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5' ,'Step 6' ,'Step 7' ,'Step 8'];

const GatePass = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [slipNo, setSlipNo] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState(null);
  const [TruckType, setTruckType] = useState("");
  const [plotNo, setPlotNo] = useState("");
  const [locationNo, setLocationNo] = useState("");
  const [truckNo, setTruckNo] = useState("");
  const [truckWork, setTruckWork] = useState("");
  const [programmerName, setProgrammerName] = useState("");
  const [programmerName2, setProgrammerName2] = useState("");
  const [supervisorName, setSupervisorName] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [showStep2, setShowStep2] = useState(false);
  const [truckWeight, setTruckWeight] = useState("");
  const [driverName, setDriverName] = useState("");
  const [driverNo, setDriverNo] = useState("");
  const [remark, setRemark] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [truckWorkType, setTruckWorkType] = useState("");
  const [steps, setSteps] = useState([
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
    "Step 5",
    "Step 6",
    "Step 7",
    "Step 8",
  ]);

  const [type, setType] = useState("");
  const [timingLimit, setTimingLimit] = useState(null);
  const [totalBags, setTotalBags] = useState("");
  const [tendorFields, setTendorFields] = useState([{ name: "", option: "" }]);
  const [privateFields, setPrivateFields] = useState([{ name: "" }]);
  const [itemName, setItemName] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [units, setUnits] = useState("");

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
    console.log("Form submitted!");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleTruckTypeChange = (e) => {
    setTruckType(e.target.value);
    if (e.target.value == "own") {
      setSteps(["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]);
    } else {
      setSteps([
        "Step 1",
        "Step 2",
        "Step 3",
        "Step 4",
        "Step 5",
        "Step 6",
        "Step 7",
        "Step 8",
      ]);
    }
  };

  useEffect(() => {
    if (activeStep === 0) {
      setSelectedType("");
    }
  }, [activeStep]);

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxHeight: "85%",
              height: "250px",
              overflowY: "scroll",
            }}
          >
            <TextField
              label="Slip No"
              value={slipNo}
              onChange={(e) => setSlipNo(e.target.value)}
              fullWidth
              style={{ padding: "10px", width: "60%" }}
            />
            <TextField
              label="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
              style={{ padding: "10px", width: "60%" }}
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxHeight: "85%",
              height: "250px",
              overflowY: "scroll",
            }}
          >
            <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
              <InputLabel>Truck Type:</InputLabel>
              <Select
                value={TruckType}
                onChange={(e) => handleTruckTypeChange(e)}
              >
                <MenuItem value="own">Own</MenuItem>
                <MenuItem value="outside">Outside</MenuItem>
              </Select>
            </FormControl>
          </div>
        );

      case 2:
        if (TruckType == "own") {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxHeight: "85%",
                height: "250px",
                overflowY: "scroll",
              }}
            >
              <TextField
              label="Truck No"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
              style={{ padding: "10px", width: "60%" }}
            />
              <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
                <InputLabel>Driver Name:</InputLabel>
                <Select
                  value={supervisorName}
                  onChange={(e) => setSupervisorName(e.target.value)}
                >
                  <MenuItem value="none">None</MenuItem>
                </Select>
              </FormControl>
            </div>
          );
        } else {
          // case 2:
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxHeight: "85%",
                height: "250px",
                overflowY: "scroll",
              }}
            >
              <TextField
              label="Truck No"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
              style={{ padding: "10px", width: "60%" }}
            />
              {/* <TextField
                label="Driver Name"
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
                fullWidth
                style={{ padding: "10px", width: "60%" }}
              /> */}
              <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
                <InputLabel>Driver Name:</InputLabel>
                <Select
                  value={driverName}
                  onChange={(e) => setDriverName(e.target.value)}
                >
                  <MenuItem value="none">None</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Remark"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                fullWidth
                style={{ padding: "10px", width: "60%" }}
              />
            </div>
          );
        }
      case 5:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxHeight: "85%",
              height: "250px",
              overflowY: "scroll",
            }}
          >
            <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
              <InputLabel>Work Type</InputLabel>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="tendor">Tendor</MenuItem>
                <MenuItem value="private">Private</MenuItem>
              </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Timing Limit"
                value={timingLimit}
                onChange={(newValue) => setTimingLimit(newValue)}
                renderInput={(params) => <TextField {...params} />}
                fullWidth
              />
            </LocalizationProvider>
          </div>
        );
      case 3:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxHeight: "85%",
              height: "250px",
              overflowY: "scroll",
            }}
          >
            <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
              <InputLabel>Plot No:</InputLabel>
              <Select
                value={plotNo}
                onChange={(e) => setPlotNo(e.target.value)}
              >
                <MenuItem value="plot1">Plot 1</MenuItem>
                <MenuItem value="plot2">Plot 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
              <InputLabel>Location No:</InputLabel>
              <Select
                value={locationNo}
                onChange={(e) => setLocationNo(e.target.value)}
              >
                <MenuItem value="none">None</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
      case 4:
        if (TruckType == "own") {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxHeight: "85%",
                height: "250px",
                overflowY: "scroll",
              }}
            >
              <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
                <InputLabel>Programmer Name:</InputLabel>
                <Select
                  value={programmerName}
                  onChange={(e) => setProgrammerName(e.target.value)}
                >
                  <MenuItem value="none">None</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
                <InputLabel>Programmer Name2:</InputLabel>
                <Select
                  value={programmerName2}
                  onChange={(e) => setProgrammerName2(e.target.value)}
                >
                  <MenuItem value="none">None</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
                <InputLabel>Supervisor Name:</InputLabel>
                <Select
                  value={programmerName2}
                  onChange={(e) => setProgrammerName2(e.target.value)}
                >
                  <MenuItem value="none">None</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Remark"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                fullWidth
                style={{ padding: "10px", width: "60%" }}
              />
            </div>
          );
        } 
        else {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxHeight: "85%",
                height: "250px",
                overflowY: "scroll",
              }}
            >
              <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
                <InputLabel>Material Type:</InputLabel>
                <Select
                  value={materialType}
                  onChange={(e) => setMaterialType(e.target.value)}
                >
                  <MenuItem value="none">None</MenuItem>
                  <MenuItem value="material">Material </MenuItem>
                  <MenuItem value="raw_material">Raw Material </MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
                <InputLabel>Truck Work Type</InputLabel>
                <Select
                  value={truckWorkType}
                  onChange={(e) => setTruckWorkType(e.target.value)}
                >
                  <MenuItem value="none">None</MenuItem>
                  <MenuItem value="loading">Loading</MenuItem>
                  <MenuItem value="unloading">Unloading</MenuItem>
                  <MenuItem value="transfer">Transfer</MenuItem>
                </Select>
              </FormControl>
            </div>
          );
        }
        
      case 6:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxHeight: "85%",
              height: "250px",
              overflowY: "scroll",
            }}
          >
            <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
              {type === "tendor" && (
                <div>
                  {tendorFields.map((field, index) => (
                    <Box key={index} sx={{ marginTop: "10px" }}>
                      <FormControl fullWidth>
                        <InputLabel>Block</InputLabel>
                        <Select
                          value={field.block}
                          onChange={(e) =>
                            handleTendorFieldOptionChange(e, index)
                          }
                        >
                          <MenuItem value="Option 1">Option 1</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel>Area</InputLabel>
                        <Select
                          value={field.area}
                          onChange={(e) =>
                            handleTendorFieldOptionChange(e, index)
                          }
                        >
                          <MenuItem value="Option 1">Option 1</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  ))}
                </div>
              )}
              {type === "private" && (
                <div>
                  {privateFields.map((field, index) => (
                    <Box key={index} sx={{ marginTop: "10px" }}>
                      {truckWorkType === 'loading' && (
                            <FormControl fullWidth>
                            <InputLabel>Part Name</InputLabel>
    
                            <Select
                              value={field.party_name}
                              onChange={(e) =>
                                handlePrivateFieldNameChange(e, index)
                              }
                            >
                              <MenuItem value="Option 1">Option 1</MenuItem>
                            </Select>
                          </FormControl>
                      )}
                      {truckWorkType === 'unloading' && (
                            <FormControl fullWidth>
                            <InputLabel>Vendor Name</InputLabel>
    
                            <Select
                              value={field.party_name}
                              onChange={(e) =>
                                handlePrivateFieldNameChange(e, index)
                              }
                            >
                              <MenuItem value="Option 1">Option 1</MenuItem>
                            </Select>
                          </FormControl>
                      )}
                    </Box>
                  ))}
                </div>
              )}
            </FormControl>

            <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
              <InputLabel>Item Name:</InputLabel>
              <Select
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              >
                <MenuItem value="none">None</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              fullWidth
              style={{ padding: "10px", width: "60%" }}
            />

            <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
              <InputLabel>Units </InputLabel>
              <Select value={units} onChange={(e) => setUnits(e.target.value)}>
                <MenuItem value="quantal" selected>
                  Quantal
                </MenuItem>
                <MenuItem value="tons">Tons</MenuItem>
                <MenuItem value="kg">Kg</MenuItem>
              </Select>
            </FormControl>
            {materialType === 'material' &&
                <TextField
                label="Total Bags"
                value={totalBags}
                onChange={(e) => setTotalBags(e.target.value)}
                fullWidth
                style={{ padding: "10px", width: "60%" }}
              />
              
            }
          </div>
        );
      case 7:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxHeight: "85%",
              height: "250px",
              overflowY: "scroll",
            }}
          >
            <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
              <InputLabel>Programmer Name:</InputLabel>
              <Select
                value={programmerName}
                onChange={(e) => setProgrammerName(e.target.value)}
              >
                <MenuItem value="none">None</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
              <InputLabel>Programmer Name2:</InputLabel>
              <Select
                value={programmerName2}
                onChange={(e) => setProgrammerName2(e.target.value)}
              >
                <MenuItem value="none">None</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ padding: "10px", width: "60%" }}>
              <InputLabel>Guard Name</InputLabel>
              <Select
                value={programmerName2}
                onChange={(e) => setProgrammerName2(e.target.value)}
              >
                <MenuItem value="none">None</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Remark"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              fullWidth
              style={{ padding: "10px", width: "60%" }}
            />
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
    setTendorFields([...tendorFields, { name: "", option: "" }]);
  };

  const handleAddPrivateField = () => {
    setPrivateFields([...privateFields, { name: "" }]);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="multistep">
      <div className="multistep-main">
        <div className="group">
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
                    <div className="popup-option" onClick={handleClosePopup}>
                      Exit
                    </div>
                    <div className="popup-option">Save</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <h2>Gate Pass</h2>
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            className="steps-num"
          >
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

export default GatePass;
