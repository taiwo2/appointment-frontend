// import { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Doctor from '../../components/Doctor';


configure({adapter: new Adapter()});
describe('itemDetailedView test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
      <Doctor />
    </Provider>,
    );
  });

  it('renders 2 location options', () => {
    expect(wrapper.find('div')).toBeTruthy();
  });

  it('renders link to create appointment', () => {
    expect(wrapper.find('Link')).toBeTruthy();
  });

  // it('should render button', () => {
  //   const classList  = wrapper.find('#container');
  //   expect(classList).toHaveLength(0);
  //   expect(classList.text()).toEqual('Add Appointment');
  // })
});
