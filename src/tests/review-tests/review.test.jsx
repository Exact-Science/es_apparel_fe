import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RatingsChartItem from '../../components/review-components/ratings/ratingscharts/ratingschartitem/ratingschartitem.component';
import Form from '../../components/review-components/reviews/form/form.component';
import FactorItem from '../../components/review-components/ratings/factors/factoritem/factoritem.component';

Enzyme.configure({ adapter: new Adapter() });

describe('Ratings chart item', () => {
  test('renders', () => {
    const wrapper = shallow(<RatingsChartItem />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Factor Item component', () => {
  test('renders', () => {
    const wrapper = shallow(<FactorItem />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Form component', () => {
  test('renders', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.exists()).toBe(true);
  });

  test('user text echoed in summary field', () => {
    const wrapper = shallow(<Form handleInputChange={() => {}} />);

    wrapper.find('summary').simulate('change', {
      target: { value: 'testing' },
    });
    expect(wrapper.find('summary').props().value).toEqual('testing');
  });
});
