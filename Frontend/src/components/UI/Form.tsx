import { Button } from './Button';
import { Input } from './Input';
import { useMutation } from 'react-query';
import { userLogin } from '../../services/Auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface iCredentials {
  username: string;
  password: string;
}

export const Form = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { mutate: loginUser, isLoading } = useMutation({
    mutationFn: userLogin,
    onSuccess: async ({ token }) => {
      if (token) {
        auth.setAuthToken(token);
        navigate('/dashboard');
      }
    },
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const credentials: iCredentials = { username: '', password: '' };
    const userData = new FormData(e.target as HTMLFormElement);

    for (const [key, value] of userData.entries()) {
      credentials[key] = value;
    }
    loginUser(credentials);
  };

  return (
    <div className="w-96 shadow-2xl p-8">
      <p className="my-4 text-2xl font-bold text-center">Login</p>
      <form
        className="flex flex-col w-[90%] gap-4 m-auto"
        onSubmit={handleSubmit}
      >
        <Input
          name="username"
          label="Username"
          placeholder="username"
        />
        <Input
          name="password"
          label="Password"
          placeholder="password"
        />
        <Button loading={isLoading}>Login</Button>
      </form>
    </div>
  );
};
