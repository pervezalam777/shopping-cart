import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import BrandCard from '../../brandCard/BrandCard';

const props = {
  values:[
    {value:'#00ff00', title:'color1'},
    {value:'#00ffff', title:'color2'},
    {value:'#ffff00', title:'color3'},
    {value:'#ffffff', title:'color4'},
    {value:'#ff0000', title:'color5'}
  ],
  handleChange: jest.fn(),
  selectedBrands:['#00ffff']
}

describe('Brand card', () => { 
  it('should render', () => {
    const wrapper = shallow(<BrandCard {...props} />)
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h3').contains('Brand')).toBe(true);
    expect(wrapper.find('BrandComponent').length).toBe(5);

    expect(wrapper.find('BrandComponent').get(0).props.selected).toBe(false);
    expect(wrapper.find('BrandComponent').get(1).props.selected).toBe(true);
  })
})