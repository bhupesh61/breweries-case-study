import React from 'react';
import BreweryDetails from '../src/screens/BreweryDetails';
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react-native';
afterEach(cleanup);

describe('Brewery Details', () => {
  it('Brewery Details screen has 1 child', () => {
    const route = {
      params: {
        name: 'abc',
      },
    };

    const tree = renderer.create(<BreweryDetails route={route} />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
