import axios from "axios";

export interface IConfig {
    [key: string]: {[key: string]: string}
}

export interface IMinifig {
    last_modified_dt: string
    name: string
    num_parts: number
    set_img_url: string
    set_num: string
    set_url: string
    theme_id: number
    year: number
}

export interface ISearchMinifigsRes {
    results: Array<IMinifig>
}

export interface ISearchMinifigs {
    (
        apiUrl: string,
        config: IConfig,
        set_num: string
    ): Promise<ISearchMinifigsRes>;
}

export const searchMinifigs: ISearchMinifigs = async (apiUrl, config, request) => {
    const url: string = `${apiUrl}/lego/minifigs/?search=${encodeURIComponent(request)}`;
    
    try {
        const response = await axios.get(url, config)
        return response.data
    } catch (error) {
        return error
    }
}

export const getMinifigParts: ISearchMinifigs = async (apiUrl, config, set_num) => {
    const url: string = `${apiUrl}/lego/minifigs/${encodeURIComponent(set_num)}/parts/`;
    
    try {
        const response = await axios.get(url, config)
        return response.data
    } catch (error) {
        return error
    }
}