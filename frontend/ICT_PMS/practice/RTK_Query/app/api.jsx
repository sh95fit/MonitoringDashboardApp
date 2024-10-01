import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://example.com/api"}),
  tagTypes: ["Count"], // 사용하고 있는 태그 등록  (ex> providesTags에서 type으로 지정되는 태그)

  endpoints: (builder) => ({
    getCount: builder.query({
      query: ({name}) => `count/${name}`,
      providesTags: (result, error, arg) => [{ type: "Count", id: arg.name }]  // 태그 지정
    }),

    setCount: builder.mutation({
      query: ({name, value}) => {
        return {
          url: `count/${name}`,
          method: "POST",
          body: { value }
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: "Count", id: arg.name }] // 동일한 태그 삭제 및 업데이트
    })
  })
});