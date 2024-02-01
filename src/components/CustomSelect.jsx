import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Field, ErrorMessage } from 'formik';

const CustomSelect = ({ label, value, options, name }) => {
  console.log(value,"value")
  return (
    <Box sx={{ width: '100%' }}>
    <FormControl fullWidth>
      <InputLabel id="custom-select-label">{label}</InputLabel>
      <Field name={name}>
        {({ field, meta }) => (
          <>
            <Select
              labelId="custom-select-label"
              id="custom-select"
              {...field}
              label={label}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <ErrorMessage className='text-sm' name={name} component="div" style={{ color: 'red' }} />
          </>
        )}
      </Field>
    </FormControl>
  </Box>
  );
};

export default CustomSelect;
