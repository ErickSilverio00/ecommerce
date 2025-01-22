import { TextField } from "@mui/material";
import { useField } from "@unform/core";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import InputMask from "react-input-mask";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

const CampoTexto = ({
  name,
  label,
  variant = "outlined",
  size = "small",
  multiline = false,
  minRows,
  maxRows,
  helperText,
  type,
  fullWidth = true,
  mask,
  style,
  disabled = false,
  isUppercase = false,
  onChange,
  onBlur,
  ...rest
}) => {
  const inputRef = useRef(null);
  const {
    fieldName,
    defaultValue = "",
    registerField,
    error,
    clearError,
  } = useField(name);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: () => {
        return inputRef.current ? inputRef.current.value : "";
      },
      setValue: (ref, value) => {
        setValue(value);
        if (inputRef.current) {
          inputRef.current.value = value;
          inputRef.current.dispatchEvent(new Event("input", { bubbles: true }));
        }
      },
      clearValue: () => {
        setValue("");
        if (inputRef.current) {
          inputRef.current.value = "";
          inputRef.current.dispatchEvent(new Event("input", { bubbles: true }));
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChange = (event) => {
    clearError();
    let { value } = event.target;
    if (isUppercase) value = value.toUpperCase();
    setValue(value);
    if (inputRef.current) inputRef.current.value = value;
    if (onChange) onChange(value);
  };

  const renderTextField = (inputProps) => (
    <TextField
      id={fieldName}
      label={label}
      value={value}
      variant={variant}
      size={size}
      multiline={multiline}
      minRows={minRows}
      maxRows={maxRows}
      inputRef={inputRef}
      sx={{
        ...style,
        fontFamily: fonte,
        "& .MuiInputBase-root": {
          fontFamily: fonte,
        },
        "& .MuiInputLabel-root": {
          fontFamily: fonte,
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: colors.primaria,
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
      helperText={helperText || error}
      type={type}
      error={Boolean(error)}
      fullWidth={fullWidth}
      onChange={handleChange}
      onBlur={onBlur}
      disabled={disabled}
      {...inputProps}
      {...rest}
    />
  );

  return mask ? (
    <InputMask
      mask={mask}
      maskChar=""
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      disabled={disabled}
    >
      {(inputProps) => renderTextField(inputProps)}
    </InputMask>
  ) : (
    renderTextField()
  );
};

CampoTexto.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  multiline: PropTypes.bool,
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  helperText: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  mask: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  isUppercase: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CampoTexto;
