import axios from 'axios';

const KEY = 'AIzaSyAYOATV27ZsU0bw1I2K5dJi3fO5bxHuKQE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
