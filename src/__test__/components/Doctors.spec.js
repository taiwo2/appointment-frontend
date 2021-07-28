import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import Doctors from '../../components/Doctors';
import store from '../../store';

configure({ adapter: new Adapter() });
describe('itemDetailedView test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Doctors />
      </Provider>,
    );
  });

  it('renders link to create appointment', () => {
    const header = (<p className="text-secondary">Please select a doctor to view details</p>);
    expect(wrapper.contains(header)).toEqual(false);
  });
  it('renders link to create appointment', () => {
    const header = (<h3>LIST OF DOCTORS</h3>);
    expect(wrapper.contains(header)).toBeFalsy();
  });
});
