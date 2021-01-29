import constructUrl from '.';

describe('constructUrl', () => {
  test('Returns a properly constructed url.', () => {
    const baseUrl = 'https://lcdesigns.co/posts?';
    const queryParams = {
      limit: 10,
      category: 'tech',
    };
    expect(constructUrl(baseUrl, queryParams)).toBe(
      'https://lcdesigns.co/posts?limit=10&category=tech'
    );
  });
});
