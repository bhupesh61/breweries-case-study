import React from 'react';
import BreweriesList from '../src/screens/BreweriesList';
import {render, fireEvent} from '@testing-library/react-native';
import BreweryDetails from '../src/screens/BreweryDetails';
import renderer from 'react-test-renderer';
describe('Breweries Test', () => {
  it('api call once with a url', async () => {
    global.fetch = jest.fn();
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        {
          id: 'alphabet-city-brewing-co-new-york',
          name: 'Alphabet City Brewing Co',
          brewery_type: 'contract',
          street: '96 Avenue C Frnt 4',
          address_2: null,
          address_3: null,
          city: 'New York',
          state: 'New York',
          county_province: null,
          postal_code: '10009-7055',
          country: 'United States',
          longitude: null,
          latitude: null,
          phone: '9143566809',
          website_url: 'http://www.acbnyc.com',
          updated_at: '2022-08-20T02:56:08.975Z',
          created_at: '2022-08-20T02:56:08.975Z',
        },
        {
          id: 'b9-beverages-inc-new-york',
          name: 'B9 Beverages Inc',
          brewery_type: 'contract',
          street: '404 5th Ave # 7.055',
          address_2: null,
          address_3: null,
          city: 'New York',
          state: 'New York',
          county_province: null,
          postal_code: '10018-2797',
          country: 'United States',
          longitude: null,
          latitude: null,
          phone: null,
          website_url: null,
          updated_at: '2022-08-20T02:56:08.975Z',
          created_at: '2022-08-20T02:56:08.975Z',
        },
      ]),
    });
    const tree = render(<BreweriesList />);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.openbrewerydb.org/breweries?by_city=new_york&per_page=10',
    );
  });

  it('search box', () => {
    const {getByPlaceholderText} = render(<BreweriesList />);
    const input = getByPlaceholderText('Search Here');

    fireEvent.changeText(input, 'Alpha');
    expect(input.props.value).toBe('Alpha');
  });

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
