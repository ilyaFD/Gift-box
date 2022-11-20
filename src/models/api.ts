import axios from "axios";
import { IConfig, IFormData } from "../types";

export const getMinifigsAPI = async (apiUrl: string, config: IConfig, request: string): Promise<any> => {
    const url: string = `${apiUrl}/lego/minifigs/?search=${encodeURIComponent(request)}`;
    
    try {
        const response = await axios.get(url, config)
        return response.data
    } catch (error) {
        return error
    }
}

export const getPartsAPI = async (apiUrl: string, config: IConfig, set_num: string): Promise<any> => {
    const url: string = `${apiUrl}/lego/minifigs/${encodeURIComponent(set_num)}/parts/`;
    
    try {
        const response = await axios.get(url, config)
        return response.data
    } catch (error) {
        return error
    }
}

export const postForm = async (data: IFormData): Promise<any> => {
    try {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data)
        return response.data
    } catch (error) {
        return error
    }
}