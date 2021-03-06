import { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";
import { instance } from "./api";

export type UserType = {
    _id?: string

    name: string
    description: string
    picture: string
}

export const usersAPI = {
    getUsers(): Promise<AxiosResponse<IUser[]>> {
        return instance.get('users')
            .then(res => res)
    },
    getCurrentUser(id: string): Promise<AxiosResponse<IUser>> {
        return instance.get(`users/${id}`)
            .then(res => res)
    },
    updateUser(user: UserType): Promise<AxiosResponse<IUser>> {
        return instance.put('users', user)
            .then(res => res)
    },
    deleteUser(id: string) {
        return instance.delete(`users/${id}`)
            .then(res => res)
    }
}