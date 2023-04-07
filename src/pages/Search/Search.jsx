import React, { useState } from "react"
import {FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Search () {

    const [searchValue,setSearchValue] = useState()

    return(
        <section className="search h-screen overflow-hidden">
            <div className="container">
                <div className="mt-8">
                    <h4 className="mt-6 text-xl text-[#888]">جستجو در سایت</h4>
                    <div className="w-full relative mt-6">
                        <input onChange={ (event) => setSearchValue(event.target.value) } type="text" value={searchValue} className="w-full transition-all focus:outline-none focus:bg-[#ddd] bg-[#eee] p-4 rounded-[20px] text-[#495057] text-[15px]"  placeholder="  جستجو در محصولات...  " />
                        <FaSearch className="text-[#999] absolute left-[3%] top-[36%]"/>
                        <Link to="/" className="bg-primary text-white rounded-[20px] p-2 my-6 hidden lg:flex max-w-[9rem] mx-auto text-center">بازگشت به فروشگاه</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search;