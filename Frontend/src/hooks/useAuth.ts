import { useState } from 'react';

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(
    window.localStorage.getItem('token')
  );

  const setAuthToken = (tokenValue: string) => {
    window.localStorage.setItem('token', tokenValue);
    setToken(tokenValue);
  };

  const getAuthToken = () => {
    return token ?? window.localStorage.getItem('token');
  };

  const logout = () => {
    setToken('');
    window.localStorage.clear();
  };

  return { setAuthToken, getAuthToken, logout };
};
