import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';
import Sidebar from '../../components/Sidebar';

configure({ adapter: new Adapter() });
describe('itemDetailedView test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Sidebar />
      </Provider>,
    );
  });

  it('renders 2 location options', () => {
    expect(wrapper.find('div')).toHaveLength(0);
  });

  it('renders link to create appointment', () => {
    expect(wrapper.find('NavLink')).toBeTruthy();
  });
});
