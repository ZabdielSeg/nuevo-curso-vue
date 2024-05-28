import axios from "axios";
import { API_KEY } from "./09-fecth-api";
import { GIFResponse } from "../interfaces/gif.responses";

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: API_KEY,
    },
});

// giphyApi
//     .get<GIFResponse>('/random')
//     .then(res => console.log(res.data.data.images))
//     .catch(console.error)