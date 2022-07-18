import axios from 'axios';

const userTasks = async (email) => {

    const api = axios.create({
        baseURL: `http://localhost:3000/api/task`,
    });
    const response = await api.get(`/?email=${email}`);
    const { data } = response.data;
    return data;

};

export default userTasks;
