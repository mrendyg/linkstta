import type { Link } from "../interfaces/Interface";
import { axi } from "./useAxios";

export const getListLink = async(): Promise<Link[]> => {
    const response = await axi.get(`/link/list`);
    return response.data;
}

export const getIdLink = async(id : number): Promise<Link[]> => {
    const response = await axi.get(`/link/${id}`);
    return response.data;
}