import React from 'react';

interface FormTextAreaProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  subtext?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FormTextArea({
  label,
  name,
  placeholder,
  required = false,
  subtext,
  value,
  onChange
}: FormTextAreaProps) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-lg font-medium mb-1">
        {label} {required && <span className="text-primary-light">*</span>}
      </label>
      {subtext && <p className="text-gray-400 text-sm mb-2">{subtext}</p>}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        rows={4}
        className="w-full px-4 py-3 bg-dark-lighter border border-gray-700 rounded-lg focus:outline-none focus:border-primary-light transition-colors"
      />
    </div>
  );
}