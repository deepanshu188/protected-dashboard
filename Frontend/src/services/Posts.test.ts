import { describe, expect, test, vi } from 'vitest';
import { getPosts } from './Posts';
import { iPost } from '../pages/Dashboard';
const baseUrl = import.meta.env.VITE_BASE_URL;

const token = 'zsepsmaknkksamdkasjdkladnskaldnsakldlna';

const mockPostResponse: iPost[] = [
  {
    id: 1,
    name: 'test user',
    published_at: '2023-12-17T07:18:58.518Z',
    title: 'test post',
    content: 'lorem ipsum',
  },
];

describe('blogPost', () => {
  global.fetch = vi.fn();

  function createFetchResponse(data: iPost[]) {
    return { json: () => new Promise((resolve) => resolve(data)) };
  }

  test('makes a POST request to the login API', async () => {
    fetch.mockResolvedValue(createFetchResponse(mockPostResponse));

    const loginResponse = await getPosts(token);
    1;

    expect(fetch).toHaveBeenCalledWith(baseUrl + '/posts', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    });

    expect(loginResponse).toStrictEqual(mockPostResponse);
  });
});
