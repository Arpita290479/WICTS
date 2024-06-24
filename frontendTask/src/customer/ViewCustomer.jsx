import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ViewCustomer() {
let [data, setData] = useState([])
    let {id} = useParams()
    useEffect(()=>{
        getDataById()
    }, [])
    async function getDataById(){
        let result = await axios.get(`http://localhost:3000/api/getCustomerById/${id}`)
        setData(result.data)
    }

  return (
    <>
    {data.map((data)=>(
        <div className="w-[300px] rounded-md border">
      
      <div className="p-4">
        <h1 className="text-lg font-semibold"> ID:- <span>{data.id}</span></h1>
        <h1 className="text-lg font-semibold">Full Name:- <span>{data.full_name}</span></h1>
        <h1 className="text-lg font-semibold">Email :- <span>{data.email }</span></h1>
       
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
    ))}
    </>
  )
}
