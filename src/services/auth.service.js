import axios from 'axios';

const API_URL = 'https://cryptic-tundra-42414.herokuapp.com/';

// const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://cryptic-tundra-42414.herokuapp.com/';

const register = (name, email, password) => axios.post(`${API_URL}api/v1/users`, {
  name,
  email,
  password,
})
  .then((response) => {
    if (response.data.jwt) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response;
  });

const login = (email, password) => axios
  .post(`${API_URL}login`, {
    email,
    password,
  })
  .then((response) => {
    if (response.data.jwt) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
