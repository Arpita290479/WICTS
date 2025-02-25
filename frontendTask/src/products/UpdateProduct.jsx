import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateProduct() {
    let navigation = useNavigate()
 let [showCat, setShowCat] = useState([])

    let [data, setData]= useState({
       brand:"",
        price:"",
        category:"",
        rating:"",
       
    })

    const {brand, price, category, rating} = data

    let {id} = useParams()
    useEffect(()=>{
        getDataById()
    }, [])
    async function getDataById(){
        let result = await axios.get(`http://localhost:3000/api/getDataById/${id}`)
        setData(result.data[0])
    }

    function handleChange(e){
        setData({...data,[e.target.name]:e.target.value })
    }



    async function handleSubmit(e){
        e.preventDefault()        
        await axios.put(`http://localhost:3000/api/updateProduct/${id}`, data)
        navigation('/product')
    }

    useEffect(()=>{
      getCategory()
  }, [])
  async function getCategory(){
      let result = await axios.get(`http://localhost:3000/api/getCategory`)
      setShowCat(result.data)
  }

  return (
    <section>
      <div className="bg-gradient-to-r from-green-600 to-yellow-600 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Update Product</h2>
           
            <form action="#" method="POST" className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Brand{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="brand"
                      id="name"
                      name='brand'
                      value={brand}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Price{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="price"
                      id="name"
                      name='price'
                      value={price}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Category{' '}
                  </label>
                  <div className="mt-2">
                    <select name="category" value={category} id="" onChange={handleChange}>
                     {showCat.map((data)=>(
                       <option>{data.category_name}</option>

                     ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Rating{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="rating"
                      id="name"
                      name='rating'
                      value={rating}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
               
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                   UPDATE PRODUCT <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
