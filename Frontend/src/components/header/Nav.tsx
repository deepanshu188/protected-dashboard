import { useAuth } from '../../hooks/useAuth';
import { Button } from '../UI/Button';
import { useNavigate } from 'react-router-dom';

export const Nav = () => {
  const { getAuthToken, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="h-16 shadow-md flex justify-between items-center px-6 py-4 bg-stone-800">
      <h1 className="font-bold text-2xl text-white">App</h1>
      <div className="flex gap-x-2">
        {getAuthToken() ? (
          <Button styles={`w-28`} onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button styles={`w-28`} onClick={() => navigate('/login')}>
            Login
          </Button>
        )}
      </div>
    </nav>
  );
};
