import { BasicResponse, get } from "..";
import { API_URL } from "../../../helpers/environtments";
import { Merge } from "../../../helpers/utility";

export type Inforgraphic = {
    _id?: string;
    title?: string;
    banner?: string;
    writerId?: string;
    createdAt?: Date;
    updatedAt?: Date;
};

export const getAll = async (page: number, limit: number): Promise<Merge<BasicResponse, { infographics: [Inforgraphic]; total: number }>> => {
    return await get(`${API_URL}infographics?page=${page}&limit=${limit}`);
};
