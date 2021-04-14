import axios from "axios";

const KEY = "AIzaSyBZJuJR1tE06EPWr677sGdtLwBETc2Ih5k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    max: 5,
    key: KEY,
  },
});
