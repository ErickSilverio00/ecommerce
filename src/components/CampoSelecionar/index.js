import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export default function CampoSelecionar({
  label,
  value,
  variante,
  width,
  options,
  onChange,
  error,
  flexGrow,
  flexBasis,
  marginBottom,
}) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl
      sx={{
        width: width,
        flexGrow: flexGrow,
        flexBasis: flexBasis,
        marginBottom: marginBottom,
      }}
      size="small"
      error={error}
    >
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        input={<OutlinedInput label={label} />}
        value={value}
        onChange={handleChange}
        sx={{
          fontFamily: fonte,
          "& .MuiInputBase-root": {
            fontFamily: fonte,
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: colors.primaria,
            },
          "& .MuiFormHelperText-root": {
            fontFamily: fonte,
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && (
        <p
          style={{
            color: colors.vermelho,
            margin: 0,
            marginTop: 2,
            marginLeft: 16,
            fontSize: 12,
          }}
        >
          {error}
        </p>
      )}
    </FormControl>
  );
}
