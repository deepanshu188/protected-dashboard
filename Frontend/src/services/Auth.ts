const baseUrl = import.meta.env.VITE_BASE_URL;

export interface iUser {
  username: string;
  password: string;
}

export const userLogin = async (data: iUser) => {
  const res = await fetch(baseUrl + '/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
