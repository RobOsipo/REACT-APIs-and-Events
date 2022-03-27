import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: `Client-ID DdqJHbVaOgtAz5bDx51dKLhW13yf9Llo0ohaun742s4`,
    }
})