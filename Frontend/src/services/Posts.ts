const baseUrl = import.meta.env.VITE_BASE_URL;

export const getPosts = async (token: string | null) => {
  const res = await fetch(baseUrl + '/posts', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};
