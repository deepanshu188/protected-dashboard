import { describe, expect, test, vi } from 'vitest';
import { userLogin } from './Auth';
const baseUrl = import.meta.env.VITE_BASE_URL;

const mockPostResponse = {
  token: 'zsepsmaknkksamdkasjdkladnskaldnsakldlna',
};

const mockPayload = {
  username: 'test',
  password: '123345',
};

describe('blogPost', () => {
  global.fetch = vi.fn();

  function createFetchResponse(data) {
    return { json: () => new Promise((resolve) => resolve(data)) };
  }

  test('makes a POST request to the login API', async () => {
    fetch.mockResolvedValue(createFetchResponse(mockPostResponse));

    const loginResponse = await userLogin(mockPayload);

    expect(fetch).toHaveBeenCalledWith(baseUrl + '/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(mockPayload),
    });

    expect(loginResponse).toStrictEqual(mockPostResponse);
  });
});
