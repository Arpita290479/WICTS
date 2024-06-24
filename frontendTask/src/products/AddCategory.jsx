import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function AddCategory() {
    let navigation = useNavigate()
    let [data, setData]= useState({
        category_name:"",
        category_discription:"",
        
    })

    const {category_name, category_discription} = data

    function handleChange(e){
        setData({...data,[e.target.name]:e.target.value })
    }


    async function handleSubmit(e){
        e.preventDefault()        
        await axios.post(`http://localhost:3000/api/addCategory`, data)
        navigation('/product')
    }



  return (
    <section>
      <div className="bg-gradient-to-r from-green-600 to-yellow-600 grid grid-cols-1 lg:grid-cols-1">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">ADD CATEGORY</h2>
           
            <form action="#" method="POST" className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Category Name{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="category_name"
                      id="name"
                      name='category_name'
                      value={category_name}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Category Discription{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="category_discription"
                      id="name"
                      name='category_discription'
                      value={category_discription}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
               
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Category <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              
            </div>
          </div>
        </div>
       
      </div>
    </section>
  )
}
