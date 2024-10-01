// import React, { useState, useEffect } from 'react'
import React from 'react'
import './App.css'

import { api } from './app/api'

// console.log(api)

const Count = ({name}) => {
  const query = api.useGetCountQuery({name});   // 여기서 {name} 은  {name:name} 과 동일
  // console.log(query)  // data, isFetching, isError, isLoading, isSuccess 등이 존재
  const mutation = api.useSetCountMutation();
  const setCount = mutation[0]; // 해당 함수가 호출될 때 서버와 통신  => Promise를 응답값 return
  if (query.isLoading) {
    return <>Loading</>
  }
  return (
    <div>
      <button
        onClick={() => {
          setCount({ name, value : query.data + 1 });  // Promise로 응답값 return
        }}
      >
        {mutation[1].isLoading ? "Updating..." : ""}    {/* muation의 두번째 원소에 isLoading 포함 / (주의! isFetching은 없음!) */}
        {query.isFetching ? "Fetching..." : ""}
        {name} {query.data}
      </button>
    </div>
  )
}

export default function App() {

  return (
    <div className='container'>
      <Count name="KSH" />
    </div>
  )
}

