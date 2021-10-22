import { BasicResponse, get } from "..";
import { API_URL } from "../../../helpers/environtments";
import { Merge } from "../../../helpers/utility";

export type Dataset = {
    _id?: string;
    title?: string;
    description?: string;
    source?: string;
    year?: string;
    contact?: string;
    reference?: string;
    attachment?: string;
    slug?: string;
    downloaded?: number;
    tagIds?: [string];
    categoryId?: string;
    organizationId?: string;
    createdAt?: Date;
    updatedAt?: Date;
};

export const getAll = async (page: number, limit: number): Promise<Merge<BasicResponse, { datasets: [Dataset]; total: number }>> => {
    return await get(`${API_URL}datasets?page=${page}&limit=${limit}`);
};
