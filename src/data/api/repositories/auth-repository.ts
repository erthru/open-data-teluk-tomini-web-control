import { BasicResponse, get, post } from "..";
import { API_URL } from "../../../helpers/environtments";
import { Merge } from "../../../helpers/utility";
import { Admin } from "./admin-repository";
import { Organization } from "./organization-repository";
import { Writer } from "./writer-repository";

export type Auth = {
    _id?: string;
    username?: string;
    password?: string;
    level?: AuthLevel;
    createdAt?: Date;
    updatedAt?: Date;
};

export enum AuthLevel {
    ADMIN = "ADMIN",
    ORGANIZATION = "ORGANIZATION",
    WRITER = "WRITER",
}

export const me = async (): Promise<Merge<BasicResponse, { auth: Auth; admin: Admin; organization: Organization; writer: Writer }>> => {
    return await get(`${API_URL}auth/me`);
};

export const login = async (
    username: string,
    password: string
): Promise<Merge<BasicResponse, { auth: Auth; token: string; refreshToken: string }>> => {
    return await post(`${API_URL}auth/login`, {
        username: username,
        password: password,
    });
};
