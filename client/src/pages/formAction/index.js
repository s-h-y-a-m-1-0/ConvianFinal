import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../../components/navbar";

import "./styles.css";

const FormAction = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <>
      <Navbar />
      <p className="welcomeText">Form Action</p>
      <FormControl>
        <p className="label">
          Name: <b>Sample Name</b>
        </p>
        <p className="label">
          Subject: <b>Subject</b>
        </p>
        <TextField
          multiline
          minRows={10}
          sx={{ m: 1, mt: 3, width: "100ch" }}
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={handleChange("amount")}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <div className="buttonContainer">
          <Button
            sx={{ width: "200px", marginLeft: "10px" }}
            variant="contained"
            size="large"
          >
            Save to List
          </Button>
          <Button
            sx={{ width: "200px", marginLeft: "10px" }}
            variant="contained"
            size="large"
          >
            Reply to CR
          </Button>
          <Button
            sx={{ width: "200px", marginLeft: "10px" }}
            variant="contained"
            size="large"
          >
            Reply to Student
          </Button>
        </div>
      </FormControl>
    </>
  );
};

export default FormAction;
