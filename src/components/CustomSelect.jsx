import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Field, ErrorMessage } from 'formik';

const CustomSelect = ({ label, value, onChange, options, name }) => {
    console.log(value,"value")
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="custom-select-label">{label}</InputLabel>
        <Field name={name}>
          {({ field, meta }) => (
            <>
              <Select
                labelId="custom-select-label"
                id="custom-select"
                {...field}
                value={value}
                label={label}
                onChange={onChange}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              <ErrorMessage name={name} component="div" style={{ color: 'red' }} />
            </>
          )}
        </Field>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
