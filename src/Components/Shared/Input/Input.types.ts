import { FieldError } from "react-hook-form";

export type InputProps = {
  label: string;
  type: string;
  register: any;
  error?: FieldError;
};
