import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-app-a9a46-default-rtdb.firebaseio.com/'
});

export default instance;