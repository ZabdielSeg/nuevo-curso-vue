import { GIFResponse } from "../interfaces/gif.responses";
import { giphyApi } from "./10-axios";

export const getImage = async () => {
    const resp = await giphyApi.get<GIFResponse>('random');

    return resp.data
}

getImage().then(res => console.log(res))