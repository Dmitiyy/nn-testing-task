import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ratesApi = createApi({
  reducerPath: 'ratesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${process.env.REACT_APP_API_URL}`,
    headers: {
      apikey: process.env.REACT_APP_API_KEY
    }
  }),
  endpoints: (builder) => ({
    getLatest: builder.mutation({
      query: (base) => {
        return {
          url: `/latest?symbols=EUR,USD,AED,CZK&base=${base}`,
          method: 'GET'
        }
      },
    }),
    convert: builder.mutation({
      query: ({to, from, amount}) => {
        return {
          url: `/convert?to=${to}&from=${from}&amount=${amount}`,
          method: 'GET'
        }
      },
    }),
    history: builder.mutation({
      query: ({to, from, amount}) => {
        return {
          url: `/timeseries?start_date=2023-10-01&end_date=2023-10-24`,
          method: 'GET'
        }
      },
    }),
  }),
})

export const { useGetLatestMutation, useConvertMutation } = ratesApi