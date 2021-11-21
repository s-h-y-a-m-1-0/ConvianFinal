import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Navbar from "../../components/navbar";

import "./styles.css";

const AddForm = () => {
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

  const currencies = [
    {
      value: "Academic",
    },
    {
      value: "Non-Academic",
    },
    {
      value: "Clubs",
    },
    {
      value: "General",
    },
  ];

  return (
    <>
      <Navbar />
      <p className="welcomeText">Create Form</p>
      <FormControl>
        <TextField
          multiline
          sx={{ m: 1, mt: 3, width: "100ch" }}
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={handleChange("amount")}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Subject"
        />
        <TextField
          id="outlined-select-currency"
          select
          sx={{ m: 1, mt: 3, width: "100ch" }}
          label="Domain"
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          multiline
          minRows={10}
          sx={{ m: 1, mt: 3, width: "100ch" }}
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={handleChange("amount")}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Content"
        />
        <Button
          sx={{ width: "150px", marginLeft: "10px" }}
          variant="contained"
          size="large"
        >
          Submit
        </Button>
      </FormControl>
    </>
  );
};

export default AddForm;
