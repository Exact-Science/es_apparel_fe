import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RatingsChartItem from '../../components/review-components/ratings/ratingscharts/ratingschartitem/ratingschartitem.component';
import Form from '../../components/review-components/reviews/form/form.component';


Enzyme.configure({ adapter: new Adapter() });

describe('Ratings chart item', () => {
  test('renders', () => {
    const wrapper = shallow(<RatingsChartItem />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Form component', () => {
  test('renders', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.exists()).toBe(true);
  });

  test('uses default form behavior for validation', () => {
    const wrapper = shallow(<Form />);
    const prevented = false;
    wrapper.find('form').simulate('submit', () => {
      preventDefault: () => {
        prevented = true;
      };
    });
    expect(prevented).toBe(false);
  });
});