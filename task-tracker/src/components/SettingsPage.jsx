import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SettingsPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveSettings = () => {
    // Add logic to save settings
    console.log(`Saving settings for ${username} with email ${email}`);
  };

  return (
    <div>
      <h2>Settings</h2>
      <TextField
        label="Username"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button variant="contained" onClick={handleSaveSettings}>Save</Button>
    </div>
  );
};

export default SettingsPage;
