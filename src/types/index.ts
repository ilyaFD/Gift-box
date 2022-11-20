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
    parts: Array<IPart>
    partsMessage: string
}
export interface IPart {
    name: string
    partNum: string
    partImgUrl: string
    setNum: string
}
export interface IMinifigsRes {
    isError: boolean
    message?: string
    minifigs: Array<IMinifig>
}
export interface IPartsRes {
    isError: boolean
    message?: string
    parts: Array<IPart>
}

export interface IFormData {
    adress: string
    city: string
    dob: string
    email: string
    name: string
    phone: string
    state: string
    surname: string
    zip: string
}