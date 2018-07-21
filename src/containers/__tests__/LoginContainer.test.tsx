import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { LoginContainer } from '..';

test('renders correctly', () => {
  const navigation: any = { navigate: jest.fn() };
  const tree = renderer.create(<LoginContainer navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
