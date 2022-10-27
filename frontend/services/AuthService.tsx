import axios from 'axios';
import { axiosApiInstance } from './APIService';

export type LoginResponse = {
    access_token: string | null,
};

export type Registration = {
  firstname:string;
  lastname:string;
  phone:string;
  email:string;
  password:string;
  typeUser?:number;
}

export async function login(email : string, password : string) {
      // 👇️ const data: LoginResponse
      const { data } = await axiosApiInstance.post<LoginResponse | any>(
        'auth/login',
        { login: email, password: password },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
  
      return data;
  }

export async function createAccount(user: Registration){
  const {data} = await axiosApiInstance.post<Registration>(
    'user',
    { firstname: user.firstname,
      lastname: user.lastname,
      phone: user.phone,
      email: user.email,
      typeuser_id: 1,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );

  return data;
} 

  
/* export async function refreshToken(tokens: LoginResponse) {
  try {
    // 👇️ const data: LoginResponse
    const { data } = await axios.post<LoginResponse>(
      URL_API+'/auth/refreshtoken',
      tokens,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
} */