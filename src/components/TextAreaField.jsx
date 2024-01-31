import React from "react";
import { TextField } from "@mui/material";

const TextAreaField = ({ name, label, rows, defaultValue }) => {
    return (
        <div className="mb-4 w-[24rem] md:w-[28rem]">
            <TextField
                id={name}
                label={label}
                multiline
                rows={rows}
                defaultValue={defaultValue}
                variant="outlined"
                fullWidth
                className="rounded-full"
            />
        </div>
    );
};

export default TextAreaField;
