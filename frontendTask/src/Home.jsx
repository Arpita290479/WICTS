import React from 'react'
import { Link } from 'react-router-dom'

import { ArrowUpRight } from 'lucide-react'


export default function Home() {
  return (
   <>
   <div className='w-full h-[140vh] bg-gradient-to-r from-green-600 to-yellow-600 flex justify-center items-center flex-col gap-[50px]'>
   <h1 className='text-white text-3xl font-bold'>DASHBOARD</h1>
    <div className="w-[300px] rounded-md border">
    
      <img
        src="https://media.istockphoto.com/id/1296705483/photo/make-up-products-prsented-on-white-podiums-on-pink-pastel-background.jpg?s=1024x1024&w=is&k=20&c=HYjdh-kg1C8Us70Oz9oxg92z4QvkO796J14ZTe2UgOk="
        alt="Laptop"
        className="h-[180px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        
        <Link to='/product'  className='p-2 bg-grey text-white rounded-2xl text-2xl font-bold'>PRODUCT</Link>
      </div>
    </div>

    <div className="w-[300px] rounded-md border">
    
    <img
      src="https://media.istockphoto.com/id/597267730/photo/thank-you-for-your-support.jpg?s=1024x1024&w=is&k=20&c=WTw-_-Q1wk6nkfkwewGwjF7ZhFaxjhn6QA-CCosDeL0="
      alt="Laptop"
      className="h-[180px] w-full rounded-t-md object-cover"
    />
    <div className="p-4">
      
      <Link to='/customer'  className='p-2 bg-grey text-white rounded-2xl text-2xl font-bold'>CUSTOMER</Link>
    </div>
  </div>
  </div>
  
   </>
  )
}
