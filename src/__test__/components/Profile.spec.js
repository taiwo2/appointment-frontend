import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import Profile from '../../components/Profile';
import store from '../../store';


configure({ adapter: new Adapter() });
describe('itemDetailedView test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
  });

  it('renders 2 location options', () => {
    expect(wrapper.find('div')).toHaveLength(0);
  });

  it('renders link to create appointment', () => {
    expect(wrapper.find('Link')).toHaveLength(0);
  });
});
