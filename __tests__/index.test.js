import reverse from '../src';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olley');
  expect(reverse('')).toEqual('');
});