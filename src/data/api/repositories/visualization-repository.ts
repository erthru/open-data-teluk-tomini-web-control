import { BasicResponse, get } from "..";
import { API_URL } from "../../../helpers/environtments";
import { Merge } from "../../../helpers/utility";

export type Visualization = {
    _id?: string;
    title?: string;
    body?: string;
    slug?: string;
    thumbnail?: string;
    organizationId?: string;
    writerId?: string;
    createdAt?: Date;
    updatedAt?: Date;
};

export const getAll = async (page: number, limit: number): Promise<Merge<BasicResponse, { visualizations: [Visualization]; total: number }>> => {
    return await get(`${API_URL}visualizations?page=${page}&limit=${limit}`);
};
