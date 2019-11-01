import React from "react";
import TextField from "@material-ui/core/TextField";

const TextField = ({ width,value, ...props }) => {

  return (
    <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue={value}
      margin="normal"
      variant="outlined"
    />
  );
};


export default TextField;