import React from 'react';

interface FormCheckboxProps {
  label: React.ReactNode;
  name: string;
  required?: boolean;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormCheckbox({
  label,
  name,
  required = false,
  checked,
  onChange
}: FormCheckboxProps) {
  return (
    <div className="mb-4 flex items-start gap-3">
      <input
        type="checkbox"
        id={name}
        name={name}
        required={required}
        checked={checked}
        onChange={onChange}
        className="mt-1.5 h-4 w-4 rounded border-gray-700 bg-dark-lighter text-primary-light focus:ring-primary-light"
      />
      <label htmlFor={name} className="text-sm text-gray-300">
        {label} {required && <span className="text-primary-light">*</span>}
      </label>
    </div>
  );
}