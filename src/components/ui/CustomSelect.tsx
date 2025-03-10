'use client';

import Select, { StylesConfig } from "react-select";

type OptionType = {
  value: string;
  label: string;
};

interface CustomSelectProps {
  options: OptionType[];
  value?: OptionType | null;
  defaultValue?: OptionType;
  onChange?: (option: OptionType | null) => void;
  placeholder?: string;
  className?: string;
}

const defaultStyles: StylesConfig = {
  control: (base) => ({
    ...base,
    border: "none",
    boxShadow: "none",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    height: "100%",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  }),
  option: (base) => ({
    ...base,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    '&:hover': {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
  }),
};

export default function CustomSelect({
  options,
  value,
  defaultValue,
  onChange,
  placeholder,
  className,
}: CustomSelectProps) {
  return (
    <Select
      options={options}
      value={value}
      defaultValue={defaultValue}
      onChange={(newValue) => {
        onChange?.(newValue as OptionType | null);
      }}
      placeholder={placeholder}
      className={className}
      styles={defaultStyles}
      isClearable
    />
  );
} 