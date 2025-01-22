import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useField } from "@unform/core";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import React, { useEffect, useRef } from "react";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export default function DateTimePicker({
  name,
  label,
  minDate,
  maxDate,
  disableFuture = false,
  disablePast = false,
  disabled = false,
  value,
  onChange,
}) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref) => {
        return ref?.value ? dayjs(ref.value).toDate() : "";
      },
      setValue: (ref, value) => {
        if (ref) {
          ref.value = value ? dayjs(value).format("YYYY-MM-DD") : "";
        }
      },
      clearValue: (ref) => {
        if (ref) {
          ref.value = "";
        }
      },
    });
  }, [fieldName, registerField]);

  const handleDateChange = (newValue) => {
    onChange?.(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <DatePicker
        label={label}
        value={value ? dayjs(value) : null}
        onChange={handleDateChange}
        minDate={minDate}
        maxDate={maxDate}
        disableFuture={disableFuture}
        disablePast={disablePast}
        disabled={disabled}
        slotProps={{
          openPickerButton: { size: "small" },
          textField: {
            variant: "outlined",
            size: "small",
            error: !!error,
            helperText: error,
          },
        }}
        inputFormat="DD/MM/YYYY"
        sx={{
          "& .MuiInputLabel-root": {
            fontFamily: fonte,
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: colors.primaria,
            fontFamily: fonte,
          },
          "& .MuiOutlinedInput-root": {
            fontFamily: fonte,
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: colors.primaria,
            },
          "& .MuiIconButton-root:hover": {
            color: colors.primaria,
          },
          "& .MuiFormHelperText-root": {
            fontFamily: fonte,
          },
        }}
        renderInput={(params) => (
          <input
            ref={inputRef}
            {...params.inputProps}
            style={{
              fontFamily: fonte,
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
