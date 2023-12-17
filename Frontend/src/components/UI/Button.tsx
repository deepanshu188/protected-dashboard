import { ReactNode } from 'react';

interface iButtonProps {
  children: ReactNode;
  styles?: string;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<iButtonProps> = ({
  children,
  styles,
  loading,
  onClick,
}) => {
  return (
    <button
      disabled={loading}
      className={`text-white p-2 rounded-md ${
        loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-500'
      } ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
