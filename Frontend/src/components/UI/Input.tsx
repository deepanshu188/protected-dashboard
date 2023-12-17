interface iInputProps {
  placeholder?: string;
  label?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<iInputProps> = ({
  placeholder,
  onChange,
  label,
  name,
}) => {
  return (
    <label className="text-sm">
      {label}
      <input
        className="border border-gray-300 outline-blue-400 rounded-md p-2 w-full"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </label>
  );
};
