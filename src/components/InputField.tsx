import React from "react";
import { FieldError } from "react-hook-form";

type InputFieldType = {
  label: string;
  type?: string;
  register: any;
  name: string; //in register
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};
const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldType) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        className="ring-[1.5px] ring-gray-300 rounded-md text-sm outline-none p-1 w-full"
        {...register(name)}
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-600">{error?.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
