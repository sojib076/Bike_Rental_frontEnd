
import { createApi } from '@reduxjs/toolkit/query/react';
import customBaseQuery from './customBaseQuery'; 

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['User','Bikes'],
  baseQuery: customBaseQuery, 
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => ({
        url: 'auth/signup',
        method: 'POST',
        body,
      }),
    }),
    
    login: builder.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    getProfile: builder.query({
      query: () => 'users/me',
      providesTags: ['User'],
    }),
    
    updateProfile: builder.mutation({
      query: (body) => ({
        url: 'users/me',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['User'],
     
    }),
    // bikes api endpoint
    getBikes: builder.query({
      query: () => 'bikes',
      providesTags: ['Bikes'],
    }),
    createBikes: builder.mutation({
      query: (body) => (
    
        {
  
        url: 'bikes',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Bikes'],
    }),
    deleteBikes: builder.mutation({
      query: (id) => ({
        url: `bikes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Bikes'],
    }),



    // rental api endpoint
    createRental: builder.mutation({
      query: (body) => (
       
        {
        url: 'rentals',
        method: 'POST',
        body,
      }),
    }),
    getAllRentals: builder.query({
      query: () => 'rentals',

    }),


  }),
});

export const { useSignUpMutation, useLoginMutation, useGetProfileQuery,useUpdateProfileMutation,useGetBikesQuery,useCreateRentalMutation ,useGetAllRentalsQuery,useCreateBikesMutation,useDeleteBikesMutation} = baseApi;

// "Rental Routes": {
//       "Create Rental": {
//         "method": "POST",
//         "route": "/api/rentals"
//       },