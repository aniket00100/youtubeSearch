import axios from "axios";

const KEY = "AIzaSyD9ouzWRaBYWjX4r4Ij0kLd2tDcQ_1KEZ8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    maxResults: 5,
    part: "snippet",
    safeSearch: "none",
    type: "video",
    key: KEY
  }
});
