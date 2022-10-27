import { axiosApiInstance } from './APIService';

export type UpdateUser ={
    firstname?:string;
    lastname?:string;
    phone?:string;
    email?:string;
    password?:string;
    typeUser?:number;
}

export async function getUser() {
    const response = axiosApiInstance.get(
        'user/myInfo',
    )
    return response
}

export async function updateFirstname(data:string) {
    const response = await axiosApiInstance.patch<UpdateUser | any>(
        'user',
        {
            firstname: data
        }
    )
    return response
}

export async function updateLastname(data:string) {
    const response = await axiosApiInstance.patch<UpdateUser | any>(
        'user',
        {
            lastname: data
        }
    )
    return response
}

export async function updatePhone(data:string) {
    const response = await axiosApiInstance.patch<UpdateUser | any>(
        'user',
        {
            phone: data
        }
    )
    return response
}

export async function updateEmail(data:string) {
    const response = await axiosApiInstance.patch<UpdateUser | any>(
        'user',
        {
            email: data
        }
    )
    return response
}

export async function updatePassword(data:string) {
    const response = await axiosApiInstance.patch<UpdateUser | any>(
        'user',
        {
            password: data
        }
    )
    return response
}