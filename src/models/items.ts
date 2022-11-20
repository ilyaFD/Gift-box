import axios from "axios";
import { getMinifigsAPI, getPartsAPI } from "./";
import { IConfig, IMinifig, IMinifigsRes, IPartsRes } from "../types";

const rebrickableAPI: string = "https://rebrickable.com/api/v3"
const config: IConfig = {
    headers: {Authorization: `key 1ee756298eed60e08f942ba4bb82419e`},
}


// Check if item exist parts
export const isExistParts = (items: Array<IMinifig>, setNum: string): boolean => {
    const activeItem = items.find(item => item.set_num === setNum)
    return !!activeItem?.parts?.length
}


// 3 Defining 3 random array elements
export const getMultipleRandom = (arr: Array<IMinifig>, num: number): Array<IMinifig> => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}


// Requests data, returns a response object
export const getMinifigs = async (): Promise<IMinifigsRes> => {
    const response = await getMinifigsAPI(rebrickableAPI, config, 'Harry Potter')

    if (axios.isAxiosError(response)) {
        return {
            isError: true,
            message: response.message,
            minifigs: []
        }
    } else {
        return {
            isError: false,
            message: response.results && !response.results.length ? 'No minifigs found' : '',
            minifigs: response.results && response.results.length ? response.results : []
        }
    }
}


// Requests data, returns a response object
export const getParts = async (setNum: string): Promise<IPartsRes> => {
    const response = await getPartsAPI(rebrickableAPI, config, setNum)

    if (axios.isAxiosError(response)) {
        return {
            isError: true,
            message: response.message,
            parts: []
        }
    } else {
        return {
            isError: false,
            message: response.results && !response.results.length ? 'No parts found' : '',
            parts: response.results && response.results.length ?
                response.results.map(
                    ({part, set_num}: {part: any, set_num: string}) => (
                        {
                            name: part.name,
                            partNum: part.part_num,
                            partImgUrl: part.part_img_url,
                            setNum: set_num
                        }
                    )
                ) : []
        }
    }
}
  