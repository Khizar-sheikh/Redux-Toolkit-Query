import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
  }),
});

export default productsApi;
export const { useGetProductsQuery } = productsApi;
