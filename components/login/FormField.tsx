// components/login/FormField.tsx
import React from 'react';

interface FormFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FormField: React.FC<FormFieldProps> = ({ label, type, value, onChange }) => (
  <div>
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange} required />
  </div>
);

export default FormField;
