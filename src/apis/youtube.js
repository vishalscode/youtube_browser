import axios from 'axios';

const KEY = 'AIzaSyApqYsGsVcjd-nGYPwyzr-lPZK4fH2kP3o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }
});
