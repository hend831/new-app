import { Children } from "react"
import Image from "./Image"
import Button from "./ui/Button"
import { Iproduct } from "../interfaces"
import { txtSlicer } from "../utils/functions"


interface IProps  {
product :Iproduct
}

const ProductCard = ({product}: IProps) => {
    const {title,description,imageUrl,category,price}= product;
  return (
    <div className="max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto md:mx-0 border    rounded-md flex flex-col">
        
        <Image imgUrl={imageUrl}
        alt={"product name"}
        className="rounded-md mb-4 w-full h-48 object-cover"/>
        <div className="mx-3">
        <h3 className="mb-2 ">{title}</h3>
        <p>{txtSlicer (description)}</p>
        <div className="flex items-center my-2  space-x-2 " >
        {/* <span className={`w-5 h-5 map.${colors} rounded-full cursor-pointer`} />
        <span className={`w-5 h-5 ${colors} rounded-full cursor-pointer`} />

        <span className={`w-5 h-5 ${colors} rounded-full cursor-pointer`} /> */}


<span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-blue-500 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-yellow-500 rounded-full cursor-pointer"/>
        </div>
        <div className="flex items-center justify-between mb-2">
            <span>${price}</span>
            <Image imgUrl= {category.imageUrl}
        alt={category.name}
        className="w-9 h-9 rounded-full object-center"/>
            
        </div>
        <div className="flex items-center justify-between space-x-2 ">
            <Button className= "  bg-indigo-700  " width="w-full"  children={"Edit"}/>
            <Button className="bg-red-700   " width="w-full"  children={"Delete"}/>
            
        </div>
        </div>
       
       
    </div>
  )
}

export default ProductCard