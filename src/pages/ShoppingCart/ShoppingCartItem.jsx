import React,{useState} from "react";
import {AiOutlineClose,AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import {Link} from "react-router-dom";


function ShoppingCartItem (props) {
    const persian = new Intl.NumberFormat('fa')
    const[count,setCount] = useState(1)

    let {id,img,name,price} = props
    return(
    <tr className="mb-4 py-2 border-b border-solid sm:border-none grid gap-4 grid-cols-2 justify-items-center items-center sm:table-row">
        <td className="sm:ml-5 sm:w-16 sm:h-14 w-8 h-8 bg-[#FFF7F7] rounded-[20px] cursor-pointer flex justify-center items-center"><AiOutlineClose className="stroke-[#ff0000] fill-[#ff0000] w-[1.1rem] h-[1rem] sm:w-[1.3rem] sm:h-[1.3rem]"/></td>
        <td className="sm:ml-5 sm:pb-4 rounded-[10px] w-16"><Link to={`/productDetails/${id}`}><img className="object-cover w-full" src={img} alt="shoppingCart image"/></Link></td>
        <td className="sm:ml-5 rounded-[10px]"><Link to={`/productDetails/${id}`}><h6 className="text-sm hover:text-primary">{name}</h6></Link></td>
        <td className="sm:ml-5 rounded-[10px]"><span className="text-sm text-primary">{persian.format(price)} تومان</span></td>
        <td className="sm:ml-5 rounded-[10px]">
            <div className="flex items-center justify-center relative">
                <button onClick={() => count < 10 && setCount(current => current+1)} className="flex justify-center items-center bg-[#eee] absolute ml-12 h-8 w-6 rounded-[20px]"><AiOutlinePlus className="text-[#666]"/></button>
                <input type="number" className="rounded-[10px] text-center w-20 h-10 bg-[#f5f5f5] focus:outline-none" min="1" max="10" value={count}/>
                <button onClick={() => count > 0 && setCount(current => current-1)} className="flex justify-center items-center bg-[#eee] absolute mr-12 h-8 w-6 rounded-[20px]"><AiOutlineMinus className="text-[#666]"/></button>
            </div>
        </td>
    </tr>
    )
}

export default ShoppingCartItem;