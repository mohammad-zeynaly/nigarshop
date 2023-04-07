import React,{useState} from "react"
import {FiEye,FiEyeOff} from "react-icons/fi"
import { Link } from "react-router-dom";

function FormItem (props) {

    const [statusPassword,setStatusPassword] = useState(false)

    return(
        <div className="p-4 my-6">
            <h5 className="text-center mx-auto max-w-[10rem] pb-2 text-[#999] border-b border-dashed">{props.title}</h5>

                <form action="#" method="post">
                    <div className="flex flex-col mt-6">
                        <label for="userName" className="text-sm text-[#999]">{props.labelOne}</label>
                        <input type="email" className="text-[#495057] bg-[#F5F5F5] mt-2 transition-colors duration-150 rounded-[20px] focus:outline-none py-2 px-4 focus:bg-white focus:shadow-[0_2px_5px_rgba(0,0,0,0.1)]" id="userName" name="userName" autoComplete="true" />
                    </div>
                    <div className="flex flex-col mt-8 relative">
                        <label for="userName" className="text-sm text-[#999]">{props.labelTwo}</label>
                        <input type={`${statusPassword ? "text" : "password"}`} className="text-[#495057] bg-[#F5F5F5] mt-2 transition-colors duration-150 rounded-[20px] focus:outline-none py-2 px-4 focus:bg-white focus:shadow-[0_2px_5px_rgba(0,0,0,0.1)]" id="userName" name="userName" autoComplete="true" />
                        <FiEye onClick={() => setStatusPassword(current =>  !current)} className={`${statusPassword ? "hidden" : ""} text-[#495057] cursor-pointer absolute top-[60%] left-[3%]`}/>
                        <FiEyeOff onClick={() => setStatusPassword(current => !current)} className={`${!statusPassword ? "hidden" : ""} text-[#495057] cursor-pointer absolute top-[60%] left-[3%]`}/>
                    </div>
                        <Link className="text-sm block my-4 text-primary">{props.forgetPassword}</Link>
                        <span className="block my-4 text-sm text-[#999]">{props.security}</span>
                        <button className=" bg-primary w-full text-white py-2 rounded-[20px]" type="submit">{props.submitBtn}</button>
                </form>
        </div>
    )
}

export default FormItem;