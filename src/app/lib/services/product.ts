
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '@/types';
import { getURL } from '@/utils';

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${getURL()}/api/products`
	}),
	endpoints: (builder) => ({
		getAllProduct: builder.query<Product[], void>({
			query: () => '',
		}),
		getProductByname: builder.query<Product, string>({
			query: (productName) => `${getURL()}/api/products/${productName}`,
		}),
	}),
});

export const { useGetAllProductQuery, useGetProductBynameQuery } = productApi;