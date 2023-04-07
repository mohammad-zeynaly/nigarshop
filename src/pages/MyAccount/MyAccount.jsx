import React,{useState} from "react";
import FromItem from "./FormItem"
import { useLocation,Link } from "react-router-dom";
import {FiUserPlus,FiLogIn,FiEye,FiEyeOff} from "react-icons/fi"



function MyAccount () {
    let location = useLocation()
    const [statusAccount,setStatusAccount] = useState(true) // true => Section login  &&  false Section register
    
    const [formItem,setFormItem] = useState([
        {id:1,title:"ورود به حساب کاربری",labelOne:"نام کاربری یا آدرس ایمیل",labelTwo:'گذرواژه',forgetPassword:"گذرواژه خود را فراموش کرده اید؟",submitBtn:"ورود به نگارشارپ"},
        {id:2,title:"ثبت نام در نگار شاپ",labelOne:"آدرس ایمیل",labelTwo:'گذرواژه',security:"اطلاعات شخصی شما نزد ما نگهداری میشود و به هیچ عنوان سوءاستفاده نخواهد شد.",submitBtn:" ثبت نام در نگارشارپ"},
    ])
    return(
        <section className="my-account mb-[5.5rem]">
            <div className="container">
                <div className="flex flex-col items-center mt-6 lg:mt-12">
                    <Link className="w-32" to="/"><img className="w-full object-cover " src="./assets/images/negarshop-logo.png" /></Link>
                    
                    <div className="w-full sm:w-[500px] bg-white overflow-hidden rounded-[20px] mt-8">

                        <ul className="flex justify-evenly items-center">
                        <li to="#login" onClick={() => setStatusAccount(true)} className={`${statusAccount ? "bg-white" : "bg-[#f5f5f5]"} w-1/2 p-4 rounded-bl-[20px]`}>
                            <button className={`flex items-center ${statusAccount ? "text-primary" : "text-[#aaa]"}`}>
                                    <FiLogIn className="w-7 h-7 sm:w-9 sm:h-9"/>
                                    <div>
                                    <span className="block font-iranSansBold">  ورود </span>
                                    <span className="text-[15px] pt-3"> به نگارشارپ </span>
                                    </div>
                            </button>
                            </li>
                            <li to="#register" onClick={() => setStatusAccount(false)} className={`${!statusAccount  ? "bg-white" : "bg-[#F5F5F5]"} w-1/2 p-4 rounded-bl-[20px]`}>
                                <button className={`flex items-center ${!statusAccount ? "text-primary" : "text-[#aaa]"}`}>
                                    <FiUserPlus className={`${!statusAccount ? "fill-primary stroke-primary" : "fill-[#aaa] stroke-[#aaa]"} ml-3 w-7 h-7 sm:w-9 sm:h-9`}/>
                                    <div>
                                    <span className="block font-iranSansBold"> ثبت نام </span>
                                    <span className="text-[15px] pt-3"> در نگارشارپ </span>
                                    </div>
                                </button>
                            </li>
                        </ul>

                        {statusAccount ? (
                            <FromItem {...formItem[0]} />
                       
                        )
                        :(
                            <FromItem {...formItem[1]} />
                        )}


                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyAccount;