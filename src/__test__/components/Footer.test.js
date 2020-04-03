import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  const footer = mount(<Footer />);
  test('Render del Componente Footer', () => {
    expect(footer.length).toEqual(1);
  });
});
