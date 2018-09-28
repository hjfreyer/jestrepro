
test('repro', () => {
  while (true) {
    console.log('foo');
  }
  expect('foo').toEqual('bar');
});
