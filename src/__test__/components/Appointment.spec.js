import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';
import Doctor from '../../components/Doctor';

configure({ adapter: new Adapter() });
describe('itemDetailedView test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Doctor />
      </Provider>,
    );
  });

  /* eslint-disable */

  it('renders 2 location options', () => {
    expect(wrapper.find('div')).toBeTruthy();
  });

  it('renders link to create appointment', () => {
    expect(wrapper.find('Link')).toBeTruthy();
  });

  it('render wjhite', () => {
    let loading;
    const handleClick = () => {
      setLoading(true);
      UserService.deleteAppointment(currentUser.user.id, id).then(() => {
        alert.show('Appointment Deleted', {
          type: 'success',
          timeout: 5000,
        });
        setLoading(false);
        setSuccessful(true);
      });
    };

    /* eslint-enable */

    const header = ( <button className="btn btn-primary btn-block" type="button" onClick={handleClick} disabled={loading}>
    Delete
  </button>);
    expect(wrapper.contains(header)).toBeDefined();
  });
});
