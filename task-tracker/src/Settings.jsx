import React from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Settings = () => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Theme"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={<Switch />}
        label="Dark Mode"
        sx={{ mt: 1 }}
      />
    </div>
  );
};

export default Settings;
