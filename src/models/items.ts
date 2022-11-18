import { searchMinifigs, IConfig, IMinifig } from "./";
import axios from "axios";

const rebrickableAPI: string = "https://rebrickable.com/api/v3"

const config: IConfig = {
    headers: {Authorization: `key 1ee756298eed60e08f942ba4bb82419e`},
}

export interface IRes {
    isError: boolean
    message?: string
    minifigs: Array<IMinifig>
}

export const getMultipleRandom = (arr: Array<IMinifig>, num: number): Array<IMinifig> => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}

export const getMinifigs = async (): Promise<IRes> => {
    const response = await searchMinifigs(rebrickableAPI, config, 'Harry Potter')

    if (axios.isAxiosError(response)) {
        return {
            isError: true,
            minifigs: [],
            message: response.message
        }
    } else {
        return {
            isError: false,
            minifigs: response.results && response.results.length ? getMultipleRandom(response.results, 3) : [],
            message: response.results && !response.results.length ? 'No minifigs found' : ''
        }
    }

}
  