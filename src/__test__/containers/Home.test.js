import React from 'react';
import { create } from 'react-test-renderer';
import Home from '../../containers/Home';

describe('Home Snapshot', () => {
  test('Comprobar la UI del container Home', () => {
    const home = create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
  });
});
