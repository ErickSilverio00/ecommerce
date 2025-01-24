import { useField } from "@unform/core";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { colors } from "../../styles/colors";
import { Container, Error, Label } from "./styles";

const FormSelect = ({
  name,
  options,
  label,
  variant = "outlined",
  size = "small",
  helperText,
  isClearable = false,
  isDisabled = false,
  onChange,
  noLabel = false,
  defaultValue = null,
  ...rest
}) => {
  const selectRef = useRef(null);
  const { fieldName, registerField, error, clearError } = useField(name);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.getValue()) {
            return [];
          }
          return ref.getValue().map((option) => option.value);
        }
        if (!ref.getValue()) {
          return [];
        }
        return ref.getValue().length > 0 ? ref.getValue()[0].value : "";
      },
      setValue: (ref, value) => {
        if (value) {
          if (Array.isArray(value)) {
            const mappedValues = value.map((val) =>
              typeof val === "object"
                ? val
                : options.find((opt) => opt.value === val)
            );
            ref.setValue(mappedValues);
            setSelectedOption(mappedValues);
          } else {
            const singleValue =
              typeof value === "object"
                ? value
                : options.find((opt) => opt.value === value);
            ref.setValue(singleValue);
            setSelectedOption(singleValue);
          }
        } else {
          ref.setValue(null);
          setSelectedOption(null);
        }
      },

      clearValue: () => {
        setSelectedOption(null);
        selectRef.current.clearValue();
      },
    });
  }, [fieldName, selectedOption, rest.isMulti, registerField, options]);

  const handleChange = (option) => {
    clearError();
    setSelectedOption(option);
    if (onChange) onChange(option);
  };

  const handleFocus = (e) => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: error
        ? colors.vermelhoErro
        : state.isFocused
        ? colors.primaria
        : "#ccc",
      "&:hover": {
        borderColor: error ? colors.vermelhoErro : "#888",
      },
      backgroundColor: isDisabled ? "#f9f9f9" : "#fff",
      boxShadow: state.isFocused ? `0 0 0 1px ${colors.primaria}` : "none",
      height: 40,
      maxHeight: 40,
      paddingLeft: 4,
    }),
    option: (base, { isFocused }) => ({
      ...base,
      fontSize: "16px",
      padding: "12px 14px",
      color: colors.preto2,
      backgroundColor: isFocused && colors.primariaOpaca,
      "&:hover": {
        backgroundColor: colors.primariaOpaca,
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: colors.preto2,
      fontSize: "16px",
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
  };

  const isLabelActive = isFocused || selectedOption;

  return (
    <Container>
      {!noLabel && (
        <Label isActive={isLabelActive} isFocused={isFocused} error={error}>
          {label}
        </Label>
      )}
      <Select
        ref={selectRef}
        value={selectedOption}
        options={options}
        isClearable={isClearable}
        isDisabled={isDisabled}
        placeholder=""
        defaultValue={defaultValue}
        menuPlacement="auto"
        menuPortalTarget={document.getElementById("conteudo")}
        styles={customStyles}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      {helperText || error ? <Error>{helperText || error}</Error> : null}
    </Container>
  );
};

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  helperText: PropTypes.string,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.object,
};

export default FormSelect;
