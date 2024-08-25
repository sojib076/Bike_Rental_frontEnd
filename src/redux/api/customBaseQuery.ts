import { BaseQueryApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store'; 

const customBaseQuery = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
    const state = api.getState() as RootState; 
    const token = state.userAuth.token; 
  
    const baseQuery = fetchBaseQuery({
      baseUrl: 'https://bike-rental-backend-delta.vercel.app/api/',
      prepareHeaders: (headers) => {
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
      },
    });
  
    return baseQuery(args, api, extraOptions);
  };
  
  export default customBaseQuery;