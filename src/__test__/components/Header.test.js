import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from '../../components/Header';

describe('<Header/>', () => {
  const header = mount(<Header />);
  test('Render del Componente Header', () => {
    expect(header.length).toEqual(1);
  });
  test('Render del menú de navegación', () => {
    const headerMenu = shallow(<Header />);
    expect(headerMenu.find('.header__nav').length).toBe(1);
  });
  test('Render del menú usuario', () => {
    expect(header.find('.header__user').text()).toEqual('Username');
  });
});
