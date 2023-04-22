import React from "react";
import { Link } from "react-router-dom";


function Products (props) {
    return(
        <section className="products mt-10 bg-white py-8">
            <div className="container">
                <div className="flex justify-between border-b-2 border-[#F5F5F5] mb-4">
                    <span className="text-primary border-b-2 border-primary pb-1">{props.name}</span>
                    <Link className="bg-[#757575] hover:opacity-90 text-white mb-1 py-1 px-2 rounded-[20px] text-sm" to={props.link}>دیدن همه</Link>
                </div>

                {props.children}
                
            </div>
        </section>
    )
}


export default Products;