import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { HomeContainer } from '..';

test('renders correctly', () => {
  const navigation: any = { navigate: jest.fn() };
  const tree = renderer.create(<HomeContainer navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
