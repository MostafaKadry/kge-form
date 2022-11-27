import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const PersonnelDetails = () => {
      const [value, setValue] = React.useState('female');
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
      };

  return (
     <Stack
      component="form"
      sx={{
        width: '80%',
        m: '2rem auto',
        '& > :not(style)': { m: 1,},
      }}
    >
      <Stack   direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }} sx={{ width: '100%' , '& > :not(style)': { xs: {width: "100%"}, sm: {width: "48%", m: 'auto'}}}}>
      <TextField id="fs_name" label="First Name" variant="standard" required />
      <TextField id="ls_name" label="Last Name" variant="standard" required />
        </Stack>
      <TextField id="contact-num" label="Contact Number" required variant="standard" />
      <TextField id="email" label="Email" required variant="standard" />
      <TextField id="whatsapp" label="Whatsapp" variant="standard" />
      <TextField id="Country " label="Country" required variant="standard" />
      <TextField id="City " label="City" required variant="standard" />
      <FormControl>

      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <Stack direction="row" spacing={2}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        </Stack>
      </RadioGroup>
    </FormControl>
    </Stack>
  )
}

export default PersonnelDetails;