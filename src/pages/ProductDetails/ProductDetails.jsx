import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import ProductsData from "../../data/ProductData";
import {FiArchive} from "react-icons/fi"
import {FaRegChartBar} from "react-icons/fa"
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"


function ProductDetails () {

    const persian = new Intl.NumberFormat('fa')
    const params = useParams()
    const [allProducts,setAllProduct] = useState(ProductsData)

    const [productDetail ,setProductDetail] = useState([])
    const[count,setCount] = useState(1)

    const mainProduct = allProducts.find(product => (
        product.id === +params.productId
    ))

    useEffect(() => {        
        setProductDetail(mainProduct)
    },[allProducts,params])


    return(
        <>
        {productDetail && 
        <section className="product-details">
            <div className="container">
              
                <div className="bg-white flex items-center my-8 rounded-[20px] overflow-hidden p-4">
                    <div className="w-1/4">
                        <img className="object-cover w-full" src={productDetail.img} alt="product image" />
                    </div>
                    <div className="text-sm w-1/2">
                        <h3 className="text-lg">{productDetail.name}</h3>
                        <div className="flex items-center mt-3">
                            
                        <span className="flex items-center">
                        <FiArchive className="ml-2"/>
                        دسته : {productDetail.categoriesPersian}
                        </span>

                        <span className="flex items-center pr-8">
                        <FaRegChartBar className="ml-2"/>
                        24 فروش موفق
                        </span>

                        </div>
                        <h4 className="mt-8 text-base border-b border-[#eee] pb-4 text-[#555] font-iranSansBold">آماده ارسال</h4>
                        <div className="text-[#757575]">
                            <h4 className="text-base mt-5 text-[#777] font-iranSansBold">ویژگی های محصول</h4>
                            <ul className="flex flex-col mt-2">
                                <li className="mb-2 text-[#464646]">ویژگی اول : لورم ایپسوم</li>
                                <li className="mb-2 text-[#464646]">ویژگی دوم : لورم ایپسوم</li>
                                <li className="mb-2 text-[#464646]">ویژگی سوم : لورم ایپسوم</li>
                            </ul>
                        </div>
                    </div>
                    <div id="basket" className="w-1/4 bg-[#EEEEEE] px-4 py-6 rounded-[20px] text-[#888]">
                        <div className="flex justify-between items-center">
                            <span>فروشنده:</span>
                            <span>سام تل</span>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span>قیمت:</span>
                            <span className="text-primary font-iranSansBold"> {persian.format(productDetail.price)} تومان </span>
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <div className="flex items-center relative">
                                <button onClick={() => count < 10 && setCount(current => current+1)} className="flex justify-center items-center bg-[#eee] absolute right-[2px] h-8 w-6 rounded-[20px]"><AiOutlinePlus className="text-[#666]"/></button>
                                <input type="number" className="rounded-[10px] text-center w-20 h-10 bg-[#f5f5f5] focus:outline-none" min="1" max="10" value={count}/>
                                <button onClick={() => count > 0 && setCount(current => current-1)} className="flex justify-center items-center bg-[#eee] absolute left-[2px] h-8 w-6 rounded-[20px]"><AiOutlineMinus className="text-[#666]"/></button>
                            </div>
                            <button className="bg-primary text-white rounded-[20px] py-2 px-4"> افزودن به سبد خرید</button>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 my-8 rounded-[20px] text-[#666]">
                    <h3 className="text-lg">توضیحات محصول</h3>
                    <span className="mt-4 text-[15px] "> نقد و بررسی تخصصی محصولات مختلف در این بخش</span>
                    <p className="my-2 text-sm leading-7">
                        به نظر می‌رسد سال ۲۰۱۸ برای سامسونگ سال خوبی باشد این شرکت کره‌ای با تولید گوشی‌های جدید کار خود در سال جدید شروع کرده است و اخیرا دو گوشی جدید دیگر از سامسونگ معرفی شد که S9 وS9 Plus  نام دارند. گوشی موبایل S9 Plus و صفحه‌نمایش آن طراحی زیبایی دارد و باز هم می‌توان تمایل به صفحه‌نمایش بدون حاشیه را در این تولید جدید مشاهده کرد. این گوشی فریمی آلومینیومی دارد و پشت و جلوی آن از شیشه ساخته شده است و جلوه‌ی زیبایی به گوشی داده است. روکش محافظ شیشه‌های پشت و جلوی این گوشی Corning Gorilla Glass 5 است. این گوشی گواهینامه IP68 دارد، یعنی تا ۳۰ دقیقه و تا عمق ۱.۵متری در برابر آب مقاوم است و گردوغبار هم نمی‌تواند آن را از کار بیندازد. این گوشی دارای حسگر عنبیه چشم است که با سرعت بسیار خوبی عکس‌العمل نشان می‌دهد و در کنار حسگر اثرانگشت یکی دیگر از راه‌های امن ورود به محیط کاربری S9 Plus است.  صفحه‌نمایش استفاده‌شده در این گوشی ۶.۲ اینچ با رزولوشن QHD+ یعنی ۱۴۴۰x۲۹۶۰ است که با استفاده از فناوری Super AMOLED و پنل OLED تصاویر شفاف و بی‌نظیری را به نمایش می‌گذارد. این صفحه‌نمایش در هر اینچ ۵۳۱ پیکسل را نشان می‌دهد که این یعنی جزئیات و وضوح تصویر عالی است. همچنین روکش این نمایشگر لایه‌ی محافظ Corning Gorilla Glass 5 است که از خط‌وخش و ضربه جلوگیری می‌کند. تراشه‌ی این محصول، Exynos 9810 بوده و به همراه  ۶ گیگابایت رم عرضه می‌شود. این تراشه یکی از قوی‌ترین تراشه‌های موجود در حال حاضر است و برای انجام بازی‌های سنگین و بازکردن چندین برنامه به صورت هم‌زمان و تماشای ویدئو کاملا مناسب است و کم نمی‌آورد. تراشه‌ی گرافیکی Mali-G72 MP18 هم برای پخش ویدئو و بازی مناسب است. این گوشی با ۶۴ گیگابایت حافظه‌ی داخلی عرضه خواهد شد و با استفاده از یک کارت حافظه‌ی جانبی تا ۴۰۰ گیگابایت می‌توانید این میزان را افزایش دهید. حال درباره‌ی دوربین صحبت می‌کنیم. دوربین اصلی S9 Plus از دو سنسور ۱۲مگاپیکسلی تشکیل شده و به فلش LED مجهز شده است. این دوربین امکانات و ویژگی‌های بی‌نظیری هم در عکاسی و هم در فیلم‌برداری دارد که از مهم‌ترین آن می‌توان به قابلیت عکاسی و فیلمبرداری همزمان با کیفیت 4K برای فیلم و ۹ مگاپیکسل برای عکس اشاره کرد. همچنین دریچه‌ی دیافراگم f/1.5-2.4 باعث می‌شود تصاویر با روشنایی خوبی ثبت شوند و کیفیت عکس‌های گرفته شده بسیار خوب باشد. دوربین سلفی سنسور ۸ مگاپیکسلی دارد و می‌تواند عکس‌های واید بگیرد و قابلیت عکاسی HDR به صورت اتوماتیک هم یکی دیگر از ویژگی‌های دوربین سلفی است. این دستگاه در ۴ رنگ آبی، خاکستری، بنفش و مشکی عرضه می‌شود. پشتیبانی از فناوری شارژ سریع نسخه ۲.۰، درگاه USB Type-C و حسگر اثرانگشت در پشت گوشی هم از دیگر ویژگی‌های این تازه‌وارد است. سامسونگ با S9 و S9 Plus سال جدید میلادی را آغاز کرد و سایر رقبا باید به فکر تولید و طراحی گوشی‌های جدید باشند.
                    </p>
                </div>

            </div>
        </section>
        }
        </>
    )
}

export default ProductDetails;