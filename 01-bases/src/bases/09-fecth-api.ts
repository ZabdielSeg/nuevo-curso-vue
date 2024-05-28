export const API_KEY = 'oPAwtIGXiMQjxL0AycSAC22l5BVYjfG9';
import type {GIFResponse} from '../interfaces/gif.responses'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    .then(res => res.json())
    .then((body: GIFResponse) => console.log(body.data.images.downsized_medium.url))
    .catch(console.info)