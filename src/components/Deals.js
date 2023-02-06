import {React, useState} from "react";

import Cardsdata from "./CardsData";
import { useDispatch } from "react-redux";
import { ADD } from "./redux/actions/action";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Deals = () => {

  const getdata = useSelector((state)=>state.cartreducer.carts)
  console.log(getdata)


const [data] = useState(Cardsdata)

// console.log(data)

const dispatch = useDispatch()

const send = (e) => {
  // console.log(e)
  dispatch(ADD(e))
  
}

   return (
    <>
    <h1 className=" text-start max-sm:text-xl ml-5 max-sm:mt-5 text-3xl font-semibold mb-5">Trending Products</h1>
     <div className="grid grid-cols-3 max-sm:grid-cols-2 items-center mx-5 justify-between gap-2 ">
     {data.map((element, id)=>{
       return(
         <>
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
  <NavLink to={`/detail/${element.id}`}  onClick={()=>send(element)}>
  <img src={element.imgdata} alt="" className="h-[25vw]  max-sm:h-[30vw] w-full object-cover rounded-lg"/>
</NavLink>
    <h5 className="text-gray-900 text-lg leading-tight font-semibold mb-2">{element.rname}</h5>
    <p className="text-gray-700 text-base mb-4">
     Price : $ {element.price}
    </p>
    <button onClick={()=>send(element)} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
    Add to cart +</button>
  </div>      
    </>
  )
})}
</div>
</>
  
   )
};

export default Deals;