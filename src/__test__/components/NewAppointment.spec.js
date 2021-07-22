import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';
import NewAppointment from '../../components/Appointments';

configure({ adapter: new Adapter() });
describe('itemDetailedView test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <NewAppointment />
      </Provider>,
    );
  });

  it('renders link to create appointment', () => {
        /* eslint-enable */
    let doctorId;
    let loadingDoctors;
    let options;
    const onChangDoctorId = (e) => {
      const doctorId = e.target.value;
      setDoctorId(doctorId);
    };
        /* eslint-enable */
    const header = ( 
      <select className="form-control" id="doctorId" 
        onChange={onChangDoctorId} value={doctorId}>
        {loadingDoctors ? <option>Loading..</option> : options }
      </select>
    );
    expect(wrapper.contains(header)).toBeDefined();
  });
  it('renders link to create appointment', () => {
    expect(wrapper.find('Link')).toBeTruthy();
  });
  it('renders link to create appointment', () => {
    expect(wrapper.find('col-md-12')).toBeTruthy();
  });
});
