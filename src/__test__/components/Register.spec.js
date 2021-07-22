import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';
import Register from '../../components/Register';

configure({ adapter: new Adapter() });
describe('itemDetailedView test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
  });

  it('renders 2 location options', () => {
    expect(wrapper.find('form-group')).toBeTruthy();
  });

  it('renders link to create appointment', () => {
    expect(wrapper.find('Input')).toBeTruthy();
  });

  it('render wjhite', () => {
    let loading;
    const header = (
      <button className="btn btn-primary btn-block" disabled={loading} type="submit">
        {loading && (
        <span className="spinner-border spinner-border-sm" />
        )}
        <span>Sign Up</span>
      </button>
    );
    expect(wrapper.contains(header)).toBeDefined();
  });
});
