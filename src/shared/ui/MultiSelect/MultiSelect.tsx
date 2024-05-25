/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from 'react-select';
import classes from './MultiSelect.module.css';

interface MultiSelectProps {
  name: string;
  value: any;
  placeholder: string;
  options: any[];
  onChange: (e: any) => void;
  errors: any;
}

export const MultiSelect = ({
  onChange,
  options,
  placeholder,
  value,
  name,
  errors,
}: MultiSelectProps) => (
  <Select
    value={value}
    name={name}
    onChange={onChange}
    options={options}
    isMulti
    placeholder={placeholder}
    className={errors ? classes.error : ''}
    components={{
      IndicatorSeparator: () => null,
    }}
    styles={{
      control: (baseStyles) => ({
        ...baseStyles,
        width: '560px',
        height: '64px',
        borderRadius: '20px',
        border: 0,
        boxShadow: 'black',
        backgroundColor: '#E5E7EB',
        padding: '0 10px',
        fontWeight: 500,
      }),
      multiValue: (baseStyles) => ({
        ...baseStyles,
        backgroundColor: '#E5E7EB',
        fontSize: '18px',
      }),
      menu: (baseStyles) => ({
        ...baseStyles,
        backgroundColor: '#F3F4F6',
        borderRadius: '20px',
        fontWeight: 500,
      }),
      option: (baseStyles) => ({
        ...baseStyles,
        borderRadius: '20px',
      }),
      placeholder: (baseStyles) => ({
        ...baseStyles,
        color: '#9CA3AF',
      }),
    }}
  />
);
