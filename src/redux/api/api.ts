
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

 
    updateUserRole: builder.mutation({
        query: (id) => ({
          url: `users/${id}/role`,
          method: 'PUT',
        }),
    }),
    GetAllUsers: builder.query({query: ({ page = 1, limit = 10, }) => (
      {
        url: 'users/allusers',
        params: { page, limit},
      }
    ),
    providesTags: ['User'],
  }),
    deleteUsers: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),





  

 getBikes: builder.query({query: ({ page = 1, limit = 10, brand = "", model = "" ,recentlyAdded ='' }) => (  
      {
        url: 'bikes',
        params: { page, limit, brand, model ,recentlyAdded },
    }),
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

    updateBike: builder.mutation({
      query: ({body,id}) => ({
        url: `bikes/${id}`,
        method: 'PUT',
        body,
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
      providesTags: ['User'],

    },
    
  
    
  
  ),
    getSingleRental: builder.query({
      query: (id) => {
       
        return `rentals/trans/${id}`;
      },
    }),



    returnRental: builder.mutation({
      query: ({ id, returnTime }) => ({
        url: `rentals/${id}/return?returntime=${returnTime}`,
        method: 'PUT',
      }),
      invalidatesTags: ['User', 'Bikes'],
    }),

    allrentalbike: builder.query({
      query: () => 'rentals/allrentalbike',
    }),

    // get all bikes for rental adimn
    getAllBikes: builder.query({
      query: () => 'rentals/rentalpayment',
    }),





    payRental: builder.mutation({
      query: (body) => ({
        url: `rentals/fullpayment`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    // add rental review
    addReview: builder.mutation({
      query: (body) => ({
        url: 'reviews/addreviews',
        method: 'POST',
        body,
      }),
    }),

    // get sinlge rental 

    getSinglebikeReview: builder.query({
      query: (id) => {
        return (
          `reviews/getpostreviews/${id}`
        );
      }
    }),
    getUserReviews: builder.query({
      query: () => 'reviews/getuserreviews',
    }),

    // add to favorites
    
    addtoFavorites: builder.mutation({
      query: (body) => ({
        url: 'favourite',
        method: 'POST',
        body,
      }),
    }),

    getfavBikes: builder.query({
      query: () => 'favourite',

    }),
// delete the fav 
removeFavbike : builder.mutation({
  query: (bikeId) => ({
    url: `favourite/${bikeId}`,
    method: 'DELETE',
  }),
  invalidatesTags: ['User'],
})


  }),
});

export const { useSignUpMutation, useLoginMutation, useGetProfileQuery,useUpdateProfileMutation,useGetBikesQuery,useCreateRentalMutation ,useGetAllRentalsQuery,useCreateBikesMutation,useDeleteBikesMutation, usePayRentalMutation,
  useReturnRentalMutation,useUpdateUserRoleMutation ,
  useGetAllUsersQuery,useUpdateBikeMutation, useDeleteUsersMutation,useAllrentalbikeQuery,
  useGetSingleRentalQuery,
  useAddReviewMutation,
  useGetSinglebikeReviewQuery,
  useGetAllBikesQuery,
  useGetUserReviewsQuery,
  useAddtoFavoritesMutation,
  useGetfavBikesQuery,
  useRemoveFavbikeMutation


 } = baseApi;

// "Rental Routes": {
//       "Create Rental": {
//         "method": "POST",
//         "route": "/api/rentals"
//       },